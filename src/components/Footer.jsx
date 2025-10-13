import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
    const icon = [
        { icon: <Github className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
        { icon: <Linkedin className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
        { icon: <Mail className="text-gray-500 hover:text-black" />, path: 'https://github.com/KachenChaithet' },
    ]
    return (
        <div className="mt-10 w-full h-[240px] bg-[#f9f9fa] flex flex-col justify-around px-20 py-8 ">
            <div className="flex justify-between items-center   ">
                <div className="">
                    <h1 className="text-xl font-medium">Kachen Chiyathet</h1>
                    <p className="text-gray-500 text-lg">Building digital experiences with passion</p>
                </div>

                <div className="flex gap-4">
                    {icon.map((item) => (
                        <div className="" key={item.icon}>
                            <a href={item.path} target="_blank">{item.icon}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-b border-[#e0e0e1]">

            </div>
            <div className="text-center">
                <h1 className="text-gray-500 text-lg"> © 2025 Made with 🧡 by Kachen Chiyathet</h1>

            </div>
        </div>
    )
}
export default Footer