import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Info(props) {
  return (
    <div className="hero-wrapper">
      {/* Main Section */}
      < div className="hero-content" >
        {/*left content*/}
        < div className="hero-left">
          <div className="info-container z-1">
            <div className="text-wrapper">
              <h5 className="greeting-text">{props.greeting}</h5>
              <h1 className="name-text">{props.name}</h1>
              <div className="animation-text ">
                <Typewriter words={['Web Developer', 'Full Stack Developer', 'Code']} loop={8} typeSpeed={20} deleteSpeed={150} delaySpeed={2000} cursor/>
              </div>
            </div>
            <div className="icon-wrapper">
              <div className="icon-container">
                {props.children}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={props.imgLink} alt="profile" className="profile-image" />
          </div>
        </div>
      </div >
    </div >
  );
}
