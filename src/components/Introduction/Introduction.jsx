import React from "react";
import "./Introduction.css";
import curvedArrowLeft from "../../assets/icons/curvedArrowLeft.svg";
import personPicture from "../../assets/personPicture.jpg";

const Introduction = () => {
  return (
    <section id='introduction'>
      <div id='person'>
        <img src={personPicture} alt='Raquel' id='person_icon' />
        <img src={curvedArrowLeft} alt='Arrow Left' id='arrow_left' />
        <p id='person_name'>Raquel</p>
      </div>
      <div id='call'>
        <h1 id='introduction_title'>
          <span className='title_highlights'>Your website</span> in mind,
          <br />
          <span className='title_highlights'>usability</span> in the code
        </h1>
        <div id='call_text_button_container'>
          <p>
            I aim to always develop accessible, dynamic and performative
            applications
          </p>
          <button>Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
