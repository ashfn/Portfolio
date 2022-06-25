import React from 'react'

import {GoGitCommit} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import {TbGitFork} from 'react-icons/tb'

const Project = ({project}) => {
    // <div class="badge badge-primary badge-outline">{tag}</div>
  console.log(project.tags)
  var x = ["1", "2", "3"]
  var tags = x.map((x) =>{
      <p>{x}</p>
  })
  tags = (
      <div>
          Hello
      </div>
  )
  return (
    <div className="lg:basis-3/6 text-a bg-h/25 shadow-lg rounded-box p-4">
        <div className="">
            <span className="text-primary text-xl font-bold">{project.name}</span>
            <span className="float-right mr-2 lg:mr-4"><AiOutlineStar className="inline"/>204</span>
            <span className="float-right mr-2 lg:mr-4"><TbGitFork className="inline"/>97</span>
            <span className="float-right mr-2 lg:mr-4"><GoGitCommit className="inline"/>3,304</span>
        </div>
        <div className="flex space-x-2 mt-2">
        {project.tags.map(function(name, index){
            return <div class="badge badge-accent badge-outline">{name}</div>
        })}
        </div>
        <div className="mt-2 text-secondary">
            <p>
                {project.description}
            </p>
        </div>

    </div>
  )
}

export default Project