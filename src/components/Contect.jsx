import Input from "./Input"

const Contect = () => {
  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-around">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-semibold text-xl">Get In Touch</h1>
        <p className="font-medium text-gray-500">Have a project in mind? Let's work together to create something amazing</p>
      </div>
      <div className="">
        <form
          action=""
          className="border md:w-[800px] max-w-[800px] rounded-2xl border-gray-200 shadow-md p-6 mx-auto bg-white"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-gray-800">Send me a message</h1>
            <p className="text-gray-500 text-sm">
              Fill out the form below and I'll get back to you as soon as possible
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input title="Name" placeholder="Your name" />
              </div>
              <div className="flex-1">
                <Input title="Email" placeholder="your.email@example.com" />
              </div>
            </div>

            {/* Subject */}
            <Input title="Subject" placeholder="What's this about?" />

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                className="bg-gray-100 w-full h-[150px] py-3 px-4 rounded-xl resize-none outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Button */}
            <button className="bg-black text-white rounded-xl text-lg font-medium py-3 mt-2 hover:bg-gray-800 transition">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
export default Contect