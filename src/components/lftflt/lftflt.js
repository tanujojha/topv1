import React from 'react';
import "./lftflt.css";
import { ReactComponent as GitLogo } from "../../icons/github.svg";
import { ReactComponent as LinkedinLogo } from "../../icons/linkedin.svg";
import { deets } from '../../content/content';
import Fade from 'react-reveal/Fade';


function LftFlt() {
  return (
    <Fade bottom delay={100}>
      <div className='lftflt'>
          <ul className='iconsul'>
              <li className='gitli'><a className='gitlink' href={deets.github} target='_blank' rel='noreferrer'><GitLogo /></a></li>
              <li className='linkdli'><a className='linkedinlink' href={deets.linkedin} target='_blank' rel='noreferrer'><LinkedinLogo /></a></li>
          </ul>
      </div>
    </Fade>
  )
}

export default LftFlt




