import React from 'react';
import "./lftflt.css";
import { ReactComponent as GitLogo } from "../../icons/github.svg";
import { ReactComponent as LinkedinLogo } from "../../icons/linkedin.svg";
import Fade from 'react-reveal/Fade';


function LftFlt() {
  return (
    <Fade bottom delay={100}>
      <div className='lftflt'>
          <ul className='iconsul'>
              {/* <li><a className='gitlink' href="https://github.com/tanujojha" target='_blank'><GitLogo /></a></li> */}
              <li><a className='gitlink' href="https://github.com/tanujojha" target='_blank'><GitLogo /></a></li>
              <li><a className='linkedinlink' href="https://github.com/tanujojha" target='_blank'><LinkedinLogo /></a></li>
          </ul>
      </div>
    </Fade>
  )
}

export default LftFlt


//github
//linkedin


