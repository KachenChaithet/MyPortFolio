import { useContext, useEffect, useState } from "react"
import { X } from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import { axiosInstance } from "../utils/AxiosInstance.js"
import { API_PATHS } from "../utils/apiPath"

const AddSkill = ({ onClose, onSuccess, editData }) => {
    const [formData, setFormData] = useState({
        categoryTitle: "",
        icon: "",
        skill: []
    })
    console.log(formData);


    const [skillInput, setSkillInput] = useState("")
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")


    useEffect(() => {
        if (editData) {
            setFormData({
                categoryTitle: editData.name || "",
                icon: editData.icon || "",
                skill: editData.tags || []
            })
        }
    }, [editData])

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    const handleAddSkill = (e) => {
        if (e.key === "Enter" && skillInput.trim()) {
            e.preventDefault()
            if (!formData.skill.includes(skillInput.trim())) {
                setFormData({
                    ...formData,
                    skill: [...formData.skill, skillInput.trim()]
                })
            }
            setSkillInput("")
        }
    }

    const handleRemoveSkill = (index) => {
        setFormData({
            ...formData,
            skill: formData.skill.filter((_, i) => i !== index)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const payload = {
            name: formData.categoryTitle,
            tags: formData.skill,
            icon: formData.icon
        }
        try {
            let res
            if (editData) {
                res = await axiosInstance.put(API_PATHS.SKILL.update(editData.id), payload, {
                    headers: { token }
                })
            } else {
                res = await axiosInstance.post(API_PATHS.SKILL.create, payload, {
                    headers: { token }
                })
            }

            toast.success(res.data.message || (editData ? "Skill updated" : "Skill added"))
            onSuccess()
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{editData ? "Edit Skill" : "Add New Skill"}</h2>
                    <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-md" disabled={loading}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Category Title</label>
                        <input
                            type="text"
                            placeholder="Enter category title"
                            value={formData.categoryTitle}
                            onChange={(e) => setFormData({ ...formData, categoryTitle: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Icon</label>
                        <select
                            value={formData.icon}
                            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                            required
                            disabled={loading}
                        >
                            <option value="">Select icon</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Design">Design</option>
                            <option value="ToolsandOthers">Tools & Others</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Skills</label>
                        <input
                            type="text"
                            placeholder="Type skill and press Enter"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleAddSkill}
                            className="w-full p-3 border rounded-lg"
                            disabled={loading}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {formData.skill.map((s, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                                >
                                    {s}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(i)}
                                        className="text-gray-500 hover:text-red-500"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button type="button" onClick={onClose} disabled={loading} className="px-6 py-2 border rounded-lg">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-6 py-2 bg-black text-white rounded-lg">
                            {loading ? (editData ? "Updating..." : "Adding...") : (editData ? "Update Skill" : "Add Skill")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddSkill
