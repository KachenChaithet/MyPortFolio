import { ArrowLeft } from "lucide-react"
import Input from "./Input"
import { useState } from "react"

const LoginPage = ({ onBack }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    


    return (
        <div className="min-h-screen flex justify-center items-center px-4 bg-[#E6E6E6]/30">
            <div className="w-full max-w-md">
                <button
                    className="mb-6 hover:bg-gray-200 flex items-center font-semibold pl-2 text-gray-700  rounded-md px-2 py-1 transition"
                    onClick={() => onBack()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </button>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <div className="text-center space-y-1">
                        <h1 className="text-lg">Admin Login</h1>
                        <h1 className="text-sm text-gray-500">
                            Enter your credentials to access the admin dashboard
                        </h1>
                    </div>
                    <form className="space-y-2 mt-4">
                        <Input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Enter username" title="Username" />
                        <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" title="Password" />
                        <button className="bg-black rounded-md w-full mt-2 text-white py-2 font-semibold hover:bg-gray-900 transition">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
