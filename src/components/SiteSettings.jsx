import { Plus, Trash2 } from "lucide-react"
import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import { ProjectContext } from "../utils/ProjectContext"
import axios from "axios"
import toast from "react-hot-toast"

const SiteSettings = () => {
    const token = localStorage.getItem('token')
    const [formData, setFormData] = useState({
        sitetitle: '',
        githuburl: '',
        linkedinurl: '',
        twitterurl: '',

    })
    const { siteSettings, fetchSiteSettings } = useContext(ProjectContext)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    useEffect(() => {
        if (siteSettings) {
            setFormData({
                sitetitle: siteSettings.sitetitle || '',
                githuburl: siteSettings.githuburl || '',
                linkedinurl: siteSettings.linkedinurl || '',
                twitterurl: siteSettings.twitterurl || '',
            })
        }
    }, [siteSettings])

    const handleSaveSiteSettings = async () => {
        const payload = {
            sitetitle: formData.sitetitle || 'https://github.com/KachenChaithet',
            githuburl: formData.githuburl || 'https://github.com/KachenChaithet',
            linkedinurl: formData.linkedinurl || "https://github.com/KachenChaithet",
            twitterurl: formData.twitterurl || 'https://github.com/KachenChaithet'
        }

        try {
            const res = await axios.put('http://localhost:5000/sitesetting/update/1', payload, {
                headers: {
                    'token': token
                }
            })

            if (res.data.message) {
                toast.success(res.data.message)
                fetchSiteSettings()

            }
        } catch (error) {
            toast.error(res.data.message)
        }
    }

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
                    <Input title={'Site Title'} placeholder={'Site Title...'} value={formData.sitetitle} onChange={handleChange} name={'sitetitle'} />
                    <div className="flex justify-between  gap-4">
                        <Input title={'GitHub URL'} placeholder={'GitHub URL...'} value={formData.githuburl} onChange={handleChange} name={'githuburl'} />
                        <Input title={'Linkedin URL'} placeholder={'Linkedin URL...'} value={formData.linkedinurl} onChange={handleChange} name={'linkedinurl'} />
                        <Input title={'Twitter URL'} placeholder={'Twitter URL...'} value={formData.twitterurl} onChange={handleChange} name={'twitterurl'} />
                    </div>
                    <button onClick={handleSaveSiteSettings} className="rounded-md bg-black text-white font-semibold w-[10%] py-2 px-2 ">Save Settings</button>
                </div>

            </div>
        </div>
    )
}
export default SiteSettings