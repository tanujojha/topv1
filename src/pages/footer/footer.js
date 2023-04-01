import React from 'react'
import "./footer.css";
import {ReactComponent as GitLogo} from '../../icons/github.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='ficonsdiv'>
            <ul className='ficonsul'>
                <li><a className='fgitlink' href=""><GitLogo/></a></li>
                <li><a className='flinkedilink' href=""><GitLogo/></a></li>
            </ul>               
        </div>
        <div className='fcontentdiv'>
            <h5 className='fmadeby'>Made by Tanuj Ojha</h5>
            <h6 className='fcopr'>© Copyright 2023</h6>
        </div>
    </div>
  )
}

export default Footer