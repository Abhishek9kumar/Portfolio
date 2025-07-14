import React from 'react';
import Info from './Info';
import Profilelink from './Profilelink';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <Info greeting="Hi, I am" name="Abhishek Kumar" degination1="Front-end Developer / " degination2="Web Developer" imgLink="/Img/Abhishek.png">
        <Profilelink link="https://www.instagram.com/alexander_abhishek_?igsh=dXRtcjBuc25tcGh3" icon={faInstagram} />
        <Profilelink link="https://github.com/Abhishek9kumar" icon={faGithub} />
        <Profilelink link="https://www.linkedin.com/in/abhishek-kumar-8489a1247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={faLinkedin} />
      </Info>
    </div>
  );
}
