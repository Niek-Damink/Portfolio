import logo from '../../assets/Niek_Damink.png';
import logo2 from '../../assets/Niek_Round.jpg';
import { FaDownload } from 'react-icons/fa';
import { RevealOnScroll } from '../RevealOnScroll';
import { FlipImage } from '../FlipImage';

export const Home = () => {
    return <section 
                id="home" 
                className="min-h-screen flex items-center justify-center relative"
            >
                <RevealOnScroll>
                <div className="text-center z-10 px-4 flex flex-col justify-center items-center">
                    <FlipImage src1={logo} src2={logo2}/>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                        Hi, I'm Niek Damink
                    </h1>
                    <p className="text-lg text-primaryText mb-8 max-w-lg mx-auto transition-all duration-500">
                        I am a <span className='text-blue-500 font-bold'>Master's student</span> in Computer Science and a passionate <span className='text-blue-500 font-bold'>Web Developer</span>
                    </p>
                    <div className="flex justify-center gap-4 hover:gap-8 transition-all duration-500">
                        <a href="#about" className="bg-blue-500/30 hidden md:flex text-blue-500 py-3 px-6 rounded-l-full font-medium transition items-center justify-center  relative overflow-hidden hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80">
                            More About Me
                        </a>
                        <a href="#about" className="bg-blue-500/30 md:hidden text-blue-500 py-3 px-6 rounded-l-full font-medium transition flex items-center justify-center  relative overflow-hidden hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80">
                            More
                        </a>
                        <a href="/CV.pdf" download="CV.pdf" className='bg-blue-500/30 text-blue-500 py-3 px-6 rounded font-medium flex items-center gap-x-2 hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80'>
                        CV
                        <FaDownload />
                        </a>
                        <a href="#contact" className="bg-blue-500/30 hidden md:flex text-blue-500 py-3 px-6 rounded-r-full font-medium transition items-center justify-center  relative overflow-hidden hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80">
                            Contact Me
                        </a>
                        <a href="#contact" className="bg-blue-500/30 md:hidden text-blue-500 py-3 px-6 rounded-r-full font-medium transition flex items-center justify-center  relative overflow-hidden hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80">
                            Contact
                        </a>
                    </div>
                </div>
                </RevealOnScroll>

        </section>
}