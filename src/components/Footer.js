import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';


export default function Footer() {
    return (
        <footer className="text-center text-white pt-2 pb-4 " style={{backgroundColor: "#000000"}}>
            {/* Back to top */}
            <div className="mb-3">
                <ScrollLink to="top" className="text-uppercase small fw-bold text-decoration-none text-reset lh-1" style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faAnglesUp}/><br/>
                    Back to top
                </ScrollLink>
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3 mb-3">
                <a href="https://www.facebook.com/share/19McvZiJgQ/" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                    <FontAwesomeIcon className="px-1 icon-size" icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/alexander_abhishek_?igsh=dXRtcjBuc25tcGh3" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                    <FontAwesomeIcon className="px-1 icon-size" icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-8489a1247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                    <FontAwesomeIcon className="px-1 icon-size" icon={faLinkedin} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishek931245@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                    <FontAwesomeIcon className="px-1 icon-size" icon={faEnvelope} />
                </a>
            </div>

            {/* Copyright */}
            <div className="text-white-50 small">
                <b>©2020 Abhishek Kumar</b> All Rights Reserved.
            </div>
        </footer>
    )
}
