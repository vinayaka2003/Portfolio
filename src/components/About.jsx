import React from 'react';

const About = () => {
  return (
    <section id='all'>
      <header className='qqq'>
        <p>About Me</p>
      </header>

      <section className='about'>
      <h1>Vinayaka S</h1>
      <h4>Front-End Developer</h4>
        
        <p>
        Dedicated Web Developer | Front-End Developer with a good understanding of HTML, CSS, JavaScript, and 
        React.js. Focused on creating responsive and easy-to-use web applications. Skilled in building user 
        interfaces and improving website performance. Familiar with modern front-end development and always eager to learn new things.
        </p>
      </section>

      <section className="container">
        <div className="box">
          <h3>Education</h3>
          <p><strong>SSLC:</strong> (2020) Swami Vivekananda School, Soraba</p>
          <p><strong>PUC:</strong> (2021-2022) Sri Channamallikarjuna Vidya Samsthe, Shikaripur</p>
          <p><strong>Degree:</strong> (2022-2025) BCA, Kateel Ashok Pai Memorial College Shimogga (Kuvempu University)</p>
        </div>

        <div className="box">
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Git & GitHub</li>
            <li>CSS Frameworks (Bootstrap, Tailwind)</li>
          </ul>
        </div>

        <div className="box">
          <h3>Hobbies</h3>
          <ul>
            <li>Coding & Side Projects</li>
            <li>Learning New Technologies</li>
            <li>Reading</li>
          </ul>
        </div>

        <div className="box">
          <h3>Languages</h3>
          <ul>
            <li>Kannada(fluent)</li>
            <li>English(Intermediate)</li>
            <li>Reading(Intermediate)</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
