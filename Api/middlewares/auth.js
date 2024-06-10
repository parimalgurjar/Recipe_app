import jwt from 'jsonwebtoken';
import { User } from '../Models/User.js';

export const Authenticate = async (req, res, next) => {
    const token = req.header("Auth");

    try {
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, please login first" });
        }
        const decoded = jwt.verify(token, "secretKey");
        const userId = decoded.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
