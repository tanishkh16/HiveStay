
//export function to sign up  of user
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

 export const signup = async (req, res, next) => {
  try {
    const { firstName,lastName, email, password,rollNumber,roomNumber,branch,mess,mobileNumber,homeMobileNumber,address } = req.body;
    
    // Check if email ends with @iiitu.ac.in
    if (!email || !email.endsWith('@iiitu.ac.in')) {
      return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
    }

    if (!firstName || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const hashPassword = await bcrypt.hashSync(password, 10);
    const hashedPassword = hashPassword.toString();
    
    const newUser = new User({ firstName,lastName, email, password: hashedPassword,rollNumber,roomNumber,branch,mess,mobileNumber,homeMobileNumber,address });

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
// function for google login if alreday singup it will login but if not signup it singup and gernerate a random passwrod 
// export const googleLogin = async (req, res, next) => {
//   try {
//     const userEmail = req.body.email.toLowerCase();
    
//     // Check if the user's email ends with 'iiitu.ac.in'
//     if (!userEmail.endsWith('@iiitu.ac.in')) {
//       return res.status(403).json({ error: 'Only iiitu.ac.in email addresses are allowed.' });
//     }

//     const user = await User.findOne({ email: userEmail });

//     if (user) {
//       const { password: pass, ...rest } = user._doc;
//       const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
//       res.cookie('access_token', token, { secure: true, httpsOnly: true }).status(200).json(rest);
//     } else {
//       const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
//       const hashPassword = await bcrypt.hashSync(generatedPassword, 10);
//       const newUser = new User({
//         username: req.body.username.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
//         email: userEmail,
//         password: hashPassword,
//         profilePhoto: req.body.photo,
//       });

//       await newUser.save();

//       const { password: pass, ...rest } = newUser._doc;
//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_TOKEN);
//       res.cookie('access_token', token, { httpsOnly: true }).status(200).json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// }

//simple function to delete the cookie
export const signOutUser=async(req,res,next)=>{

  try {
       res.clearCookie('access_token');
       res.status(200).json('User has been Sign out successfully');
      
  } catch (error) {
      next(error);
  }
}