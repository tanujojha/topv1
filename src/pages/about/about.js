import React from 'react';
import "./about.css";
import {about} from "../../content/content";

function About() {

    // console.log(about);
  return (
    <div className='base'>
        <div className='about'>
            <h2 className='titleabout'>About Me</h2>
            <div className='cont-imgdivabout'>
                <div className='contdivabout'>
                    <p className='para1contabout'>{about.para1}</p>
                    <p className='para2contabout'>{about.para2}</p>
                    <p className='para3contabout'>{about.para3}</p>
                    <p className='para4contabout'>{about.para4}</p>
                </div>
                <div className='imgdivabout'>
                    <div className='imginnerdivabout'>
                        <img className='profileabout' src="/assets/profile.jpg" alt="tanuj"/>
                    </div>
                    {/* <div className='effect'>
                        
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About