import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

import {DiJava, DiPython, DiMongodb} from 'react-icons/di'
import { getDocuments } from 'outstatic/server'
import Project from '../components/Project'

export default function Home({projects, allPosts}) {
  
  console.log(allPosts)

  return (
    <div>
      <Layout/>
      <div className="flex flex-grid mt-10">
        <span className="basis-1/6"></span>
        <div className="basis-4/6 text-b/75 font-bold font-roboto">
          <div className="">
            <div className="mb-4 text-4xl">
            Hey, <span className="text-b">Authorises</span> here.
            </div>
            <br/><br/><br/><br/>
          </div>
          <div className="lg:flex lg:flex-row space-x-4">
            <div data-theme="term" className="lg:basis-3/6 mockup-code text-a bg-h/25 text-l lg:text-xl font-mono shadow-lg">
              <pre data-prefix="$" className="text-warning"><code>java -jar Authorises.jar</code></pre> 
              <pre data-prefix=">" className="text-neutral"><code>Age: 14</code></pre>
              <pre data-prefix=">" className="text-neutral"><code>Country: 🇬🇧</code></pre>
              <pre data-prefix=">" className="text-neutral"><code>💙 Food: 🍣</code></pre>
              <pre data-prefix=">" className="text-neutral"><code>💙 Lang: ☕</code></pre>
              <pre data-prefix="$" className="text-warning"><code><span className="animate-bounce">|</span></code></pre>
            </div>
            <div className="invisible lg:visible lg:basis-3/6 m-auto">
              <span className="text-accent font-bold font-roboto text-j/75 text-2xl"></span>
            </div>
          </div>
          <br/><br/><br/><br/>
          <div className="mb-6 mt-6 text-4xl">
          Some <span className="text-b">projects</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
                  {projects.map((project) => (
                     <Project project={project} key={Math.random()}/>
                  ))}
          </div>
          <br/><br/><br/><br/>
          <div className="mt-4 lg:flex lg:flex-row space-x-4">
            <span className="basis-1/2">
            <div className="mb-6 mt-6 text-4xl">
          My <span className="text-b">skills</span>
          </div>
            </span>
            <div data-theme="term" className="lg:basis-1/2 mockup-code text-a bg-h/25 text-l lg:text-xl font-mono shadow-lg">
              <pre data-prefix="$" className="text-warning"><code>curl api.authorises/skills</code></pre> 
              <pre data-prefix=">" className="text-neutral"><code><DiJava className="inline"/> Java</code></pre>
              <pre data-prefix=">" className="text-neutral"><code><DiPython className="inline"/> Python</code></pre>
              <pre data-prefix=">" className="text-neutral"><code><DiMongodb className="inline"/> Mongo</code></pre>
              <pre data-prefix="$" className="text-warning"><code><span className="animate-bounce">|</span></code></pre>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
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
          projects,
          allPosts
        },
      }
}