import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

export const Navbar = ({menuOpen, setMenuOpen, isDark, setIsDark}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="w-full px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white justify-self-start"> 
                        <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right">Niek Damink</span> 
                    </a>
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

                    <div className="justify-self-end flex items-center gap-x-5">
                        <div 
                        className="text-2xl cursor-pointer z-40 md:hidden text-primaryText"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            &#9776;
                        </div>
                        <a 
                            className="border-2 border-primaryText/40 p-1.5 rounded-xl"
                            onClick={() => {
                                setIsDark((prev) => !prev);
                                document.documentElement.classList.toggle("light");
                            }}
                        >
                            {
                                isDark ? (
                                    <FaMoon className="text-2xl hover:cursor-pointer text-primaryText"/>
                                ) : (
                                    <HiSun className="text-2xl hover:cursor-pointer text-primaryText/80"/>
                                )
                            }
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
    
   
};