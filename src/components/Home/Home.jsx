import React from "react";
import "./Home.css";
import icon from "../../assets/Icon.png";

const Home = () => {
  return (
    <section id='home'>
      <h1 id='heading_intro'>
        Developing <br />
        <span className='heading_boxes' id='dynamic_box'>
          dynamic
        </span>
        <br />
        <span className='heading_boxes' id='performatic_box'>
          performatic
        </span>
        <br />
        <span className='heading_boxes' id='accessible_box'>
          accessible
        </span>
        <br />
        front-ends
      </h1>
      <div id='intro_section'>
        <p className='intro_name'>Zimmer</p>
        <p className='intro_name'>Raquel</p>
        <img src={icon} alt='Raquel Zimmer Photo' />
      </div>
    </section>
  );
};

export default Home;
