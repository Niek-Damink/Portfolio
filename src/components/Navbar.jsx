import { useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

export const Navbar = ({menuOpen, setMenuOpen, isDark, setIsDark}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-3 items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white justify-self-start"> 
                        <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right">Niek Damink</span> 
                    </a>

                    <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-centers space-x-8 justify-self-center">
                        <a 
                            href="#home"
                            className="text-primaryText hover:text-titleText/50 transition-colors"
                        >
                            Home
                        </a>

                        <a 
                            href="#about"
                            className="text-primaryText hover:text-titleText/50  transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#projects"
                            className="text-primaryText hover:text-titleText/50  transition-colors"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact"
                            className="text-primaryText hover:text-titleText/50  transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    <a 
                        className="justify-self-end"
                        onClick={() => {
                            setIsDark((prev) => !prev);
                            document.documentElement.classList.toggle("light");
                        }}
                    >
                        <FaLightbulb className={`text-2xl ${isDark ? "text-gray-300 hover:text-yellow-300" : "text-yellow-300 hover:text-gray-300"} hover:cursor-pointer`} />
                    </a>

                </div>
            </div>
        </nav>
    );
    
   
};