import { FaYoutube, FaGithub, FaBookOpen, FaGlobe} from 'react-icons/fa';
import { RevealOnScroll } from '../RevealOnScroll';
import { Card } from "../Card";

import portofolio from '../../assets/portofolio.png';
import task_scheduling from '../../assets/task_scheduling.png';
import MerlinRoads from '../../assets/MerlinRoads.png';
import PokerPals from '../../assets/PokerPals.png';

const projects = [
    {
        title: "MerlinRoads", 
        photo: MerlinRoads,
        technologies:["Python", "Dash", "Weaverlet", "SUMO", "HERE/TomTom/Maps APIs"], 
        links:[{icon:FaGithub, link:"https://github.com/J-a-c-c-o/MerlinRoads", name:"Github"}, {icon:FaYoutube, link:"https://youtu.be/WXPFHcs8VAs", name:"Overview"}], 
        description:"MerlinRoads is an interactive dashboard for visualizing and analyzing road incident data on urban road networks. It combines real-time and historical data with features like map filtering, SUMO-based traffic simulation, and visual analytics to support data-driven decisions."
    }, {
        title: "LBC Task Scheduling Heuristic", 
        photo: task_scheduling,
        technologies:["Python", "R", "IGraph", "Jupyter Notebook", "Data Visualization"], 
        links:[{icon:FaGithub, link:"https://github.com/Niek-Damink/LBC_TaskSched", name:"Github"}, {icon:FaBookOpen, link:"/Research_Project_Paper.pdf", name:"Read"}], 
        description:"This project, developed as part of my thesis, introduces task scheduling heuristics based on Longest Betweenness Centrality to improve efficiency in distributed systems. The heuristics are evaluated against established methods using synthetic task graphs."
    }, {
        title: "PokerPals", 
        photo: PokerPals,
        technologies:["Django", "TailwindCSS", "Python", "JavaScript"], 
        links:[{icon:FaGithub, link:"https://github.com/Niek-Damink/PokerPals", name:"Github"}, {icon:FaGlobe, link:"https://pokerpals.nl", name:"Visit"}], 
        description:"PokerPals is a poker statistics website built for my friend group. It features player accounts, team chats, and awards like most wins or losses. It also tracks game history, detailed player stats, and total earnings across all sessions."
    }, {
        title: "Portofolio", 
        photo: portofolio,
        technologies:["React", "TailwindCSS", "JavaScript"], 
        links:[{icon:FaGithub, link:"https://github.com/Niek-Damink/portofolio", name:"Github"}, {icon:FaGlobe, link:"https://niekdamink.com", name:"Visit"}], 
        description:"This website serves as my personal portfolio, where I share a selection of projects I have worked on, along with an overview of the skills I have developed and the experiences I have gained through various learning and work opportunities."
    }
]

export const Projects = () => {
    
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <RevealOnScroll>
                <div className='flex justify-center items-center mb-5'>
                        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-500 pb-2 border-b-4 px-5">
                            Projects
                        </h2>
                    </div>
                </RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                    <RevealOnScroll key={key} direction={key % 2 === 0 ? 'left' : 'right'}>
                        <Card photo={project.photo}>
                            <h3 className="text-xl font-bold mb-2 text-blue-500"> {project.title} </h3>
                            <p className="text-primaryText transition-all duration-500"> {project.description}</p>
                            <div className='flex flex-wrap gap-3 my-4'>
                            {project.technologies.map((technology, key2) => (
                                <span key={key2} className='bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-500'>
                                    {technology}
                                </span>
                            ))}
                            </div>
                            <div className='flex gap-8 py-4 pl-2'>
                            {project.links.map((link, key3) => (
                                <a 
                                    key={key3} 
                                    href={link.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className='text-primaryText hover:text-blue-400 flex flex-col transition-all hover:-translate-y-1 items-center'
                                >
                                    <link.icon className='text-3xl transition-all duration-500' />
                                    <p className='text-center mt-1 font-bold transition-all duration-500'>{link.name}</p>
                                </a>
                            ))}
                            </div>
                        </Card>
                    </RevealOnScroll>
                    ))}
                </div>
                <RevealOnScroll>
                    <div className='flex justify-center mt-10'>
                        <a 
                            href="https://github.com/Niek-Damink"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-500/30 flex text-blue-500 py-3 text-lg px-6 rounded-full font-medium transition items-center justify-center  hover:-translate-y-0.5 drop-shadow-xl drop-shadow-blue-500/30 hover:drop-shadow-blue-500/80"
                        >
                            Explore My Github
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}