import { FaMapMarkerAlt, FaUser, FaGraduationCap, FaBriefcase, FaReact, FaJava, FaDatabase, FaCalendarAlt} from 'react-icons/fa';
import { SiTailwindcss, SiDash, SiDjango, SiJavascript} from 'react-icons/si';
import { DiPython} from 'react-icons/di';
import { RevealOnScroll } from '../RevealOnScroll';

const techStack = [
    { icon: FaJava, name: 'Java', description: 'Backend Development', color: "text-blue-200", bgColor: "bg-cyan-900" },
    { icon: DiPython, name: 'Python', description: 'Backend Development', color: "text-yellow-300", bgColor: "bg-yellow-900" },
    { icon: SiJavascript, name: 'JavaScript', description: 'Web Scripting', color: 'text-yellow-400', bgColor: 'bg-yellow-900' },
    { icon: FaDatabase, name: 'SQL', description: 'Database Querying', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: FaReact, name: 'React', description: 'JavaScript Library', color:"text-cyan-400", bgColor:"bg-teal-900"},
    { icon: SiDjango, name: 'Django', description: 'Python Web Framework', color: 'text-green-500', bgColor: 'bg-green-900' },
    { icon: SiDash, name: 'Dash', description: 'Python Web Framework', color: 'text-indigo-400', bgColor: 'bg-indigo-900' },
    { icon: SiTailwindcss, name: 'Tailwind', description: 'CSS Framework', color: 'text-teal-400', bgColor: 'bg-teal-900' },
  ];

const skills = [
    "Git",
    "Scrum",
    "Sprint Planning",
    "Data Analysis",
    "Problem Solving",
    "Object Oriented Programming",
    "REST API's",
]

export const About = () => {
    return (
        <section 
                id="about"
                className="min-h-screen flex items-center justify-center py-20"
        >

                <div className="max-w-3xl mx-auto px-4 md:min-w-250 ">
                    <RevealOnScroll>
                    <div className='flex justify-center items-center mb-5'>
                        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-500 pb-2 border-b-4 px-5">
                            About Me
                        </h2>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                    <div className="flex md:flex-row flex-col md:space-x-25 space-y-2 mb-10 justify-around items-center">
                        <div className="flex items-center space-x-2 text-lg">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <span className='text-primaryText font-bold transition-all duration-500'>Oldenzaal, Netherlands</span>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <FaUser className="text-blue-400" />
                            <span className='text-primaryText font-bold transition-all duration-500'>20 years old</span>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <FaGraduationCap className="text-blue-400" />
                            <span className='text-primaryText font-bold transition-all duration-500'>Masters TCS student</span>
                        </div>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                    <div className='mb-1 mt-5'>
                        <h3 className="text-titleText text-2xl font-bold transition-all duration-500">Technologies</h3>
                        <p className='text-primaryText text-md mt-1 transition-all duration-500'>
                            I am proficient in range of modern technologies. These are some of the main technologies I have worked with.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
                            {techStack.map((tech, index) => (
                                <div key={index} className="flex flex-row items-center p-2 rounded-2xl border-3 bg-cardBackground hover:bg-primaryText/20 hover:-translate-y-1 border-titleText/10 hover:border-primaryText/10 transition-all duration-500">
                                    <div className={`p-3 rounded-lg ${tech.bgColor}`}>
                                        <tech.icon className={`text-2xl ${tech.color}`} />
                                    </div>
                                    <div className="flex flex-col px-3">
                                        <h4 className="text-titleText/80 font-bold text-md transition-all duration-500">{tech.name}</h4>
                                        <p className="text-primaryText/40 font-semibold text-xs transition-all duration-500">{tech.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                    <div className='mt-15'>
                        <h3 className="text-titleText text-2xl font-bold transition-all duration-500">Skills</h3>
                        <p className='text-primaryText text-md mb-2 mt-1 transition-all duration-500'>
                            Through working on team projects for real clients, I have developed these key skills that help me contribute effectively in collaborative and professional environments.
                        </p>
                        <div className='flex flex-wrap gap-3 my-4'>
                            {skills.map((skill, key) => (
                                <span
                                    key={key}
                                    className='bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                                >
                                    {skill}
                                </span>
                            ))
                            }
                        </div>
                    </div>
                    </RevealOnScroll>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-15'>
                        <RevealOnScroll direction='left'>
                        <div className='p-6 rounded-xl bg-cardBackground border-titleText/10 border-4 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500'>
                            <div className='flex items-center space-x-4'>
                                <FaGraduationCap className="text-blue-400 text-2xl" />
                                <h3 className='text-xl font-bold text-primaryText transition-all duration-500'>Education</h3>
                            </div>
                            <ul className="space-y-6 text-gray-300 my-2">
                                <li>
                                    <h4 className='text-blue-500 text-lg font-bold mb-1'>Master Computer Science</h4>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendarAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>2025 - Present</p>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaMapMarkerAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>University of Twente</p>
                                    </div>
                                    <p className='text-primaryText transition-all duration-500'>I am currently in my first year of the Master Computer Science, specializing in Software Technology and Formal Methods.</p>
                                </li>

                                <li>
                                    <h4 className='text-blue-500 text-lg font-bold mb-1'>Bachelor Technical Computer Science</h4>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendarAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>2022 - 2025</p>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaMapMarkerAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>University of Twente</p>
                                    </div>
                                    <p className='text-primaryText transition-all duration-500'>I graduated Cum Laude with a strong foundation in algorithms, data structures, OOP, and web development.</p>
                                </li>
                            </ul>
                        </div> 
                        </RevealOnScroll>
                        <RevealOnScroll direction='right'>
                        <div className='p-6 rounded-xl bg-cardBackground border-titleText/10 hover:border-blue-500/30 border-4 hover:-translate-y-1 transition-all duration-500'>
                            <div className='flex items-center space-x-4'>
                                <FaBriefcase className="text-blue-400 text-2xl" />
                                <h3 className='text-xl font-bold text-primaryText transition-all duration-500'>Work Experience</h3>
                            </div>
                            <ul className="space-y-6 text-gray-300 my-2">
                                <li>
                                    <h4 className='text-blue-500 text-lg font-bold mb-1'>Teaching Assistant</h4>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendarAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>Sep 2023 - Present</p>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaMapMarkerAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>University of Twente</p>
                                    </div>
                                    <p className='text-primaryText transition-all duration-500'>I assist students by clarifying course material, mentoring, guiding assignments, grading tests, and reviewing submissions.</p>
                                </li>
                                <li>
                                    <h4 className='text-blue-500 text-lg font-bold mb-1'>Stock Clerk</h4>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendarAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>Dec 2019 - Juli 2023</p>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaMapMarkerAlt className='text-blue-300'/>
                                        <p className='text-blue-300 font-medium mb-1'>Albert Heijn</p>
                                    </div>
                                    <p className='text-primaryText transition-all duration-500'>As a Stock Clerk, my main responsibility was restocking shelves. I also handled incoming shipments and sorted them</p>
                                </li>
                            </ul>
                        </div> 
                        </RevealOnScroll>
                    </div>


                </div>
        </section>
    )
}