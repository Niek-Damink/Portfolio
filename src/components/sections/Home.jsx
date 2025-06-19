import logo from '../../assets/Niek_Damink.png';
import { FaDownload } from 'react-icons/fa';

export const Home = () => {
    return <section 
                id="home" 
                className="min-h-screen flex items-center justify-center relative"
            >
                <div className="text-center z-10 px-4 flex flex-col justify-center items-center">
                    <img src={logo} alt="Logo" className="w-70 h-70" />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                        Hi, I'm Niek Damink
                    </h1>
                    <p className="text-lg text-primaryText mb-8 max-w-lg mx-auto transition-all duration-500">
                        I am a <span className='text-blue-500 font-bold'>Master's student</span> in Computer Science and a passionate <span className='text-blue-500 font-bold'>Web Developer</span>
                    </p>
                    <div className="flex justify-center gap-4 hover:gap-8 transition-all duration-500">
                        <a href="#about" className="bg-blue-500/30 text-blue-500 py-3 px-6 rounded-l-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-500/50 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            More About Me
                        </a>
                        <a href="/CV.pdf" download="CV.pdf" className='bg-blue-500/30 text-blue-500 py-3 px-6 rounded font-medium flex items-center gap-x-2 hover:-translate-y-0.5 hover:bg-blue-500/50 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
                        CV
                        <FaDownload />
                        </a>
                        <a href="#contact" className="bg-blue-500/30 text-blue-500 py-3 px-6 rounded-r-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-500/50 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Contact Me
                        </a>
                    </div>
                </div>

        </section>
}