import { Plus, Trash2 } from "lucide-react"
import Input from "./Input"
import { ProjectContext } from "../utils/ProjectContext"
import { useContext, useState } from "react"
import AddSkill from "./AddSkill"
import axios from "axios"
import toast from "react-hot-toast"
import { axiosInstance } from "../utils/AxiosInstance"
import { API_PATHS } from "../utils/apiPath"

const SkillsManagement = () => {
    const { skills, fetchSkill } = useContext(ProjectContext)
    const [isOpen, setIsOpen] = useState(false)
    const [edit, setEdit] = useState(null)
    const token = localStorage.getItem('token')



    const handleDeleteSkill = async (id) => {
        try {
            const res = await axiosInstance.delete(API_PATHS.SKILL.delete(id), {
                headers: {
                    'token': token
                }
            })
            if (res.data.message) {
                fetchSkill()
                toast.success(res.data.message || "delete successful")
            }
        } catch (error) {
            toast.error(res.data.message)
        }
    }

    return (
        <div className="mt-10 px-10 ">
            {isOpen && <AddSkill onClose={() => setIsOpen(false)} editData={edit} onSuccess={() => {
                setIsOpen(false)
                setEdit(null)
                fetchSkill()

            }} />}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300 flex flex-col h-[400px] overflow-hidden  ">

                {/* Header */}
                <div className="flex items-center justify-between sticky top-0 z-10 ">
                    <div>
                        <h2 className="text-xl font-semibold mb-1">Skills Management</h2>
                        <p className="text-gray-500 text-sm">Update your skills and expertise</p>
                    </div>
                    <button onClick={() => setIsOpen(true)} className="flex items-center bg-black text-white py-2 px-2 rounded-md gap-2 pl-2 ">
                        <Plus className="w-[4] h-4" />
                        <h1>Add Skill Category</h1>
                    </button>

                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto flex flex-col gap-4 mt-8">

                    {skills.length === 0 ? (
                        <p className="text-black text-center py-10  flex justify-center items-center h-[400px]">No projects</p>
                    ) : skills.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-xs border border-gray-200 p-4 rounded-md flex justify-between items-center"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-medium">{item.name}</h1>
                                    <span className="rounded-xl px-1 font-bold text-sm bg-black text-white">Icon</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.tags.map((tech, idx) => (
                                        <span key={idx} className="border text-gray-900 text-sm px-3 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button onClick={() => {
                                    setIsOpen(true)
                                    setEdit(item)
                                }} className="border font-bold hover:bg-gray-200 border-gray-400 rounded-md px-2 py-1">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteSkill(item.id)} className="hover:bg-gray-200 p-2 rounded-md" >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>)
}
export default SkillsManagement