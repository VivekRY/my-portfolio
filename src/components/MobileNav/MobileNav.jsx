import './MobileNav.css';

const MobileNav = ({ toggleMenu, isOpen }) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-container">
                    <img className="logo" src="" alt="Navlogo" />
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>
                        <button className="contact-btn" onClick={() => { }}>
                            Hire  me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;