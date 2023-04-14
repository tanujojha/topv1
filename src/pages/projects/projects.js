import React from 'react';
import "./projects.css";
import Tindog from '../../components/projects/tindog/tindog';
import Artsocials from '../../components/projects/artsocials/artsocials';
import Drumkit from '../../components/projects/drumkit/drumkit';
import Simongame from '../../components/projects/simongame/simongame';
import KeeperApp from '../../components/projects/keeperApp/keeperApp';
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div className='base' id='projects'>
      <div className='projects'>
        <h2 className='titleprojects'>Projects</h2>
        <div style={{width: "100%"}}><Fade bottom delay={100}><Tindog/></Fade></div>
        <div style={{width: "100%"}}><Fade bottom delay={100}><Artsocials/></Fade></div>
        <div style={{width: "100%"}}><Fade bottom delay={100}><Drumkit/></Fade></div>
        <div style={{width: "100%"}}><Fade bottom delay={100}><Simongame/></Fade></div>
        <div style={{width: "100%"}}><Fade bottom delay={100}><KeeperApp/></Fade></div>
        {/* <Tindog/>
        <Artsocials/>
        <Drumkit/>
        <Simongame/>
        <KeeperApp/> */}
      </div>
    </div>
  )
}

export default Projects