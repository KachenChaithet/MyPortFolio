import { Github, Inbox, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
    const icon = [
        { icon: <Github className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
        { icon: <Linkedin className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
        { icon: <Mail className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
    ]
    return (
        <div className="w-auto h-[600px]  flex flex-col justify-center items-center gap-4">
            <h1>Hi, I'm Kachen Chiyathet</h1>
            <div className="text-center w-[700px] text-gray-500 flex flex-col gap-4">
                <p>Full Stack Developer & UI/UX Enthusiast</p>
                <p>I craft beautiful, functional digital experiences that solve real problems. With expertise in modern web technologies and a passion for clean design, I bring ideas to life through code.</p>
            </div>
            <div className="flex font-semibold gap-4">
                <button className="text-white bg-black py-2 px-6 rounded-md">View My Work</button>
                <button className="flex gap-4 justify-center items-center py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-200 "><Mail className="w-4 h-4" /> <h1>Contact Me</h1></button>
            </div>
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
        </div>
    )
}
export default Hero