
//export function to sign up  of user
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User'; 

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if email ends with @iiitu.ac.in
    if (!email || !email.endsWith('@iiitu.ac.in')) {
      return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
    }

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const hashPassword = await bcrypt.hashSync(password, 10);
    const hashedPassword = hashPassword.toString();
    
    const newUser = new User({ username, email, password: hashedPassword });

    try {
      await newUser.save();
      res.status(201).json("User created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('Error in signup:', error);
    next(error);
  }
};



// export  login function  for user to login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !email.endsWith('@iiitu.ac.in')) {
      return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
    }

    const validUser = await User.findOne({ email: email });

    if (!validUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(404).json({ error: 'Password is incorrect' });
    }

    const { password: pass, ...rest } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_TOKEN);

    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 60 * 60 * 24 * 1000),
      secure: true,
      sameSite: 'none'
    };

    res.status(200).cookie('access_token', token, options).json(rest);
  } catch (error) {
    return next(error);
  }
};