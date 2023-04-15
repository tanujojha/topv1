import React from 'react';
import "./hamburger.css";
import { Button } from '@mui/material';
import { deets } from '../../content/content';



function Hamburger({togglerIsClicked, setTogglerIsClicked}) {

  // function to close the sidenav when clicked on any nav links
  const handleCheckbox = ()=>{
    let toggler = document.getElementById("checktog")
    toggler.checked = false
    setTogglerIsClicked(false)
  } 


  return (
    <>
       <input type="checkbox" id='checktog' class="toggler" onClick={()=>setTogglerIsClicked(!togglerIsClicked)}/>
        <div class="hamburger"><div></div></div>
        <div class="menu">
            <div>
                <ul>
                    <li><a onClick={handleCheckbox} href='#about'>About</a></li>
                    <li><a onClick={handleCheckbox} href='#skills'>Skills</a></li>
                    <li><a onClick={handleCheckbox} href='#projects'>Projects</a></li>
                    <li><a onClick={handleCheckbox} href='#contact'>Contact</a></li>
                    <Button onClick={handleCheckbox} href={deets.resume} target='_blank' size='large' variant="outlined" id='Mresumebtn'>Resume</Button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Hamburger