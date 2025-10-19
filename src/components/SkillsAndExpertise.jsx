import { CodeXml, Database, Palette, Zap } from "lucide-react"
import { ProjectContext } from "../utils/ProjectContext"
import { useContext } from "react"

const iconMap = {
    Frontend: CodeXml,
    Backend: Database,
    Design: Palette,
    ToolsandOthers: Zap
}

const SkillsAndExpertise = () => {
    const { skills } = useContext(ProjectContext)

    return (
        <div className="md:h-[480px] h-[1000px] mt-20 bg-[#f9f9fa] flex flex-col items-center justify-center gap-10">
            <div className="flex justify-center items-center flex-col gap-4">
                <h1 className="font-semibold text-xl">Skills & Expertise</h1>
                <p className="font-medium text-gray-500">Technologies and tools I use to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {skills.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || Zap // default icon
                    return (
                        <div key={`skill-${index}`} className="bg-white w-[250px] h-[180px] rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-around p-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-black rounded-xl flex justify-center items-center">
                                    <IconComponent className="text-white w-6 h-6" />
                                </div>
                                <h1>{item.name}</h1>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.tags.map((tech, idx) => (
                                    <span key={idx} className="border border-gray-300 rounded-full text-sm px-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillsAndExpertise
