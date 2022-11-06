import Layout from '../../components/Layout'
import { getDocumentPaths, getDocumentBySlug } from 'outstatic/server'

import Project from '../../components/Project'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
const components = { Project };
export default function Home({post}) {
  return (
    <div className=" h-screen">
      <Layout back="/blog"/>
      <div className="">
        <div className="text-gray-300 text-center font-bold font-roboto">
          <span className="text-2xl text-sky-400">{post.title}</span>
        </div>
        <div className="lg:ml-60 lg:mr-60 md:ml-20 md:mr-20 ml-10 mr-10  text-gray-300 pb-20">
          <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm,remarkGemoji]}/>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
    const post = getDocumentBySlug('posts', params.slug, [
      'title',
      'publishedAt',
      'slug',
      'author',
      'content',
      'coverImage'
    ])
    return {
      props: {
        post: {
          ...post
        }
      }
    }
  }

  export async function getStaticPaths() {
    return {
      paths: getDocumentPaths('posts'),
      fallback: false
    }
  }