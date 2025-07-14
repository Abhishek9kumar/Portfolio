import React, { useState } from "react";
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

export default function Navbar(props) {
    // hamburger
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const hrefggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(true);
    };

    // active state change
    const [active, setActive] = useState('About Me');

    const handleClick = (item) => {
        setActive(item);
    };

    return (
        <nav className="my-navbar">
            <div className="my-navbar-container d-flex justify-content-end">
                <div className="menu-toggle mt-3 me-3" onClick={hrefggleMenu}>
                    <FontAwesomeIcon className={`text-white ${!isMenuOpen ? "menuClose" : ""}`} icon={faBars} />
                    <FontAwesomeIcon className={`text-white ${isMenuOpen ? "menuClose" : ""}`} icon={faTimes} />
                </div>
                
                <div className={`my-nav-links text-reset ${!isMenuOpen ? "" : "menuClose"}`}>
                    <a href="#Aboutme" className={`my-nav-links-item scale-hover px-2 ${active === 'About Me' ? 'myActive' : 'text-color'}`}
                        onClick={() => { handleClick('About Me'); closeMenu(); }}>{props.about}</a>

                    <a href="#Skills" className={`my-nav-links-item scale-hover px-2 ${active === 'Skills' ? 'myActive' : 'text-color'}`}
                        onClick={() => { handleClick('Skills'); closeMenu(); }}>{props.skills}</a>

                    <a href="#Projects" className={`my-nav-links-item scale-hover px-2 ${active === 'Projects' ? 'myActive' : 'text-color'}`}
                        onClick={() => { handleClick('Projects'); closeMenu(); }}>{props.projects}</a>
                    
                    <a href="#Contact" className={`my-nav-links-item scale-hover px-2 ${active === 'Contact Me' ? 'myActive' : 'text-color'}`}
                        onClick={() => { handleClick('Contact Me'); closeMenu(); }}>{props.contact}</a>
                </div>
            </div>
        </nav >
    );
};
