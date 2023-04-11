import React from 'react';
import "./simongame.css"
import { projects } from '../../../content/content';
import { ReactComponent as Logo } from "../../../icons/github.svg"

function Simongame() {
  return (
    <div className='simongame'> 
        <div className='imgdivsimongame'>
            <a rel='noreferrer' href={projects.simongame.site} target='_blank'><img className='simongameimg' src={projects.simongame.img} alt="tindog"/></a>
        </div>
        <div className='contdivsimongame'>
            <h2 className='titlesimongame'>simongame</h2>
            <div className='overlasimongame'>
                <p className='overlapcontsimongame'>{projects.simongame.desc}</p>
                <ul className='toolssimongame'>
                    <li className='tool1simongame'>{projects.simongame.tool1}</li>
                    <li className='tool2simongame'>{projects.simongame.tool2}</li>
                    <li className='tool3simongame'>{projects.simongame.tool3}</li>
                </ul>
                <ul className='linkssimongame'>
                    <li className='gitlinksimongame'><a href={projects.simongame.github}><Logo/></a></li>
                    <li className='sitelinksimongame'><a href={projects.simongame.site}><Logo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Simongame