import React from 'react';
import './main.css';
import {main} from "../../content/content"
import { Button, useMediaQuery } from '@mui/material';
import Fade from 'react-reveal/Fade';

function Main() {
    
    // console.log(main);
    const isDesktop = useMediaQuery("(min-width: 750px)")


  return (
    <Fade bottom delay={100}>
        <div className='base'>
            <div className='main'>
                <div className='maingreetdiv'>
                    <h4 className='maingreet'>{main.greet}</h4>
                </div>
                <div className='mainnamediv'>
                    <h1 className='mainname'>{main.name}</h1>
                </div>
                <div className='mainwhatdodiv'>
                    <h2 className='mainwhatdo'>{main.whatdo}</h2>
                </div>
                <div className='mainwhoamidiv'>
                    <p className='mainwhoami'>{main.whoami}</p>
                    <p className='maincurrent'>{main.current}</p>
                </div>
                <div className='mainbtndiv'>
                    <Button href='#projects' size={isDesktop ? "large" : "small"} variant="outlined" id='maincheckprojbtn'>{main.button}</Button>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Main