import React from 'react';
import "./projects.css";
import Tindog from '../../components/projects/tindog/tindog';
import Artsocials from '../../components/projects/artsocials/artsocials';

function Projects() {
  return (
    <div className='base'>
        <div className='projects'>
            <h2 className='titleprojects'>Projects</h2>
            <Tindog/>
            <Artsocials/>
        </div>

    </div>
  )
}

export default Projects