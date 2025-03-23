import React from "react";
import vinayaka from "../images/vinayaka.jpg";

const Profile = () => {
  return (
    <section id="p1">
      <div id="img">
        <img className="profile" src={vinayaka} width="350px" height="350px" alt="Vinayaka S" />
      </div>
      <div className="info">
        <div id="info1">
          <h3>Hello, I'm</h3>
          <h1>Vinayaka S</h1>
          <h2>Frontend Developer</h2>

          <div>
            <button className="button1">Download CV</button>
            <a href="#Contact"><button className="button2">Contact Info</button></a>
          </div>
        </div>

        <div id="social">
          <a href="https://github.com/vinayaka2003" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vinayaka-s-34790a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/vinayaka_s_y?utm_source=qr&igsh=MTNldjYyZjRqYmN4Zg==" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/share/1A4VbmMf2c/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
