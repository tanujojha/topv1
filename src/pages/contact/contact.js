import React from 'react';
import "./contact.css";
import { Button } from '@mui/material'
import Fade from 'react-reveal/Fade';


function Contact() {
  return (
    <Fade bottom delay={100}>
      <div className='base' id='contact'>
          <div className='contact'>
              <h5 className='swncontact'>So What's Next ?</h5>
              <h1 className='gintcontact'>Get In Touch</h1>
              <p className='fstpcontact'>Hey! Feel free to drop a message if you have any</p>
              <p className='scndpcontact'>suggestions or cool/crazy ideas</p>
              <p className='thrdpcontact'>My inbox is open for Recruiters and Collaborators</p>
              <Button href='mailto:tanujojha2042@gmail.com' id='sayhellocontact' variant='outlined' size='large'>Say Hello</Button>
          </div>
      </div>
    </Fade>
  )
}

export default Contact