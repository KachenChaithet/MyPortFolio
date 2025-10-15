import { ArrowLeft, LogOut, Plus, Trash2 } from "lucide-react"
import Input from "./Input"

const AdminPage = ({ logout }) => {
    const stacks = ['React', 'Node.js', 'Tailwind', 'MongoDB', 'Express']

    const handleLogout = () => {
        logout()
        localStorage.removeItem('token')
    }



    return (
        <div className="bg-[#f9f9fa] min-h-screen">
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
            <div className="mt-10 px-10 ">
                <div className="bg-white  rounded-xl p-6 shadow-md border border-gray-300 flex flex-col gap-4">
                    <div className="flex items-center justify-between ">
                        <div className="">
                            <h2 className="text-xl font-semibold mb-2">Manage Projects</h2>
                            <p className="text-gray-500 ">Add, edit, or remove your portfolio projects</p>
                        </div>
                        <button className="flex items-center bg-black text-white py-2 px-2 rounded-md gap-2 pl-2">
                            <Plus className="w-4 h-5 " />
                            <h1>Add Project</h1>
                        </button>
                    </div>

                    <div className="shadow-xs border border-gray-200 p-4 rounded-md flex justify-between items-center">
                        <div className="">
                            <div className="flex items-center gap-2">
                                <h1>E-Commerce Platform</h1>
                                <span className="rounded-xl px-1 font-bold text-sm bg-black text-white">Published</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {stacks.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="border text-gray-900 text-sm px-3  rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="border font-bold hover:bg-gray-200 border-gray-400 rounded-md px-2 py-1">
                                Edit
                            </button>
                            <button className="hover:bg-gray-200 p-2 rounded-md">
                                <Trash2 className="w-4 h-4  text-red-600" />
                            </button>
                        </div>

                    </div>

                </div>
            </div>



        </div >
    )
}
export default AdminPage