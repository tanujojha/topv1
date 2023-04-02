import React from 'react';
import "./skills.css";
import {skills} from "../../content/content";

function Skills() {

    // console.log(skills[0]);
  return (
    <div className='base'>
        <div className='skills'>
            <h2 className='titleskills'>Skills</h2>
            <div className='innercontskills'>
                {
                    skills.map((skill)=> <img src={skill.img} alt={skill.title}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Skills