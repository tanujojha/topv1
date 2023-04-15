import React from 'react';
import "./skills.css";
import {skills} from "../../content/content";
import Fade from 'react-reveal/Fade';

function SkillImg ({skill}){
    return (
        <div className='skillimgmaindiv'>
            <span className='tooltiptext'>{skill.title}</span>
            <a className='skillimagelink' rel='noreferrer' href={skill.link} target='_blank'>
                <img className='skillimage' src={skill.img} alt={skill.title}/>
            </a>
        </div>
    )
}


function Skills() {

  return (
    <Fade bottom delay={100}>
        <div className='base' id='skills'>
            <div className='skills'>
                <h2 className='titleskills'>Skills</h2>
                <div className='innerskills'>
                    {
                        skills.map((skill, index)=> <SkillImg key={index} skill={skill}/>)
                    }
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Skills