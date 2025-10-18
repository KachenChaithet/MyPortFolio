import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([])

    const fetchProject = async () => {
        try {
            const res = await axios.get('http://localhost:5000/project/getall')
            setProjects(res.data.findAllProject);

        } catch (error) {

        }
    }
    useEffect(() => {
        fetchProject()
    }, [])

    return (
        <ProjectContext.Provider value={{ projects, fetchProject }}>
            {children}
        </ProjectContext.Provider>
    )
}
