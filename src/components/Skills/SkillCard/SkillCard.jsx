import './SkillCard.css'
import React from 'react';

const SkillCard=({isActive, iconUrl, title, onClick})=>{
    return(
        <div className={`skill-card ${isActive ? 'active' : ""}`} onClick={()=>{onClick()}}>
            <div className='skill-icon'>
                <img  src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
}

export default SkillCard;