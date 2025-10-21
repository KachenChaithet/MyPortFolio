import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Phone } from 'lucide-react'
import { axiosInstance } from './AxiosInstance'
import { API_PATHS } from './apiPath'

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
            const res = await axiosInstance.get(API_PATHS.PROJECT.getall)
            setProjects(res.data.findAllProject);

        } catch (error) {
            console.log('Fetch project error:', error)
        }
    }

    const fetchSkill = async () => {
        try {
            const res = await axiosInstance.get(API_PATHS.SKILL.getall)
            setSkills(res.data.findallSkill);

        } catch (error) {
            console.log('Fetch skills error:', error)
        }
    }

    const fetchProfile = async () => {
        try {
            const res = await axiosInstance.get(API_PATHS.PROFILE.getall)
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
            const res = await axiosInstance.get(API_PATHS.SITESETTINGS.getall)
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

    useEffect(() => {
        if (siteSettings && siteSettings.sitetitle) {
            document.title = siteSettings.sitetitle
        }
    }, [siteSettings])

    return (
        <ProjectContext.Provider value={{ projects, fetchProject, skills, fetchSkill, profile, fetchProfile, siteSettings, fetchSiteSettings, data }}>
            {children}
        </ProjectContext.Provider>
    )
}
