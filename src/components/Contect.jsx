import { Facebook, Mail, Phone } from "lucide-react"
import Input from "./Input"
import { useState } from "react"

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  console.log(formData);

  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-around">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-semibold text-xl">Get In Touch</h1>
        <p className="font-medium text-gray-500">Have a project in mind? Let's work together to create something amazing</p>
      </div>

      {/* show contect */}
      <div className="flex w-full flex-col md:flex-row justify-center items-start gap-10 px-4 md:px-10 mt-10">
        {/* Form */}
        <form
          action=""
          className="w-full md:w-[60%] max-w-[800px] border rounded-2xl border-gray-200 shadow-md p-6 bg-white"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-gray-800">Send me a message</h1>
            <p className="text-gray-500 text-sm">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input title="Name" placeholder="Your name" value={formData.name} onChange={handleChange} name='name' />
              </div>
              <div className="flex-1">
                <Input title="Email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} name='email' />
              </div>
            </div>

            <Input title="Subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} name='subject' />

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Message</label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                name='message'
                placeholder="Tell me about your project..."
                className="bg-gray-100 w-full h-[150px] py-3 px-4 rounded-xl outline-0 focus:ring-3 focus:ring-[#d3d3d3]"
              />
            </div>

            <button className="bg-black text-white rounded-xl text-lg font-medium py-3 mt-2 hover:bg-gray-800 transition">
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info + Availability */}
        <div className="w-full md:w-[30%] flex flex-col gap-8">
          <div className="rounded-2xl border border-gray-200 shadow-md p-6">
            <h1 className="text-xl font-semibold text-gray-800">Contact Information</h1>
            <div className="flex flex-col gap-3 mt-4 text-gray-700">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-500" />
                <span>alex.johnson@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Facebook className="w-6 h-6 text-gray-500" />
                <span>kachen chiyathet</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gray-500" />
                <span>063-726-0853</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 shadow-md p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">Availability</h1>
            <p className="text-gray-600 text-base">
              Currently available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
      </div>

    </div >
  )
}
export default Contect