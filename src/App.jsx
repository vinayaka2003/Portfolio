import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certificate from './components/Certificate.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Certificate/>
      <Contact/>
    </>
  );
}

export default App;
