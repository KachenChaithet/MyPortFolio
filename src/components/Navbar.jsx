import { useState } from "react";
import { Menu, Settings, X } from "lucide-react";

const Navbar = ({ scrollToSection, refs, openAdmin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menu = [
        { title: "Home", ref: refs.heroRef },
        { title: "Project", ref: refs.projectRef },
        { title: "Skill", ref: refs.skillsRef },
        { title: "Contact", ref: refs.contactRef },
        { title: "Settings", icon: <Settings /> },
    ];

    return (
        <nav className="w-full sticky top-0 bg-white shadow-sm z-50 px-6 md:px-10 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo */}
                <h1
                    className="font-semibold text-xl cursor-pointer"
                    onClick={() => scrollToSection(refs.heroRef)}
                >
                    KC
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center font-medium gap-8">
                    {menu.map((item, index) => (
                        <li
                            key={item.title + index}
                            onClick={() => item.title === "Settings"
                                ? openAdmin()
                                : scrollToSection(item.ref)
                            }
                            className={` ${item.title === 'Settings' ? 'text-gray-700' : 'text-gray-500'} hover:text-black cursor-pointer transition-colors`}
                        >
                            {item.title != 'Settings' ? item.title : item.icon}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 flex flex-col gap-3 bg-white shadow rounded-md p-4">
                    {menu.map((item, index) => (
                        <button
                            key={item.title + index}
                            onClick={() => item.title === "Settings"
                                ? openAdmin()
                                : scrollToSection(item.ref)
                            }
                            className="text-gray-500 hover:text-black w-full text-left py-2 transition-colors"
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )
            }
        </nav >
    );
};

export default Navbar;
