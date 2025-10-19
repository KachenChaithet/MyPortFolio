import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [profile, setProfile] = useState(null)

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
            setProfile(res.data.findAll[0])
        } catch (error) {
            console.log('Fetch skills error:', error)

        }
    }
    useEffect(() => {
        fetchProject()
        fetchSkill()
        fetchProfile()
    }, [])

    return (
        <ProjectContext.Provider value={{ projects, fetchProject, skills, fetchSkill, profile, fetchProfile }}>
            {children}
        </ProjectContext.Provider>
    )
}
