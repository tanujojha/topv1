import React, { useEffect, useState } from 'react';
import "./experience.css";
import {experience} from "../../content/content";
import { useMediaQuery } from '@mui/material';
import Fade from 'react-reveal/Fade';


function Experience() {
    const isDesktop = useMediaQuery("(min-width: 750px)");

    const [expData, setExpData] = useState(experience[0]);
    const [expId, setExpId] = useState(expData.id);

    const handleExpSelect = (exp)=>{
        setExpData(exp);
        setExpId(exp.id)
    };

    // const x = {"borderLeft": "1.5px solid var(--colorGreen)"}
    let x = "1.5px solid var(--colorGreen)"
       
  return (
    <Fade bottom delay={100}>
        <div className='base' id='exp'>
            <div className='exp'>
                <h2 className='titleexp'>Professional Background</h2>
                <div className='outercontexpdiv'>
                    <div className='innercontexpdiv'>
                        <div className='leftPaneexp'>
                            {
                                experience.map((exp)=> <button style={exp.id === expId ? {"border-left":x} : {}} onClick={()=> handleExpSelect(exp)} size='small' id='compnamebtn' variant="text"><span className='btnspan'>{exp.name}</span></button>)
                            }
                        </div>
                        <div className='rightcontdivexp'>
                            <div className='rightcontdivinner'>
                                <h4 className='desig'>{expData.designation}
                                    <span className='compglow'> @ <a target='_blank' rel='noreferrer' className='' href={`https://mnbsoft.com`}>{expData.name}</a></span>
                                </h4>
                                <p className='duration'>{expData.duration}</p>
                                <div className='listDiv'>
                                    <ul className=''>
                                        {
                                            expData.content.map((point)=> <li className='listitem'>{point}</li>)
                                        }
                                            
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Experience