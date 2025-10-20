import { Github, Inbox, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import SocialLinks from "./SocialLinks"
import { useContext } from "react"
import { ProjectContext } from "../utils/ProjectContext"

const Hero = () => {
    const { data } = useContext(ProjectContext)
    const mailtoLink = `mailto:${data.email}`
    return (
        <div className="w-auto h-[600px]  flex flex-col justify-center items-center gap-4">
            <h1>Hi, I'm {data.username}</h1>
            <div className="text-center w-[700px] text-gray-500 flex flex-col gap-4">
                <p>{data.job}</p>
                <p>{data.bio}</p>
            </div>
            <div className="flex font-semibold gap-4">
                <button className="text-white bg-black py-2 px-6 rounded-md">View My Work</button>
                <a href={mailtoLink}><button className="flex gap-4 justify-center items-center py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-200 "><Mail className="w-4 h-4" /> <h1>Contact Me</h1></button></a>
            </div>
            <SocialLinks />
        </div>
    )
}
export default Hero