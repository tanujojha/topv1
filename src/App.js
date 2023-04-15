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
// import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';


function App() {

  const isDesktop = useMediaQuery("(min-width: 750px)");

  const [togglerIsClicked, setTogglerIsClicked] = useState(false)
     
  return (
    <div className="App" style={{overflowY: togglerIsClicked ? "hidden" : "auto"}}>
        {/* <Scrollbars autoHide style={{ width: "100vw", height: "100vh"}}> */}
        
        {isDesktop ? <LftFlt/> : null}
        {isDesktop ? <RgtFlt/> : null}
        <Navbar togglerIsClicked={togglerIsClicked} setTogglerIsClicked={setTogglerIsClicked}/>
        
        {/* the bellow div is only for the blur effect on hamburger toggle */}
        <div style={{filter: togglerIsClicked ? "blur(5px)" : "none"}} >
          <Main />
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>

        {/* </Scrollbars> */}
    </div>
  );
}

export default App;
