import React from 'react';
import "./mnbMart.css"
import { projects, newProjects } from '../../../content/content';
import { ReactComponent as GithubLogo } from "../../../icons/github.svg";
import { ReactComponent as GotositeLogo } from "../../../icons/gotosite.svg";

function MnbMart() {
  return (
    <div className='artsocials'>
        <div className='imgdivartsls'>
            <a rel='noreferrer' href={newProjects.mnbMart.site} target='_blank'><img className='artslsimg' src={newProjects.mnbMart.img} alt="tindog"/></a>
        </div>
        <div className='contdivartsls'>
            <h2 className='titleartsls'>MNB Mart</h2>
            <div className='overlaartsls'>
                <p className='overlapcontartsls'>{newProjects.mnbMart.desc}</p>
                <ul className='toolsartsls'>
                    <li className='tool1artsls'>{newProjects.mnbMart.tool1}</li>
                    <li className='tool2artsls'>{newProjects.mnbMart.tool2}</li>
                    <li className='tool3artsls'>{newProjects.mnbMart.tool3}</li>
                </ul>
                <ul className='linksartsls'>
                    <li className='gitlinkartsls'><a href={newProjects.mnbMart.github} target='_blank' rel='noreferrer'><GithubLogo/></a></li>
                    <li className='sitelinkartsls'><a href={newProjects.mnbMart.site} target='_blank' rel='noreferrer'><GotositeLogo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MnbMart