import { Plus } from "lucide-react"
import Input from "./Input"

const SkillsManagement = () => {
    return (
        <div className="mt-10 px-10 ">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300 flex flex-col  ">

                {/* Header */}
                <div className="flex items-center justify-between sticky top-0 z-10 ">
                    <div>
                        <h2 className="text-xl font-semibold mb-1">Skills Management</h2>
                        <p className="text-gray-500 text-sm">Update your skills and expertise</p>
                    </div>

                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto flex flex-col gap-4 mt-8">
                    <Input title={'Skill Category'} placeholder={'Skill Category...'} />
                    <Input title={'Skill (comma-separated)'} placeholder={'Skill (comma-separated)...'} />
                    <button className="rounded-md bg-white text-black border border-gray-300 hover:bg-gray-300 font-semibold w-[15%] py-2 px-2 flex items-center justify-center ">
                        <Plus className="w-[4] h-4" />
                        <h1>Add Skill Category</h1>
                    </button>
                </div>

            </div>
        </div>)
}
export default SkillsManagement