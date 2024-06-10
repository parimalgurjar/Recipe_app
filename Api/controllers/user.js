import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.json({ message: "User already exists" });
        }
        const hashPass = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashPass });
        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

import jwt from 'jsonwebtoken'; // Import jwt module

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User does not exist" });
        }
        
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
            return res.json({ message: "Invalid credentials" });
        }
        
        // Generate JWT token with expiration time
        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '365d' }); // Token expires after 365 days
        
        // Send response with token
        res.json({ message: `Welcome ${user.name}`, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const profile=async(req,res)=>{
    res.json({user:req.user})
}
