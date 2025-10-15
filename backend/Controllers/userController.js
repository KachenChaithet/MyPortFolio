import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const createUser = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(401).json({ message: 'Enter username and password' })
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 8)
        const createUser = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword
            }
        })
        res.status(201).json({ message: 'create successfully', createUser })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create User.", details: err.message });

    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params
    const { username, password } = req.body

    try {

        const findUser = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        })

        if (!findUser) {
            return res.status(401).json({ message: 'not found' })
        }
        let newPassword = findUser.password
        if (password) {
            newPassword = await bcrypt.hash(password, 8)
        }

        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                username: username || findUser.username,
                password: newPassword
            }
        })

        res.status(201).json({ message: 'update successfully', updateUser })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create User.", details: err.message });

    }
}
export const getAlleUser = async (req, res) => {

    try {

        const findAllUser = await prisma.user.findMany()

        if (findAllUser.length === 0) {
            return res.status(401).json({ message: 'not admin ' })
        }

        res.status(201).json({ message: 'getall successfully', findAllUser })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create User.", details: err.message });

    }
}
export const getByIdUser = async (req, res) => {
    const { id } = req.params
    try {

        const findIdUser = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                username: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        if (findIdUser.length === 0 || !id) {
            return res.status(401).json({ message: 'not found ' })
        }

        res.status(201).json({ message: 'getid successfully', findIdUser })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create User.", details: err.message });

    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        })
        if (!user) {
            return res.status(401).json({ message: 'not found' })
        }

        const remove = await prisma.user.delete({
            where: { id: parseInt(id) }
        })

        res.status(201).json({ message: 'delete successfully', remove })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create User.", details: err.message });

    }
}