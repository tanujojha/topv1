import React from 'react';
import "./artsocials.css"
import { projects } from '../../../content/content';
import { ReactComponent as Logo } from "../../../icons/github.svg" 

function Artsocials() {
  return (
    <div className='artsocials'>
        <div className='imgdivartsls'>
            <a rel='noreferrer' href={projects.artsocials.site} target='_blank'><img className='artslsimg' src={projects.artsocials.img} alt="tindog"/></a>
        </div>
        <div className='contdivartsls'>
            <h2 className='titleartsls'>ArtSocials</h2>
            <div className='overlaartsls'>
                <p className='overlapcontartsls'>{projects.artsocials.desc}</p>
                <ul className='toolsartsls'>
                    <li className='tool1artsls'>{projects.artsocials.tool1}</li>
                    <li className='tool2artsls'>{projects.artsocials.tool2}</li>
                    <li className='tool3artsls'>{projects.artsocials.tool3}</li>
                </ul>
                <ul className='linksartsls'>
                    <li className='gitlinkartsls'><a href={projects.artsocials.github}><Logo/></a></li>
                    <li className='sitelinkartsls'><a href={projects.artsocials.site}><Logo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Artsocials