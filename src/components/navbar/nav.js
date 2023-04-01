import { Button } from '@mui/material';
import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./nav.css"
import Hamburger from '../hamburger/hamburger';

function Navbar() {

    const isDesktop = useMediaQuery("(min-width: 750px)")
    // console.log(isDesktop);

  return (
    <div className='navbar'>
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
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div className='Dresumebtndiv'>
                            <Button size='small' variant="outlined" id='Dresumebtn'>Resume</Button>
                        </div>
                    </div> 
                )
                :
                (
                    <div className='Mnavlinksdiv'>
                        <Hamburger/>
                    </div>
                )
            }
        </div>        
    </div>
  )
}

export default Navbar

