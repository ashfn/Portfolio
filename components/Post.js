import React from 'react'

const Post = ({post}) => {
  return (
    <div className="rounded-lg border-2 border-h/50 ">
        <div style={{ 
            backgroundImage: `url("${post.coverImage}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className={"bg-opacity-25 p-0 rounded-lg"}>
            <div className="h-full w-full break-words m-0">
                <div className="bg-i/50 p-4 rounded-t-lg">
                    <span>{post.title}</span>
                </div>
                <div className="bg-i/90 p-4 rounded-b-lg">
                    <div>{post.description}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post