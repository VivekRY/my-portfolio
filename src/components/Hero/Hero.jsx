import './Hero.css';
import { Element } from 'react-scroll'
import React from 'react';

const Hero = () => {
    return (
        <Element id='heroid' name='heroid'>
            <section className='hero-container'>
                <div className='hero-content'>
                    <h2>Building Digital Experiences that Inspire</h2>
                    <p>
                        Passionate Frontend Developer | Transforming Ideas into Seamless and
                        visually appealing web solutions
                    </p>
                </div>

                <div className='hero-img'>
                    <div>
                        <div className='tech-icon'>
                            <img style={{ width: '4rem' }} src='./logo192.png' alt='hero' />
                        </div>
                        <img src='./self.jpeg' alt='' />
                    </div>
                    <div>
                        <div className='tech-icon-g'>
                            <img style={{ width: '18rem', marginLeft: '1.5rem' }} src='./tech-icon.png' />
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Hero;