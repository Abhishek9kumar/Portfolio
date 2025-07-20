import React from 'react';

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
              <div className="animation-text">
                <ol>
                  <li><span>Web Developer</span></li>
                  <li><span>Full Stack Developer</span></li>
                  <li><span>Coder</span></li>
                </ol>
              </div>
              {/* <p className="designation-text">
                {props.degination1} <span className="designation-bold">{props.degination2}</span>
              </p> */}
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
