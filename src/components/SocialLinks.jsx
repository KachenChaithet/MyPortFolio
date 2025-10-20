import { Github, Linkedin, Mail } from "lucide-react"
import { useContext } from "react"
import { ProjectContext } from "../utils/ProjectContext"

const SocialLinks = () => {
    const { data } = useContext(ProjectContext)
    const mailtoLink = `mailto:${data.email}`

    const icon = [
        { icon: <Github className="text-gray-500 hover:text-black" />, path: data.githuburl },
        { icon: <Linkedin className="text-gray-500 hover:text-black" />, path: data.linkedinurl },
        { icon: <Mail className="text-gray-500 hover:text-black" />, path: mailtoLink },
    ]
    return (
        <div className="flex gap-4">
            {icon.map((item, index) => (
                <a
                    key={`Hero-${index}`}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>{item.icon}</div>
                </a>
            ))}
        </div>
    )
}
export default SocialLinks