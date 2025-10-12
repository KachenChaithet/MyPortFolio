import { CodeXml, Database, Palette, Zap } from "lucide-react"

const SkillsAndExpertise = () => {
    const Skills = [
        { icon: <CodeXml className="text-white" />, title: 'Frontend', stack: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS'] },
        { icon: <Database className="text-white" />, title: 'Backend', stack: ['Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
        { icon: <Palette className="text-white" />, title: 'Design', stack: ['Figma', 'UI/UX Design', 'Responsive Design'] },
        { icon: <Zap className="text-white" />, title: 'Tools & Others', stack: ['Git', 'Docker',] },
    ]
    return (
        <div className="md:h-[480px] h-[1000px]  bg-[#f9f9fa] flex flex-col items-center justify-center gap-10">
            <div className="flex justify-center items-center flex-col gap-4">
                <h1 className="font-semibold text-xl">Skills & Expertise</h1>
                <p className="font-medium text-gray-500">Technologies and tools I use to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Skills.map((item) => (
                    <div className="bg-white w-[250px] h-[180px] rounded-2xl border border-gray-200 shadow-sm  hover:shadow-lg transition-all duration-300 flex flex-col justify-around p-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black rounded-xl flex justify-center items-center">
                                {item.icon}
                            </div>
                            <h1>{item.title}</h1>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {item.stack.map((item) => (
                                <span className="border border-gray-300 rounded-full text-sm px-2 ">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillsAndExpertise