import React, { useEffect, useState } from 'react';
import "./experience.css";
import {experience, main} from "../../content/content";
import { Button, useMediaQuery } from '@mui/material';
import Fade from 'react-reveal/Fade';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';


function Experience() {
    const isDesktop = useMediaQuery("(min-width: 750px)");

    const [expData, setExpData] = useState(experience[0]);
    const [expId, setExpId] = useState(expData.id);

    const handleExpSelect = (exp)=>{
        setExpData(exp);
        setExpId(exp.id)
    };

    // border-left: 1.5px solid var(--colorGreen);
    const x = {"border-left": "1.5px solid var(--colorGreen)"}
    const st = {
        background: "yellow"
    }

  return (
    <Fade bottom delay={100}>
        <div className='base' id='exp'>
            <div className='exp'>
                <h2 className='titleexp'>Professional Background</h2>
                <div className='outercontexpdiv'>
                    <div className='innercontexpdiv'>
                        <div className='leftPaneexp'>
                            {
                                experience.map((exp)=> <button style={exp.id === expId ? x : {}} onClick={()=> handleExpSelect(exp)} size='small' id='compnamebtn' variant="text">{exp.name}</button>)
                            }
                        </div>
                        <div className='rightcontdivexp'>
                            <div className='rightcontdivinner'>
                                <h4 className='desig'>{expData.designation}
                                    <span className='compglow'> @ <a className='compglow' href={`https://mnbsoft.com`}>{expData.name}</a></span>
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