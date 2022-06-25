import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import {FiGitCommit} from 'react-icons/fi'

import Project from '../components/Project'

export default function Home() {
  return (
    <div>
      <Layout/>
      <div className="flex flex-grid mt-10">
        <span className="basis-1/6"></span>
        <div className="basis-4/6 text-b/75 font-bold font-roboto">
          <div className="mb-6 text-4xl">
          Hey, <span className="text-b">Authorises</span> here.
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
            <div className="lg:basis-3/6">
              
            </div>
          </div>
          <div className="mb-6 mt-6 text-4xl">
          Some <span className="text-b">Projects</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            <Project project={
              {
                "name":"Peernet",
                "description":"Allows you to communicate with your friends in real time without a server ( Peer to peer ).",
                "tags":["javascript", "nextjs", "P2P"],
                "github_link":"https://github.com/Authorises/Authorises",
                "demo_link":"https://google.com",
                "spigot_link":"https://github.com",
                "live_link":"https://netflix.com",
                "stars":2500,
                "commits":2383,
                "forks":78
              }}/>
            <Project project={
              {
                "name":"Peernet",
                "description":"Allows you to communicate with your friends in real time without a server ( Peer to peer ).",
                "tags":["javascript", "nextjs", "P2P"],
                "github_link":"",
                "demo_link":"https://google.com",
                "spigot_link":"",
                "live_link":"https://netflix.com",
                "stars":2500,
                "commits":2383,
                "forks":78
              }}/>
            <Project project={
              {
                "name":"Peernet",
                "description":"Allows you to communicate with your friends in real time without a server ( Peer to peer ).",
                "tags":["javascript", "nextjs", "P2P"],
                "github_link":"https://github.com/Authorises/Authorises",
                "demo_link":"https://google.com",
                "spigot_link":"https://github.com",
                "live_link":"",
                "stars":2500,
                "commits":2383,
                "forks":78
              }}/>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}
