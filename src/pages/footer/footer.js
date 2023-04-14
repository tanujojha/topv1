import React from 'react'
import "./footer.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import {ReactComponent as GitLogo} from '../../icons/github.svg';
import {ReactComponent as LinkedinLogo} from '../../icons/linkedin.svg';


function Footer() {

  const isDesktop = useMediaQuery("(min-width: 750px)");


  return (
    <div className='base'>
      <div className='footer'>
          <div className='ficonsdiv'>
              <ul className='ficonsul'>
                  <li><a className='fgitlink' href="https://github.com/tanujojha" target='_blank' rel='noreferrer'><GitLogo/></a></li>
                  <li><a className='flinkedilink' href="https://www.linkedin.com/in/tanujojha/" target='_blank' rel='noreferrer'><LinkedinLogo/></a></li>
              </ul>               
          </div>
          <div className='fcontentdiv'>
              <p className='fmadeby'>Made by Tanuj Ojha</p>
              {!isDesktop ? <p className='femail'>tanujojha2042@gmail.com</p>: null}
              <h6 className='fcopr'>© Copyright 2023</h6>
          </div>
      </div>
    </div>
  )
}

export default Footer