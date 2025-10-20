import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const createsitesettings = async (req, res) => {
    const { sitetitle, githuburl, linkedinurl, twitterurl } = req.body
    if (!sitetitle, !githuburl, !linkedinurl, !twitterurl) {
        return res.status(400).json({ message: 'Enter require' })
    }
    try {
        const createsitesettings = await prisma.siteSettings.create({
            data: {
                sitetitle,
                githuburl,
                linkedinurl,
                twitterurl
            }
        })
        res.status(201).json({ message: 'Create sitesettings successfully', createsitesettings })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update profile.", details: error.message })
    }

}

export const updatesitesettings = async (req, res) => {
    const { id } = req.params
    const { sitetitle, githuburl, linkedinurl, twitterurl } = req.body

    try {
        const updatesitesettings = await prisma.siteSettings.update({
            where: { id: parseInt(id) },
            data: {
                sitetitle, githuburl, linkedinurl, twitterurl
            }
        })
        res.status(201).json({ message: 'Update sitesettings successfully', updatesitesettings })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update profile.", details: error.message })

    }
}
export const getAllsitesettings = async (req, res) => {
    try {
        const findallsitesettings = await prisma.siteSettings.findMany()
        res.status(201).json({ message: 'GetAll sitesettings successfully', findallsitesettings })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update profile.", details: error.message })

    }
}
