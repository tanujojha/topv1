import React from 'react';
import "./taskflier.css"
import { newProjects } from '../../../content/content';
import { ReactComponent as GithubLogo } from "../../../icons/github.svg";
import { ReactComponent as GotositeLogo } from "../../../icons/gotosite.svg";




function Taskflier() {
    
  return (
    
    <div className='tindog'>
        <div className='imgdivtindog'> 
            <a rel='noreferrer' href={newProjects.taskflier.site} target='_blank'><img className='tindogimg' src={newProjects.taskflier.img} alt="tindog"/></a>
        </div>
        <div className='contdivtindog'>
            <h2 className='titletindog'>Taskflier</h2>
            <div className='overlaptindog'>
                <p className='overlapconttindog'>{newProjects.taskflier.desc}</p>
                <ul className='toolstindog'>
                    <li className='tool1tindog'>{newProjects.taskflier.tool1}</li>
                    <li className='tool2tindog'>{newProjects.taskflier.tool2}</li>
                    <li className='tool3tindog'>{newProjects.taskflier.tool3}</li>
                </ul>
                <ul className='linkstindog'>
                    <li className='gitlinktindog'><a href={newProjects.taskflier.github} target='_blank' rel='noreferrer'><GithubLogo/></a></li>
                    <li className='sitelinktindog'><a href={newProjects.taskflier.site} target='_blank' rel='noreferrer'><GotositeLogo/></a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Taskflier