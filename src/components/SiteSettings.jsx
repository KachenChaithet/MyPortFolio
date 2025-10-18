import { Plus, Trash2 } from "lucide-react"
import Input from "./Input"

const SiteSettings = () => {
    return (
        <div className="mt-10 px-10 pb-10">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300 flex flex-col  ">

                {/* Header */}
                <div className="flex items-center justify-between sticky top-0 z-10 ">
                    <div>
                        <h2 className="text-xl font-semibold mb-1">Site Settings</h2>
                        <p className="text-gray-500 text-sm">Configure your portfolio website</p>
                    </div>

                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto flex flex-col gap-4 mt-8">
                    <Input title={'Site Title'} placeholder={'Site Title...'} />
                    <div className="flex justify-between  gap-4">
                        <Input title={'GitHub URL'} placeholder={'GitHub URL...'} />
                        <Input title={'Linkedin URL'} placeholder={'Linkedin URL...'} />
                        <Input title={'Twitter URL'} placeholder={'Twitter URL...'} />
                    </div>
                    <button className="rounded-md bg-black text-white font-semibold w-[10%] py-2 px-2 ">Save Settings</button>
                </div>

            </div>
        </div>
    )
}
export default SiteSettings