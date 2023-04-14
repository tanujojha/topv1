import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./nav.css"
import Hamburger from '../hamburger/hamburger';
import Roll from 'react-reveal/Roll';

function Navbar({togglerIsClicked, setTogglerIsClicked}) {

  const isDesktop = useMediaQuery("(min-width: 750px)") 

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [newScrollPosition, setNewScrollPosition] = useState(0)
  const [visible, setVisible] = useState(true);

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginBottom: "300px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    transition: "top 1s ease"
  }
  
  const scrollHandle = ()=>{
    let nsp = window.scrollY
    setNewScrollPosition(nsp)

    if(prevScrollPosition > nsp ){
      setVisible(true)
    }else{
      setVisible(false)
    }
    
    setPrevScrollPosition(newScrollPosition);

  }

  useEffect(()=>{
    window.addEventListener("scroll", scrollHandle);
    
    return ()=>{
      window.removeEventListener("scroll", scrollHandle)
    }
  }, [newScrollPosition])

  return (
    <div className='navbar' style={{...navStyle, top: visible ? 0 : "-100px", boxShadow: !newScrollPosition < 1 ? "0px 1px 10px rgb(26, 25, 25)" : "none"}}>
        <div className='innernavbar'>
            <div className='logodiv'>
                <img src="assets/logo.png" alt="tanuj logo"/>
            </div>
            {
                isDesktop 
                ?
                (
                    <div className='Dnavlinksdiv'>
                        <ul className='Dlinksul'>
                            <Roll left delay={100}><li><a href="#about">About</a></li></Roll>
                            <Roll left delay={300}><li><a href="#skills">Skills</a></li></Roll>
                            <Roll left delay={500}><li><a href="#projects">Projects</a></li></Roll>
                            <Roll left delay={700}><li><a href="#contact">Contact</a></li></Roll>
                        </ul>
                        <div className='Dresumebtndiv'>
                        <Roll left delay={900}><Button size='small' variant="outlined" id='Dresumebtn'>Resume</Button></Roll>
                        </div>
                    </div> 
                )
                :
                (
                    <div className='Mnavlinksdiv'>
                        <Hamburger togglerIsClicked={togglerIsClicked} setTogglerIsClicked={setTogglerIsClicked}/>
                    </div>
                )
            }
        </div>        
    </div>
  )
}

export default Navbar

