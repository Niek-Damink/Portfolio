import { useState } from "react"

export const FlipImage = ({src1, src2, className}) => {

    const [isFlipped, setFlipped] = useState(false);



    return (
        <div className="w-50 md:w-60 h-50 md:h-60 mb-10 relative">
            <div className="hover:scale-105 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/70">
                <img 
                    src={src1} 
                    alt="Logo" 
                    className={`hover:cursor-pointer backface-hidden transition-all duration-1500 absolute bg-clip-content rounded-t-full rounded-bl-full rounded-br-4xl
                                ${isFlipped ? "rotate-y-180" : "rotate-y-0"}`}
                    onClick={() => setFlipped(true)}
                />
                <img 
                    src={src2} 
                    alt="Logo" 
                    className={`hover:cursor-pointer backface-hidden transition-all duration-1500 absolute border-4 border-gray-900 rounded-full
                                ${isFlipped ? "rotate-y-0" : "rotate-y-180"}`}
                    onClick={() => setFlipped(false)}
                />
            </div>
        </div>
    )
}