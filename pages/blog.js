import Layout from '../components/Layout'
import { getDocuments } from 'outstatic/server'

import Link from 'next/link'

export default function Home({allPosts}) {
  console.log(allPosts)
  return (
    <div className=" h-screen">
      <Layout back="/"/>
      <div className="text-center">
        <div className="text-sky-400 font-bold font-roboto">
            <span className="text-2xl">Blog posts</span>
        </div>

        {allPosts.length>0
        ?
          <div className="mt-8">
            <div>
              {allPosts.map((x)=>
                <div className="p-2 m-2 hover:bg-[#141e38] cursor-pointer rounded-lg">
                  <Link href={"/post/"+x.slug}>
                    <div>
                      <span className="text-sky-400 underline hover:text-sky-500">
                        {x.title}
                      </span>
                      <p/>
                      <span className="text-s text-emerald-400">
                        {x.description!=""?x.description:"No description specified."}
                      </span>
                    </div>
                  </Link>

                </div>
              )}
            </div>
          </div>
        : <div>
            Uh oh! Looks like I have no blog posts right now! come back later.
            </div>
        }

            
      </div>
    </div>
  )
}

export async function getStaticProps(context) {

    const allPosts = getDocuments('posts', [
        'title',
        'publishedAt',
        'slug',
        'coverImage',
        'description',
        'author'
      ])
    
      return {
        props: { allPosts }
      }
}