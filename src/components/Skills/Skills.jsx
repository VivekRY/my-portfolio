import { useState } from 'react';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard.jsx';
import './Skills.css'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx';
import { Element } from 'react-scroll'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        <Element id="skillsid" name='skillsid'>
            <section className='skills-container'>
                <h5>Technical Proficiency</h5>

                <div className='skills-content'>
                    <div className='skills'>
                        {SKILLS.map((skill) => (
                            <SkillCard
                                key={skill.title}
                                iconUrl={skill.icon}
                                title={skill.title}
                                isActive={selectedSkill.title === skill.title}
                                onClick={() => { handleSelectSkill(skill) }}
                            />
                        ))}
                    </div>
                    <div className='skills-info'>
                        <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Skills;