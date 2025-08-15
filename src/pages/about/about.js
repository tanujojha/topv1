import React from 'react';
import "./about.css";
import {about} from "../../content/content";
import Fade from 'react-reveal/Fade';


function About() {
    
  return (
    <Fade bottom delay={100}>
        <div className='base' id='about'>
            <div className='about'>
                <h2 className='titleabout'>About Me</h2>
                <div className='cont-imgdivabout'>
                    <div className='contdivabout'>
                        <p className='para0contabout'>{about.greet}</p>
                        <p className='para1contabout'>{about.para1}</p>
                        <p className='para2contabout'>{about.para2}</p>
                        <p className='para3contabout'>{about.para3}</p>
                        <p className='para4contabout'>{about.para4}</p>
                    </div>
                    <div className='imgdivabout'>
                            <img className='profileabout' src="/assets/profile.jpg" alt="tanuj"/>
                        {/* <div className='imginnerdivabout'>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default About