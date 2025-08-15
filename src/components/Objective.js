import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

export default function Objective(props) {
  return (
    <section className="flex-d position-relative text-white py-5 px-4 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <div className="container position-relative z-1" data-aos="fade-up">
        <p className="text-white-50" style={{ textAlign: "justify" }}>
          {props.Objective}
        </p>
        <div>
          <a href="https://drive.google.com/uc?export=download&id=1lOTbO6e0kQbPkc0kkv2CmfQ7GaVLetAl" className="download_btn">
            <FontAwesomeIcon icon={faFloppyDisk} bounce style={{ "--fa-animation-duration": "2s", paddingRight: "5px" }}
            />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
