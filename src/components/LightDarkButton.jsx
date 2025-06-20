import { HiSun, HiMoon } from "react-icons/hi";

export const LightDarkButton = ({ isDark, setIsDark }) => {
    
    return (
        <a 
            className={`border-2 p-2 rounded-xl relative overflow-hidden hover:cursor-pointer w-10 h-10 transition-all duration-500
                ${isDark ? "border-blue-900  hover:border-blue-500" 
                         : "border-yellow-300 hover:border-yellow-200"}`}
            onClick={() => {
                setIsDark((prev) => !prev);
                document.documentElement.classList.toggle("light");
            }}
        >
            <div>
                <HiMoon className={`text-xl absolute right-2 transition-all duration-300 text-blue-600 hover:text-blue-400
                                    ${isDark ? "animate-in" : "animate-out"}`}/>
                <HiSun className={`text-2xl absolute right-1.5 top-1.5 transition-all duration-300 text-yellow-500 hover:text-yellow-300
                                    ${isDark ? "animate-out" : "animate-in"}`}/>
            </div>
        </a>
    )
}