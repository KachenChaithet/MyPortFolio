import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient()

export const loginUser = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ message: 'please enter username and password' })
    }
    try {
        const findUser = await prisma.user.findUnique({
            where: { username: username }
        })

        if (!findUser) {
            return res.status(400).json({ message: 'not found' })
        }
        const isMatch = await bcrypt.compare(password, findUser.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'not correct' })

        }
        const token = jwt.sign(
            { id: findUser.id, username: findUser.username, role: findUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: findUser.id,
                username: findUser.username,
                role: findUser.role
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Login failed", details: error.message })
    }

}