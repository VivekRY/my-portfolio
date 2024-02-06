import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './WorkExperience.css'
import { Element } from 'react-scroll'
import React from 'react';

const WorkExperience = () => {

    return (
        <Element id='expid' name='expid'>
            <section className='experience-container'>
                <h5>Work Experience</h5>

                <div className='experience-content'>
                    {WORK_EXPERIENCE.map((exp,index) => (
                        <ExperienceCard key={index} title={exp.title} details={exp} />
                    ))}
                </div>
            </section>
        </Element>
    )
}

export default WorkExperience;