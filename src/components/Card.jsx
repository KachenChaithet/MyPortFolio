import { Github, SquareArrowOutUpRight } from 'lucide-react'
import img from '../assets/computer-program-coding-on-screen-PQ79JTA-1-1080x675.jpg'

const Card = () => {
  const stacks = ['React', 'Node.js', 'Tailwind', 'MongoDB', 'Express'] // 👉 เพิ่มได้เรื่อยๆ
  return (
    <div className="w-[380px] mb-20 h-[480px] rounded-2xl border border-gray-200 mt-10 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">

      {/* Image */}
      <div className="h-[50%] w-full overflow-hidden">
        <img
          src={img}
          alt="project"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1 ">
        <div className="space-y-3">
          <h1 className="text-lg font-semibold text-gray-800">Task Management App</h1>
          <p className="text-sm text-gray-600 leading-relaxed font-medium ">
            A collaborative task management tool with real-time updates, team features, and project tracking.
          </p>
          {/* Stack list */}
          <div className="flex flex-wrap gap-2 mt-2">
            {stacks.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-900 text-sm px-3  rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        <div className="flex gap-3 mt-5">
          <button className="flex items-center w-[50%] justify-center gap-2 py-2 px-5 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <Github className="w-4 h-4" />
            <span>Code</span>
          </button>
          <button className="flex items-center w-[50%] justify-center gap-2 py-2 px-5 rounded-md bg-black text-white hover:bg-gray-800 transition">
            <SquareArrowOutUpRight className="w-4 h-4" />
            <span>Live Demo</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
