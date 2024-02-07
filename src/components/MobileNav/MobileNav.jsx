import { useState } from 'react';
import './MobileNav.css';
import { Link } from 'react-scroll'


const MobileNav = ({ toggleMenu, isOpen }) => {
    const [activeNav, setActiveNav] = useState('Home')

    const handleActive = (e) => {
        if (e.target.name === 'Home') setActiveNav('Home')
        else if (e.target.name === 'Skills') setActiveNav('Skills')
        else if (e.target.name === 'Experience') setActiveNav('Experience')
        else setActiveNav('Contact');
        toggleMenu();
    }

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className="mobile-container">
                    <h3 className="logo" src="" alt="Navlogo">&#x1F440; My Vision</h3>
                    <ul>
                        <li>
                            <Link to="heroid" offset={-150} className={`menu-item ${activeNav === 'Home' ? 'active' : ''}`} smooth duration={500} name="Home" onClick={handleActive}>Home</Link>
                        </li>
                        <li>
                            <Link to="skillsid" offset={-150} className={`menu-item ${activeNav === 'Skills' ? 'active' : ''}`} smooth duration={500} name="Skills" onClick={handleActive}>Skills</Link>
                        </li>
                        <li>
                            <Link to="expid" offset={-150} className={`menu-item ${activeNav === 'Experience' ? 'active' : ''}`} smooth duration={500} name="Experience" onClick={handleActive}>Work Experience</Link>
                        </li>
                        <li>
                            <Link to="contactid" offset={-150} className={`menu-item ${activeNav === 'Contact' ? 'active' : ''}`} smooth duration={500} name="Contact" onClick={handleActive}>Contact me</Link>
                        </li>
                        {/* <button className="contact-btn" onClick={() => { }}>
                            Hire  me
                        </button> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;