import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RevealOnScroll } from '../RevealOnScroll';


export const Contact = () => {
    return (
        <section 
            id="contact"
            className="flex justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4 md:min-w-250">
                <RevealOnScroll>
                    <div className='flex justify-center items-center mb-5'>
                        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-500 pb-2 border-b-4 px-5">
                            Contact
                        </h2>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                <div className="flex justify-center space-x-10">
                    <a href='https://www.linkedin.com/in/niek-damink' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-4xl text-titleText hover:text-blue-400 hover:-translate-y-1 transition-all duration-500' />
                    </a>
                    <a href='https://github.com/Niek-Damink' target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-4xl text-titleText hover:text-blue-400 hover:-translate-y-1 transition-all duration-500' />
                    </a>
                    <a href='https://www.instagram.com/niek.damink' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='text-4xl text-titleText hover:text-blue-400 hover:-translate-y-1 transition-all duration-500' />
                    </a>
                    <a href='https://wa.me/+31630787768' target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='text-4xl text-titleText hover:text-blue-400 hover:-translate-y-1 transition-all duration-500' />
                    </a>
                    <a href='mailto:niek-damink@hotmail.com' target="_blank" rel="noopener noreferrer">
                        <MdEmail className='text-4xl text-titleText hover:text-blue-400 hover:-translate-y-1 transition-all duration-500' />
                    </a>
                </div>
                </RevealOnScroll>
            </div>
        </section>
    )

}