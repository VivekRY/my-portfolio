import './ContactForm.css';
import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ikmtk8x','template_38kwint',e.target,'e6nPhqRnTm-m75_W1')
        .then((response)=>alert('Mail Sent Succefully !!'))
        .catch((error)=>alert('Sorry, Please try again..!!'))
    }
    return (
        <div className='contact-form-container'>
            <form onSubmit={handleSubmit}>
                <div className='name-container'>
                    <input type='text' name='firstname' placeholder='First Name' required />
                    <input type='text' name='lastname' placeholder='Last Name' />
                </div>
                <input type='text' name='email' placeholder='Email' required />
                <textarea type='text' name='message' placeholder='Message' rows={3} />

                <button type='submit'>SEND</button>
            </form>
        </div>
    )
}

export default ContactForm;