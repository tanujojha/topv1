import React from 'react';
import "./tindog.css"
import { projects } from '../../../content/content';
import { ReactComponent as GithubLogo } from "../../../icons/github.svg";
import { ReactComponent as GotositeLogo } from "../../../icons/gotosite.svg";




function Tindog() {
    
  return (
    
    <div className='tindog'>
        <div className='imgdivtindog'> 
            <a rel='noreferrer' href={projects.tindog.site} target='_blank'><img className='tindogimg' src={projects.tindog.img} alt="tindog"/></a>
        </div>
        <div className='contdivtindog'>
            <h2 className='titletindog'>Tindog</h2>
            <div className='overlaptindog'>
                <p className='overlapconttindog'>{projects.tindog.desc}</p>
                <ul className='toolstindog'>
                    <li className='tool1tindog'>{projects.tindog.tool1}</li>
                    <li className='tool2tindog'>{projects.tindog.tool2}</li>
                    <li className='tool3tindog'>{projects.tindog.tool3}</li>
                </ul>
                <ul className='linkstindog'>
                    <li className='gitlinktindog'><a href={projects.tindog.github} target='_blank' rel='noreferrer'><GithubLogo/></a></li>
                    <li className='sitelinktindog'><a href={projects.tindog.site} target='_blank' rel='noreferrer'><GotositeLogo/></a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Tindog