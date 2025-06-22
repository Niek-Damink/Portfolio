import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RevealOnScroll } from '../RevealOnScroll';
import { Card } from "../Card";
import logo2 from '../../assets/Niek_Round.jpg';


export const Contact = () => {
    return (
        <section 
            id="contact"
            className="flex justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4 md:min-w-250">
                <RevealOnScroll>
                    <div className='flex flex-col justify-center items-center mb-8'>
                        <h2 className="text-4xl font-extrabold text-center text-blue-500 border-b-4 mb-2 px-5">
                            Contact
                        </h2>
                        <p className='text-primaryText text-md mt-1 transition-all duration-500 text-center max-w-150'>
                            Are you interested in working together or do you have any questions?
                        </p>
                        <p className='text-primaryText text-md mb-2 mt-1 transition-all duration-500 text-center max-w-150'>
                            Feel free to reach out, I am always open to new opportunities.
                        </p>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    <div className='flex justify-center'>
                        <Card>
                            <div className='flex md:space-x-15'>
                                <div className='space-y-5'>
                                    <h2 className='text-2xl font-extrabold text-blue-500'>
                                        Get In Touch With Me
                                    </h2>
                                    <div className="flex items-center">
                                        <a 
                                            href='mailto:niek-damink@hotmail.com' 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='bg-blue-500/20 hover:cursor-pointer mr-5 rounded-full p-4 hover:-translate-y-1 hover:bg-blue-500/50 transition-all duration-500'
                                        >
                                            <MdEmail className='text-4xl text-titleText transition-all duration-500' />
                                        </a>
                                        <div>
                                            <p className='text-primaryText/70 text-md'>
                                                Email
                                            </p>
                                            <p className='text-titleText text-lg'>niekdamink@hotmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <a 
                                            href='https://maps.app.goo.gl/9TCCt3DsJ1SQiLMt9' 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='bg-blue-500/20 mr-5 rounded-full p-4 hover:-translate-y-1 hover:cursor-pointer hover:bg-blue-500/50 transition-all duration-500'
                                        >
                                            <FaMapMarkerAlt className='text-4xl text-titleText transition-all duration-500' />
                                        </a>
                                        <div>
                                            <p className='text-primaryText/70 text-md'>
                                                Location
                                            </p>
                                            <p className='text-titleText text-lg'>Oldenzaal, The Netherlands</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:flex items-center pr-5 justify-center hidden'>
                                    <img src={logo2} className='w-50 h-50 rounded-full border-5 border-titleText/10 transition-all duration-500' />
                                </div>
                            </div>
                            <p className='text-xl text-titleText font-extrabold mt-10 text-center'>
                                Connect with me on Social Media
                            </p>
                            <div className="flex justify-center space-x-5 mt-5">
                                <a href='https://www.linkedin.com/in/niek-damink' target="_blank" rel="noopener noreferrer" className='bg-blue-500/20 rounded-full p-4 hover:-translate-y-1 hover:bg-blue-500/50 transition-all duration-500'>
                                    <FaLinkedin className='text-2xl text-titleText transition-all duration-500' />
                                </a>
                                <a href='https://github.com/Niek-Damink' target="_blank" rel="noopener noreferrer" className='bg-blue-500/20 rounded-full p-4 hover:-translate-y-1 hover:bg-blue-500/50 transition-all duration-500'>
                                    <FaGithub className='text-2xl text-titleText transition-all duration-500' />
                                </a>
                                <a href='https://www.instagram.com/niek.damink' target="_blank" rel="noopener noreferrer" className='bg-blue-500/20 rounded-full p-4 hover:-translate-y-1 hover:bg-blue-500/50 transition-all duration-500'>
                                    <FaInstagram className='text-2xl text-titleText transition-all duration-500' />
                                </a>
                            </div>
                        </Card>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )

}