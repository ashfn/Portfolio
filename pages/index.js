  import Layout from '../components/Layout'

  import Link from 'next/link'

  export default function Home() {
    return (
      <div className="h-screen">
        <Layout back="none"/>
        <div className="pt-10 text-center">
          <div className="text-sky-400 font-bold font-roboto">
            <p/>
            Hello. I'm Authorises. <p/>
            I enjoy developing a variety of things from<p/>
            websites to minecraft plugins and games. <p/>
            <div className="mt-6">
              <Link href="/projects">
                <span className="inline border-2 border-sky-500 hover:text-sky-400/75 rounded-md pt-1 pb-1 pl-4 pr-4 cursor-pointer">Projects</span>
              </Link>
              <span className="mr-10"></span>
              <Link href="/blog">
                <span className="inline border-2 border-sky-500 hover:text-sky-400/75 rounded-md pt-1 pb-1 pl-4 pr-4 cursor-pointer">Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /** 
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
          props: 
          },
        }
  }*/