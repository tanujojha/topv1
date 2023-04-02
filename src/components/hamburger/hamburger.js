import React from 'react';
import "./hamburger.css";
import { Button } from '@mui/material';

function Hamburger() {
  return (
    <>
       <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        <div class="menu">
            <div>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Work</a></li>
                    <li><a href='#'>Contact</a></li>
                    <Button size='large' variant="outlined" id='Mresumebtn'>Resume</Button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Hamburger