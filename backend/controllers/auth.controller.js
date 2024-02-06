
//export function to sign up  of user
export const signup = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required.' });
      }
  
       const hashPassword = await bcrypt.hashSync(password, 10);
       const  hashedPassword=hashPassword.toString();
       const newUser = new User({ username, email, password: hashedPassword });
       try {
        await newUser.save();
       } catch (error) {
         res.status(201).json(error.message);
       }
       
       res.status(201).json("user created successfully");
    } catch (error) {
      console.error('Error in signup:', error);
      next(error);
    }
  };