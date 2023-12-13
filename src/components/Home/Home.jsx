import React from "react";
import "./Home.css";
import icon from "../../assets/Icon.png";

const Home = () => {
  return (
    <section id='home' aria-label='home'>
      <h1 id='heading_intro'>
        Developing
        <span className='heading_boxes' id='dynamic_box'>
          dynamic
        </span>
        <span className='heading_boxes' id='performatic_box'>
          performative
        </span>
        <span className='heading_boxes' id='accessible_box'>
          accessible
        </span>
        {/* <br /> */}
        front-ends
      </h1>
      <div id='personal_intro'>
        <div id='name_div'>
          <p className='intro_name'>Zimmer</p>
          <p className='intro_name'>Raquel</p>
        </div>
        <img className='intro_photo' src={icon} alt='Raquel Zimmer Photo' />
      </div>
    </section>
  );
};

export default Home;
