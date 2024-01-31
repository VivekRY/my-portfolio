import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard.jsx';
import './Skills.css'

const Skills =()=>{
    console.log(SKILLS)
    return(
        <section className='skills-container'>
            <h5>Technical Proficiency</h5>

            <div className='skills-content'>
                <div className='skills'>
                    {SKILLS.map((skill)=>(
                        <SkillCard 
                            key={skill.title}
                            iconUrl={skill.icon}
                            title={skill.title}
                            isActive={false}
                        />
                    ))}
                </div>
                <div className='skills-info'></div>
            </div>
        </section>
    )
}

export default Skills;