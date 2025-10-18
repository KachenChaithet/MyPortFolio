import { ArrowLeft, LogOut, Plus, Trash2 } from "lucide-react"
import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import AddProject from "./AddProject"
import { ProjectContext } from "../utils/ProjectContext"
import axios from "axios"
import toast from "react-hot-toast"
import SiteSettings from "./SiteSettings"
import SkillsManagement from "./SkillsManagement"

const AdminPage = ({ logout }) => {
    const { projects, fetchProject } = useContext(ProjectContext)
    const [Edit, setEdit] = useState(null)
    const token = localStorage.getItem('token')


    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        logout()
    }

    const handleDeleteProject = async (id) => {

        try {
            const res = await axios.delete(`http://localhost:5000/project/delete/${id}`, {
                headers: {
                    'token': token
                }
            })
            if (res.data.message) {
                fetchProject()
                toast.success(res.data.message || "delete successful")
            }
        } catch (error) {
            toast.error(res.data.message)

        }
    }





    return (
        <div className={`bg-[#f9f9fa] min-h-screen relative  `}>
            {isOpen && (
                <AddProject
                    onClose={() => {
                        setIsOpen(false)
                        setEdit(null)
                    }}
                    editData={Edit}
                    onSuccess={() => {
                        setIsOpen(false)
                        setEdit(null)
                        fetchProject()

                    }} />
            )}
            {/* Navbar */}
            <div className="h-[100px] bg-white shadow-xs flex items-center justify-between px-10">
                <div className="flex items-center gap-2">
                    <button className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                        <ArrowLeft className="h-5 w-5 text-black" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        <p className="text-gray-500">Manage your portfolio content</p>
                    </div>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-2 border border-gray-300 hover:bg-gray-200 px-3 py-1 rounded-md font-bold cursor-pointer">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
            </div>
            {/* profile */}
            <div className="mt-10 px-10 ">
                <div className="bg-white  rounded-xl p-6 shadow-md border border-gray-300 flex flex-col ">
                    <div className="">
                        <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                        <p className="text-gray-500 ">Update your personal information and bio</p>
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="  grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex-1">

                                <Input title="Name" placeholder="your name" />
                            </div>
                            <div className="flex-1">

                                <Input title="Title" placeholder="your title" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Bio</label>
                            <textarea
                                name='Bio'
                                placeholder="your Bio"
                                className="bg-gray-100 w-full h-[100px] py-3 px-4 rounded-xl outline-0 focus:ring-3 focus:ring-[#d3d3d3]"
                            />
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex-1">

                                <Input title="Email" placeholder="your email" />
                            </div>
                            <div className="flex-1">

                                <Input title="Phone" placeholder="your phone" />
                            </div>
                        </div>
                        <button className="w-[10%] font-bold cursor-pointer hover:bg-[#272525] bg-black text-white py-2 rounded-md">Save Profile</button>
                    </div>

                </div>
            </div>

            {/* Manage Projects */}
            <div className="mt-10 px-10">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300 flex flex-col h-[400px] overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between sticky top-0 z-10 ">
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Manage Projects</h2>
                            <p className="text-gray-500 text-sm">Add, edit, or remove your portfolio projects</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex items-center bg-black text-white py-2 px-2 rounded-md gap-2 pl-2"
                        >
                            <Plus className="w-4 h-5" />
                            <h1>Add Project</h1>
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-auto flex flex-col gap-4 mt-8">
                        {projects.length === 0 ? (
                            <p className="text-black text-center py-10  flex justify-center items-center h-[400px]">No projects</p>
                        ) : projects.map((item, index) => (
                            <div
                                key={index}
                                className="shadow-xs border border-gray-200 p-4 rounded-md flex justify-between items-center"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1>{item.nameproject}</h1>
                                        <span className="rounded-xl px-1 font-bold text-sm bg-black text-white">Published</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.stack.map((tech, idx) => (
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
                                    <button className="hover:bg-gray-200 p-2 rounded-md" onClick={() => handleDeleteProject(item.id)}>
                                        <Trash2 className="w-4 h-4 text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <SkillsManagement />
            <SiteSettings />



        </div >
    )
}
export default AdminPage