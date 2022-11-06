import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { getDocuments } from 'outstatic/server'

import Link from 'next/link'
import Project from '../components/Project'
import { useState } from 'react'; 

import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { IconContext } from 'react-icons'

export default function Home({projects}) {

    const [current, setCurrent] = useState(0)
    const [effect, setEffect] = useState(false);


    function forward(){
      setTimeout(()=>{
        setCurrent(current+1)
        setEffect(true)
      },60)

    }

    function backward(){
      setTimeout(()=>{
        setCurrent(current-1)
        setEffect(true)
      },60)
    }

  return (
    <div className=" h-screen">
      <Layout back="/"/>
      <div className="text-center">
        <div className="text-sky-400 font-bold font-roboto">
            <span className="text-2xl">Projects</span>
        </div>
        {projects.length>0
        ?
          <div className="">
            <div>
                <Project project={projects[current]} key={Math.random()}/>
                <div className="flex items-center justify-center mt-4">
                  {current>0
                      &&
                      <div className="text-sky-400 inline rounded-lg hover:text-sky-500">
                        <button onClick={backward}>
                          <MdOutlineKeyboardArrowLeft size={32} style={{ verticalAlign: 'middle' }}/>
                        </button>
                      </div>
                  }
                  <span className="mr-10 ml-10 text-emerald-400 text-xl">#{current+1}</span>
                  {current+1<projects.length
                      &&
                      <button onClick={forward} className="text-sky-400 rounded-lg hover:text-sky-500"><MdOutlineKeyboardArrowRight size={32}  style={{ verticalAlign: 'middle' }}/></button>
                  }
                </div>
            </div>
          </div>
        : <div>
            Uh oh! Looks like I have no projects to show right now! come back later.
            </div>
        }

            
      </div>
    </div>
  )
}

export async function getStaticProps(context) {

    var p = await fetch('https://raw.githubusercontent.com/Authorises/data/main/projects');
    const projects = await p.json()
    const allPosts = getDocuments('projects', [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'author'
    ])
      return {
        //revalidate: 300,
        props: {
            projects
        },
      }
}