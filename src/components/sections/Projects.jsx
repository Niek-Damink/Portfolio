import { FaYoutube, FaGithub, FaBookOpen, FaGlobe} from 'react-icons/fa';

const projects = [
    {title: "MerlinRoads", technologies:["Python", "Dash", "Dash Sylvereye", "SUMO", "HERE/TomTom/Maps APIs"], links:[{icon:FaGithub, link:"#git", name:"Github"}, {icon:FaYoutube, link:"#youtube", name:"Overview"}], description:"MerlinRoads is an interactive dashboard for visualizing and analyzing car accident data on urban road networks. It combines real-time and historical data with features like map filtering, SUMO-based traffic simulation, and visual analytics to support data-driven decisions."},
    {title: "LBC Task Scheduling Heuristic", technologies:["Python", "R", "IGraph", "Jupyter Notebook", "Data Visualization"], links:[{icon:FaGithub, link:"#git", name:"Github"}, {icon:FaBookOpen, link:"#paper", name:"Read"}], description:"This project, developed as part of my thesis, introduces task scheduling heuristics based on Longest Betweenness Centrality to improve efficiency in distributed systems. The heuristics are evaluated against established methods using synthetic task graphs."},
    {title: "PokerPals", technologies:["Django", "tailwindCSS", "Python", "JavaScript"], links:[{icon:FaGithub, link:"#git", name:"Github"}, {icon:FaGlobe, link:"#site", name:"Visit"}], description:"PokerPals is a poker statistics website built for my friend group. It features player accounts, team chats, and awards like most wins or losses. It also tracks game history, detailed player stats, and total earnings across all sessions."},
    {title: "Portofolio", technologies:["React", "TailwindCSS", "JavaScript"], links:[{icon:FaGithub, link:"#git", name:"Github"}, {icon:FaGlobe, link:"#site", name:"Visit"}], description:"This website serves as my personal portfolio, where I share a selection of projects I have worked on, along with an overview of the skills I have developed and the experiences I have gained through various learning and work opportunities."}
]

export const Projects = () => {
    
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, key) => (
                        <div key={key} className="p-6 rounded-xl border-4 border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-blue-500"> {project.title} </h3>
                            <p className="text-gray-300"> {project.description}</p>
                            <div className='flex flex-wrap gap-3 my-4'>
                            {project.technologies.map((technology, key2) => (
                                <span key={key2} className='bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                    {technology}
                                </span>
                            ))}
                            </div>
                            <div className='flex gap-8 py-4 pl-2'>
                            {project.links.map((link, key3) => (
                                <a key={key3} href={link.link} className='text-gray-300 hover:text-blue-400 flex flex-col transition-all hover:-translate-y-1 items-center'>
                                    <link.icon className='text-3xl' />
                                    <p className='text-center mt-1 font-bold'>{link.name}</p>
                                </a>
                            ))}
                            </div>
                        </div> 
                    ))}
                    

                </div>

            </div>

        </section>
    );
}