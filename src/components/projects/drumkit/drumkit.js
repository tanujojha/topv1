import React from 'react';
import "./drumkit.css"
import { projects } from '../../../content/content';
import { ReactComponent as GithubLogo } from "../../../icons/github.svg";
import { ReactComponent as GotositeLogo } from "../../../icons/gotosite.svg";

function Drumkit() {
  return (
    <div className='drumkit'>
        <div className='imgdivdrumkit'>
            <a rel='noreferrer' href={projects.drumkit.site} target='_blank'><img className='drumkitimg' src={projects.drumkit.img} alt="drumkit"/></a>
        </div>
        <div className='contdivdrumkit'>
            <h2 className='titledrumkit'>Drum kit</h2>
            <div className='overlapdrumkit'>
                <p className='overlapcontdrumkit'>{projects.drumkit.desc}</p>
                <ul className='toolsdrumkit'>
                    <li className='tool1drumkit'>{projects.drumkit.tool1}</li>
                    <li className='tool2drumkit'>{projects.drumkit.tool2}</li>
                    <li className='tool3drumkit'>{projects.drumkit.tool3}</li>
                </ul>
                <ul className='linksdrumkit'>
                    <li className='gitlinkdrumkit'><a href={projects.drumkit.github}><GithubLogo/></a></li>
                    <li className='sitelinkdrumkit'><a href={projects.drumkit.site}><GotositeLogo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Drumkit