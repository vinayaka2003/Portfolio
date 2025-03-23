import React from 'react';
import '../App.css'; 

function Navbar() {
  return (
    <nav id='vin'>
      <div>
        <h1 id='vinLogo'>Vinayaka S</h1>
      </div>

      <div className="pav">
      <ul id='navButtons'>
        <li className="b1"><a href="#all">About Me</a></li>
        <li className="b1"><a href="#work">Experience</a></li>
        <li className="b1"><a href="#Proj">Projects</a></li>
        <li className="b1"><a href="#cert">Certificate</a></li>
        <li id="b2"><a href="#Contact">Contact Us</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
