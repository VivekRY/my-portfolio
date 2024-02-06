import './ContactInfoCard.css'

const ContactInfoCard=({iconUrl, text})=>{
    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img style={{width: '3rem'}} src={iconUrl} alt={text} />
            </div>

            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCard;