import { useState } from "react";
import "./Navbar.css"
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-container">
                <div className="nav-data">
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
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} >{openMenu ? "close" : "menu"}</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;