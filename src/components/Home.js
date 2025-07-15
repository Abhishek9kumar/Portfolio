import React from 'react';
import Info from './Info';
import Profilelink from './Profilelink';
import Aboutme from './About';
import Skills from './Skills';
import Objective from './Objective';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home(props) {
  return (
    <div>
      <Info greeting="Hi, I am" name="Abhishek Kumar" degination1="Front-end Developer / " degination2="Web Developer" imgLink={`${process.env.PUBLIC_URL}/Img/Abhishek.png`}>
        <Profilelink link="https://www.instagram.com/alexander_abhishek_?igsh=dXRtcjBuc25tcGh3" icon={faInstagram} />
        <Profilelink link="https://github.com/Abhishek9kumar" icon={faGithub} />
        <Profilelink link="https://www.linkedin.com/in/abhishek-kumar-8489a1247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={faLinkedin} />
      </Info>
      <Objective Objective="Enthusiastic and highly motivated Computer Science graduate with a solid understanding of full stack web development using technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. Eager to apply my knowledge and passion for coding to real-world projects in a collaborative and growth-oriented environment. Seeking an opportunity to kickstart my career as a Full Stack Developer and contribute to building user-friendly and scalable web applications." />
      <Aboutme
        about="A B O U T"
        description="I am a full stack web developer. I can design the site based on your needs and suggestions."
        explore="EXPLORE"
        development="Development"
        developmentDesc="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
        maintenance="Maintenance"
        maintenanceDesc="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job." />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
