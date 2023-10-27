import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id='header'>
      <nav id='navigation_bar'>
        <button className='header_buttons'>Home</button>
        <button className='header_buttons'>Works</button>
        <button className='header_buttons'>About</button>
      </nav>
    </header>
  );
};

export default Header;
