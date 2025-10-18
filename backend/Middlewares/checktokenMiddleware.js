import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export const checkToken = (req, res, next) => {
    const token = req.headers['token']
    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" })
    }

}