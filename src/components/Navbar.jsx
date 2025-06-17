import { useEffect } from "react";
import logo from '../assets/Niek_Damink.png';

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white flex items-center space-x-3"> 
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Niek Damink</span> 
                    </a>

                    <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-centers space-x-8">
                        <a 
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </a>

                        <a 
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
    
   
};