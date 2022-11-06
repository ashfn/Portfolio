import React from 'react'

import {GoGitCommit} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import {TbGitFork} from 'react-icons/tb'
import {FaGithub} from 'react-icons/fa'
import {GiPadlock} from 'react-icons/gi'


const Project = ({project}) => {

  return (
    <div className="flex mt-40 text-sky-400">
        <div className="m-auto p-10 rounded-lg animate-fade">
            <div className="">
                <span className="text-primary text-xl font-bold">{project.name}</span>
            </div>
            <div className="flex space-x-2 mt-2">
            {project.tags.map(function(name, index){
                return <div className="text-emerald-400 text-xs" key={Math.random()}>{name}</div>
            })}
            </div>
            <div className="mt-2 text-secondary">
                <p>
                    {project.description}
                </p>
            </div>
            <div className="mt-2 flex align-middle space-x-4 ">
                {project.github_link!="" ? <a target="_blank" className="hover:text-sky-500 no-underline" href={"https://github.com/"+project.github_link}><span className="cursor-pointer text-secondary hover:text-primary" ><FaGithub size={32}/></span></a> : <div className="tooltip tooltip-primary" data-tip="🔒 This project is closed source and the code cannot be viewed."><span className="text-secondary hover:text-primary" ><GiPadlock size={32}/></span></div>}
                {project.demo_link!="" ? <a target="_blank" className="hover:text-sky-500 pl-4 pr-4 pt-1 pb-1 rounded-xl border-2 border-sky-500 no-underline" href={project.demo_link}>demo</a> : ""}
                {project.spigot_link!="" ? <a target="_blank" className="hover:text-sky-500 pl-4 pr-4 pt-1 pb-1 rounded-xl border-2 border-sky-500 no-underline" href={project.spigot_link}>spigot</a> : ""}
                {project.live_link!="" ? <a target="_blank" className="hover:text-sky-500 pl-4 pr-4 pt-1 pb-1 rounded-xl border-2 border-sky-500 no-underline" href={project.live_link}>live</a> : ""}
            </div>
        </div>

    </div>
  )
}

export default Project