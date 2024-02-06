import { useState } from "react";
import "./Navbar.css"
import MobileNav from "../MobileNav/MobileNav";
import React from 'react';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('Home')

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const handleActive=(e)=>{
        if(e.target.name==='Home') setActiveNav('Home')
        else if(e.target.name==='Skills') setActiveNav('Skills')
        else if(e.target.name==='Experience') setActiveNav('Experience')
        else setActiveNav('Contact');
    }

    return (
        <>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-container">
                <div className="nav-data">
                    <h3 className="logo" src="" alt="Navlogo">&#x1F440; My Vision</h3>
                    <ul>
                        <li>
                            <Link to="heroid" offset={-150} className={`menu-item ${activeNav==='Home'?'active':''}`} smooth duration={500} name="Home" onClick={handleActive}>Home</Link>
                        </li>
                        <li>
                            <Link to="skillsid" offset={-150} className={`menu-item ${activeNav==='Skills'?'active':''}`} smooth duration={500} name="Skills" onClick={handleActive}>Skills</Link>
                        </li>
                        <li>
                            <Link to="expid" offset={-150} className={`menu-item ${activeNav==='Experience'?'active':''}`} smooth duration={500} name="Experience" onClick={handleActive}>Work Experience</Link>
                        </li>
                        <li>
                            <Link to="contactid" offset={-150} className={`menu-item ${activeNav==='Contact'?'active':''}`} smooth duration={500} name="Contact" onClick={handleActive}>Contact me</Link>
                        </li>
                        <button className="contact-btn" onClick={() => { }}>
                            Hire  me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} >{openMenu ? "✖" : "☰"}</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;