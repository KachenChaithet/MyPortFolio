import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Phone } from 'lucide-react'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [profile, setProfile] = useState(null)
    const [siteSettings, setSiteSettings] = useState(null)


    const [data, setData] = useState({
        username: '',
        job: '',
        bio: '',
        email: '',
        phone: '',
        sitetitle: '',
        githuburl: '',
        linkedinurl: '',
        twitterurl: '',

    })


    const fetchProject = async () => {
        try {
            const res = await axios.get('http://localhost:5000/project/getall')
            setProjects(res.data.findAllProject);

        } catch (error) {
            console.log('Fetch project error:', error)
        }
    }

    const fetchSkill = async () => {
        try {
            const res = await axios.get('http://localhost:5000/skill/getall')
            setSkills(res.data.findallSkill);

        } catch (error) {
            console.log('Fetch skills error:', error)
        }
    }

    const fetchProfile = async () => {
        try {
            const res = await axios.get('http://localhost:5000/profile/getall')
            const profile = res.data.findAll[0]
            setProfile(profile)
            setData((prev) => ({
                ...prev,
                username: profile.name,
                job: profile.title,
                bio: profile.bio,
                email: profile.email,
                phone: profile.phone,

            }))
        } catch (error) {
            console.log('Fetch skills error:', error)

        }
    }
    const fetchSiteSettings = async () => {
        try {
            const res = await axios.get('http://localhost:5000/sitesetting/getall')
            const sitesettings = res.data.findallsitesettings[0]
            setSiteSettings(sitesettings)
            setData((prev) => ({
                ...prev,
                sitetitle: sitesettings.sitetitle,
                githuburl: sitesettings.githuburl,
                linkedinurl: sitesettings.linkedinurl,
                twitterurl: sitesettings.twitterurl
            }))
        } catch (error) {
            console.log('Fetch skills error:', error)

        }
    }
    useEffect(() => {
        fetchProject()
        fetchSkill()
        fetchProfile()
        fetchSiteSettings()
    }, [])

    return (
        <ProjectContext.Provider value={{ projects, fetchProject, skills, fetchSkill, profile, fetchProfile, siteSettings, fetchSiteSettings, data }}>
            {children}
        </ProjectContext.Provider>
    )
}
