import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const createProfile = async (req, res) => {
    const { name, title, bio, email, phone } = req.body
    if (!name || !title || !bio || !email || !phone) {
        return res.status(400).json({ message: 'Enter require' })
    }
    try {
        const createprofile = await prisma.profile.create({
            data: {
                name,
                title,
                bio,
                email,
                phone
            }
        })
        res.status(201).json({ message: 'Create profile successfully', createprofile })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to create profile.", details: error.message })
    }
}

export const updateProfile = async (req, res) => {
    const { id } = req.params
    const { name, title, bio, email, phone } = req.body
    try {
        const updateprofile = await prisma.profile.update({
            where: { id: parseInt(id) },
            data: {
                name,
                title,
                bio,
                email,
                phone
            }
        })
        res.status(201).json({ message: 'Update profile successfully', updateprofile })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update profile.", details: error.message })
    }
}
export const getAllProfile = async (req, res) => {
    try {
        const findAll = await prisma.profile.findMany()
        res.status(201).json({ message: 'getAll profile successfully', findAll })


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to getAll profile.", details: error.message })
    }

}
