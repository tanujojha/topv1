import React from 'react';
import "./keeperApp.css";
import { projects } from '../../../content/content';
import { ReactComponent as GithubLogo } from "../../../icons/github.svg";
import { ReactComponent as GotositeLogo } from "../../../icons/gotosite.svg";

function KeeperApp() {
  return (
    <div className='keeperapp'>
        <div className='imgdivkeeperapp'>
            <a rel='noreferrer' href={projects.keeperapp.site} target='_blank'><img className='keeperappimg' src={projects.keeperapp.img} alt="keeperapp"/></a>
        </div>
        <div className='contdivkeeperapp'>
            <h2 className='titlekeeperapp'>keeperapp</h2>
            <div className='overlapkeeperapp'>
                <p className='overlapcontkeeperapp'>{projects.keeperapp.desc}</p>
                <ul className='toolskeeperapp'>
                    <li className='tool1keeperapp'>{projects.keeperapp.tool1}</li>
                    <li className='tool2keeperapp'>{projects.keeperapp.tool2}</li>
                    <li className='tool3keeperapp'>{projects.keeperapp.tool3}</li>
                </ul>
                <ul className='linkskeeperapp'>
                    <li className='gitlinkkeeperapp'><a href={projects.keeperapp.github} target='_blank' rel='noreferrer'><GithubLogo/></a></li>
                    <li className='sitelinkkeeperapp'><a href={projects.keeperapp.site} target='_blank' rel='noreferrer'><GotositeLogo/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default KeeperApp