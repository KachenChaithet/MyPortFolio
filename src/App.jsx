import { useRef, useState } from "react"
import Contect from "./components/Contect"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ShowProject from "./components/ShowProject"
import SkillsAndExpertise from "./components/SkillsAndExpertise"
import "./index.css"
import LoginPage from "./components/LoginPage"

function App() {
  const heroRef = useRef(null)
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleOpenAdmin = () => {
    setShowLogin(true)

  }

  const handleLogin = () => {
    setIsAuthenticated(true)
    setShowLogin(false)
  }

  const handleLogout = () => {
    setShowLogin(false)
    setIsAuthenticated(false)
  }

  const handleBack = () => {
    setShowLogin(false)
    setIsAuthenticated(false)
  }

  if (showLogin && !isAuthenticated) {
    return <LoginPage onBack={handleBack} />
  }

  // ฟังก์ชันเลื่อนไปยังแต่ละ section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, projectRef, skillsRef, contactRef }} openAdmin={handleOpenAdmin} />

      <div ref={heroRef} className="scroll-mt-24"><Hero /></div>
      <div ref={projectRef} className="scroll-mt-24"><ShowProject /></div>
      <div ref={skillsRef} className="scroll-mt-24"><SkillsAndExpertise /></div>
      <div ref={contactRef} className="scroll-mt-12"><Contect /></div>

      <Footer />

    </>
  )
}

export default App
