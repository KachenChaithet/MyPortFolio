import { useContext, useEffect, useState } from "react"
import { X, Upload } from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import { ProjectContext } from "../utils/ProjectContext"
import { axiosInstance } from "../utils/AxiosInstance.js"
import { API_PATHS } from "../utils/apiPath"

const AddProject = ({ onClose, onSuccess, editData }) => {
  const [formData, setFormData] = useState({
    nameproject: "",
    description: "",
    imageUrl: "",
    githubUrl: "",
    demoUrl: "",
    stack: []
  })
  console.log(editData);



  const [stackInput, setStackInput] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const token = localStorage.getItem('token')
  const { fetchProject } = useContext(ProjectContext)

  useEffect(() => {
    if (editData) {
      setFormData({
        nameproject: editData.nameproject || "",
        description: editData.description || "",
        imageUrl: editData.imageUrl || "",
        githubUrl: editData.githubUrl || "",
        demoUrl: editData.demoUrl || "",
        stack: editData.stack || []
      })
      setImagePreview(editData.imageUrl || "")
    }
  }, [editData])


  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])


  const handleImageChange = (e) => {

    const file = e.target.files[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB")
      return
    }
    setImageFile(file)
    setError("")
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
      setFormData(prev => ({ ...prev, imageUrl: "" }))
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview("")
    setFormData({ ...formData, imageUrl: "" })
  }

  const handleOverlayClick = () => onClose()
  const handleContentClick = (e) => e.stopPropagation()

  const handleAddStack = (e) => {
    if (e.key === 'Enter' && stackInput.trim()) {
      e.preventDefault()
      if (!formData.stack.includes(stackInput.trim())) {
        setFormData({ ...formData, stack: [...formData.stack, stackInput.trim()] })
      }
      setStackInput("")
    }
  }



  const handleRemoveStack = (index) => {
    setFormData({
      ...formData,
      stack: formData.stack.filter((_, i) => i !== index)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData()
    form.append('nameproject', formData.nameproject)
    form.append('description', formData.description)
    form.append('githubUrl', formData.githubUrl)
    form.append('demoUrl', formData.demoUrl)
    form.append('stack', JSON.stringify(formData.stack))
    if (imageFile) form.append('imageUrl', imageFile)
    else if (formData.imageUrl) form.append("imageUrl", formData.imageUrl)

    try {
      let res
      if (editData) {
        res = await axiosInstance.put(API_PATHS.PROJECT.update(editData.id), form, {
          headers: {
            token,
            "Content-Type": "multipart/form-data"
          }
        })
      } else {
        res = await axiosInstance.post(API_PATHS.PROJECT.create, form, {
          headers: {
            token,
            "Content-Type": "multipart/form-data"
          }
        })
      }
      toast.success(res.data.message || (editData ? "Project updated" : "Project added"))
      fetchProject()
      onSuccess()

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={handleContentClick}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">  {editData ? "Edit Project" : "Add New Project"}</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-md" disabled={loading}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          <input type="text" placeholder="Project Name" value={formData.nameproject} onChange={e => setFormData({ ...formData, nameproject: e.target.value })} className="w-full p-3 border rounded-lg" required disabled={loading} />
          <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border rounded-lg min-h-[100px]" disabled={loading} />

          <div>
            {!imagePreview ? (
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" disabled={loading} />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload image</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
                </label>
              </div>
            ) : (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                <button type="button" onClick={handleRemoveImage} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <input
              type="url"
              placeholder="Or paste image URL"
              value={formData.imageUrl}
              onChange={e => {
                setFormData({ ...formData, imageUrl: e.target.value })
                if (e.target.value) {
                  setImageFile(null)
                  setImagePreview("")
                }
              }}
              className="w-full p-3 border rounded-lg mt-3"
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="url" placeholder="Demo URL" value={formData.demoUrl} onChange={e => setFormData({ ...formData, demoUrl: e.target.value })} className="w-full p-3 border rounded-lg" disabled={loading} />
            <input type="url" placeholder="GitHub URL" value={formData.githubUrl} onChange={e => setFormData({ ...formData, githubUrl: e.target.value })} className="w-full p-3 border rounded-lg" disabled={loading} />
          </div>

          <div>
            <input type="text" placeholder="Type and press Enter to add stack" value={stackInput} onChange={e => setStackInput(e.target.value)} onKeyDown={handleAddStack} className="w-full p-3 border rounded-lg" disabled={loading} />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.stack.map((tech, index) => (
                <span key={index} className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                  <button type="button" onClick={() => handleRemoveStack(index)} className="w-3 h-3 flex items-center justify-center">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} disabled={loading} className="px-6 py-2 border rounded-lg">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-2 bg-black text-white rounded-lg">{loading ? (editData ? "Updating..." : "Adding...") : (editData ? "Update Project" : "Add Project")}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProject
