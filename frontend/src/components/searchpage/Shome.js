import React from 'react';
import "../../App.css";
import Navbar from './Snav';

const Shome = () => {
  return (
    <>
    <Navbar/>
    <div className="home-page">
      <div className="home-div">
      <p className="pt-5">WELCOME</p>
      <h1>We are the CoLabconnect</h1>
    </div>
    </div>
    </>
  )
}

export default Shome;