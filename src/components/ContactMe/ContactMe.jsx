import ContactForm from './ContactForm/ContactForm';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import './ContactMe.css'
import { Element } from 'react-scroll'
import React from 'react';

const ContactMe = () => {
    return (
        <Element id='contactid' name='contactid'>
            <section className='contact-container'>
                <h5>Contact Me</h5>

                <div className='contact-content'>
                    <div style={{ flex: 1 }}>
                        <ContactInfoCard
                            iconUrl='./assets/mail-64.png'
                            text='viveky0222@gmail.com'
                        />
                        <ContactInfoCard
                            iconUrl='./assets/github.png'
                            text='https://github.com/VivekRY'
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default ContactMe;