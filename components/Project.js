import React from 'react'

import {GoGitCommit} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import {TbGitFork} from 'react-icons/tb'
import {FaGithub} from 'react-icons/fa'
import {GiPadlock} from 'react-icons/gi'

import Button from '@mui/material/Button'


const Project = ({project}) => {

  return (
    <div className="lg:basis-3/6 text-a bg-h/25 shadow-lg rounded-box p-4">
        <div className="">
            <span className="text-primary text-xl font-bold">{project.name}</span>
        </div>
        <div className="flex space-x-2 mt-2">
        {project.tags.map(function(name, index){
            return <div className="badge badge-accent badge-outline">{name}</div>
        })}
        </div>
        <div className="mt-2 text-secondary">
            <p>
                {project.description}
            </p>
        </div>
        <div className="mt-2 flex align-middle space-x-4">
    
            {project.github_link!="" ? <a target="_blank" className="cursor-default no-underline" href={"https://github.com/"+project.github_link}><span className="cursor-pointer text-secondary hover:text-primary" ><FaGithub size={32}/></span></a> : <div className="tooltip tooltip-primary" data-tip="🔒 This project is closed source and the code cannot be viewed."><span className="text-secondary hover:text-primary" ><GiPadlock size={32}/></span></div>}
            {project.demo_link!="" ? <a target="_blank" className="cursor-default no-underline" href={project.demo_link}><Button variant="outlined" color="info">Demo</Button></a> : ""}
            {project.spigot_link!="" ? <a target="_blank" className="cursor-default no-underline" href={project.spigot_link}><Button variant="outlined" color="info">Spigot</Button></a> : ""}
            {project.live_link!="" ? <a target="_blank" className="cursor-default no-underline" href={project.live_link}><Button variant="outlined" color="info">Live</Button></a> : ""}
        </div>


    </div>
  )
}

export default Project