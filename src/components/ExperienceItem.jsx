import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

export const ExperienceItem = ({title, date, location, description}) => {

    return (
        <li>
            <h4 className='text-blue-500 text-lg font-bold mb-1'>{title}</h4>
            <div className='flex items-center space-x-2'>
                <FaCalendarAlt className='text-blue-300'/>
                <p className='text-blue-300 font-medium mb-1'>{date}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <FaMapMarkerAlt className='text-blue-300'/>
                <p className='text-blue-300 font-medium mb-1'>{location}</p>
            </div>
            <p className='text-primaryText transition-all duration-500'>{description}</p>
        </li>
    )

}