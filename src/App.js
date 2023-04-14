import './App.css';
import Navbar from './components/navbar/nav';
import LftFlt from './components/lftflt/lftflt';
import RgtFlt from './components/rgtflt/rgtflt';
import Footer from './pages/footer/footer';
import Main from './pages/main/main';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Scrollbars } from 'react-custom-scrollbars';
import SmoothScroll from "smooth-scroll";
import { useEffect } from 'react';
import { useState } from 'react';


export const scroll = new SmoothScroll('a[href*="#"]', { 
  speed: 900,
  speedAsDuration: true,
  easing: "easeInQuad",
});

function App() {

  const isDesktop = useMediaQuery("(min-width: 750px)");

     
  return (
    <div className="App">
      {/* <Scrollbars autoHide style={{ width: "100vw", height: "100vh"}}> */}
        <Navbar />
        {isDesktop ? <LftFlt/> : null}
        {isDesktop ? <RgtFlt/> : null}
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      {/* </Scrollbars> */}
    </div>
  );
}

export default App;
