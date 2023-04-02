import React from 'react';
import "./artsocials.css"
import { projects } from '../../../content/content';
import { ReactComponent as Logo } from "../../../icons/github.svg"

function Artsocials() {
  return (
    <div className='tindog'>
        <div className='imgdivtindog'>
            <a href={projects.artsocials.site} target='_blank'><img className='tindogimg' src={projects.artsocials.img} alt="tindog"/></a>
        </div>
        <div className='contdivtindog'>
            <h2 className='titletindog'>ArtSocials</h2>
            <div className='overlaptindog'>
                <p className='overlapconttindog'>{projects.artsocials.desc}</p>
                <ul className='toolstindog'>
                    <li className='tool1tindog'>{projects.artsocials.tool1}</li>
                    <li className='tool2tindog'>{projects.artsocials.tool2}</li>
                    <li className='tool3tindog'>{projects.artsocials.tool3}</li>
                </ul>
                <ul className='linkstindog'>
                    <li className='gitlinktindog'><a href={projects.artsocials.github}><Logo/></a></li>
                    <li className='sitelinktindog'><a href={projects.artsocials.site}><Logo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Artsocials