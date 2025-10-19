import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createSkill = async (req, res) => {
    const { name, tags, icon } = req.body
    if (!name || !tags || !icon) {
        return res.status(400).json({ message: 'You need have name and tag ' })
    }
    try {
        const createSkill = await prisma.skill.create({
            data: {
                name,
                tags,
                icon
            }
        })

        res.status(201).json({ message: 'Create skill successfully', createSkill })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to create Skill.", details: error.message })
    }
}
export const updateSkill = async (req, res) => {
    const { id } = req.params
    const { name, tags, icon } = req.body

    try {
        const updateSkill = await prisma.skill.update({
            where: { id: parseInt(id) },
            data: {
                name,
                tags,
                icon
            }
        })
        res.status(201).json({ message: 'update skill successfully', updateSkill })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to update Skill.", details: err.message });
    }
}
export const getAlleSkill = async (req, res) => {
    try {
        const findallSkill = await prisma.skill.findMany()
        res.status(201).json({ message: 'getall skill successfully', findallSkill })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to getall Skill.", details: err.message });
    }

}
export const getByIdSkill = async (req, res) => {
    const { id } = req.params
    try {
        const findIdSkill = await prisma.skill.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                name: true,
                tags: true,
                icon: true
            }
        })
        res.status(201).json({ message: 'getid skill successfully', findIdSkill })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to getbyid Skill.", details: err.message });
    }
}
export const deleteSkill = async (req, res) => {
    const { id } = req.params
    try {
        const findIdSkill = await prisma.skill.findUnique({
            where: { id: parseInt(id) }
        })
        if (!findIdSkill) {
            return res.status(401).json({ message: 'not found' })
        }

        const remove = await prisma.skill.delete({
            where: { id: parseInt(id) }
        })
        res.status(201).json({ message: 'delete skill successfully', remove })

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Failed to delete Skill.", details: err.message });

    }
}