import { PrismaClient } from "@prisma/client"
import fs from 'fs'


const prisma = new PrismaClient()

export const createproject = async (req, res) => {
    let { nameproject, description, imageUrl, githubUrl, demoUrl, stack } = req.body

    // แปลง stack จาก string เป็น array ถ้าเป็น string
    if (typeof stack === 'string') {
        try {
            stack = JSON.parse(stack)
        } catch (parseError) {
            return res.status(400).json({ message: 'Invalid stack format' })
        }
    }

    if (req.file) {
        imageUrl = `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
    }

    if (!nameproject || !description) {
        return res.status(401).json({ message: 'Please enter all required fields' })
    }

    try {
        const createproject = await prisma.project.create({
            data: {
                nameproject,
                description,
                imageUrl,
                githubUrl,
                demoUrl,
                stack,
            }
        })

        res.status(201).json({ message: 'Create project successfully', createproject })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to create project.", details: error.message })
    }
}

export const updateproject = async (req, res) => {
    const { id } = req.params
    let { nameproject, description, imageUrl, githubUrl, demoUrl, stack } = req.body

    if (typeof stack === 'string') {
        try {
            stack = JSON.parse(stack)
        } catch (parseError) {
            return res.status(400).json({ message: 'Invalid stack format' })
        }
    }

    if (req.file) {
        imageUrl = `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
    }

    try {
        const project = await prisma.project.update({
            where: { id: parseInt(id) },
            data: {
                nameproject,
                description,
                imageUrl,
                githubUrl,
                demoUrl,
                stack
            }
        })
        res.status(201).json({ message: 'update project successfully', project })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to update User.", details: err.message });

    }
}
export const getAlleproject = async (req, res) => {

    try {

        const findAllProject = await prisma.project.findMany()



        res.status(201).json({ message: 'getall project successfully', findAllProject })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to getall User.", details: err.message });

    }
}
export const getByIdproject = async (req, res) => {
    const { id } = req.params
    try {

        const findIdProject = await prisma.project.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                nameproject: true,
                description: true,
                imageUrl: true,
                githubUrl: true,
                demoUrl: true,
                stack: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        if (findIdProject.length === 0 || !id) {
            return res.status(401).json({ message: 'not found ' })
        }

        res.status(201).json({ message: 'getid project successfully', findIdProject })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to getbyid User.", details: err.message });

    }
}
export const deleteproject = async (req, res) => {
    const { id } = req.params
    try {
        const project = await prisma.project.findUnique({
            where: { id: parseInt(id) }
        })
        if (!project) {
            return res.status(401).json({ message: 'not found' })
        }

        const remove = await prisma.project.delete({
            where: { id: parseInt(id) }
        })
        if (remove?.imageUrl) {
            const filename = remove.imageUrl.split('/').pop()
            console.log(filename);
            await fs.unlink(`./uploads/${filename}`, (err) => {
                if (err) throw err;
                console.log('remove success');
            });

        }

        res.status(201).json({ message: 'delete project successfully', remove })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to delete project.", details: err.message });

    }
}