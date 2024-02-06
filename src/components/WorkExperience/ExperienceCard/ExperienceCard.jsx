import './ExperienceCard.css'

const ExperienceCard=({title, details})=>{
    return(
        <div className='work-experience-card'>
            <h6>{title}</h6>

            <div className='work-duration'>{details.date}</div>

            <ul>
                {details.responsibilities.map((resp,index)=>(
                    <li key={index}>{resp}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard;