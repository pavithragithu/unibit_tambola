import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import  User  from "../../model/User.js";

export const register = async (req, res) => {
    const { username, password } = req.body;
    if(password.length < 6 || password.length > 16) {
      return res.status(400).json({ message: 'Password must be between 8 and 16 characters' });
    }
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      username:username,
      password: hashedPassword,
    });

    return res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.log("not regestered",error)
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // here we are creating the JSON WEB TOKEN (JWT)
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
  
      res.json({ token ,user });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
};

export default {
    login,
    register,
};
