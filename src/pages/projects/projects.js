import React from 'react';
import "./projects.css";
import Tindog from '../../components/projects/tindog/tindog';
import Artsocials from '../../components/projects/artsocials/artsocials';
import Drumkit from '../../components/projects/drumkit/drumkit';
import Simongame from '../../components/projects/simongame/simongame';
import KeeperApp from '../../components/projects/keeperApp/keeperApp';

function Projects() {
  return (
    <div className='base'>
        <div className='projects'>
            <h2 className='titleprojects'>Projects</h2>
            <Tindog/>
            <Artsocials/>
            <Drumkit/>
            <Simongame/>
            <KeeperApp/>
        </div>

    </div>
  )
}

export default Projects