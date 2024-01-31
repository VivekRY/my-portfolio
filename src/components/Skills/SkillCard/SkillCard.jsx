import './SkillCard.css'
import React from 'react';

const SkillCard=({isActive, iconUrl, title})=>{
    console.log(title)
    return(
        <div className={`skill-card ${isActive ? 'active' : ""}`} onClick={()=>{}}>
            <div className='skill-icon'>
                <img style={{width: '7rem'}} src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
}

export default SkillCard;