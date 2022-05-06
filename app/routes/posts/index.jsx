import {Link,useLoaderData} from "@remix-run/react"

export const loader =() => {
    const data ={
      posts:[
          {id:1,title:"Post 1", body:'This is a test Post'},
          {id:2,title:"Post 1", body:'This is a test Post'},
          {id:3,title:"Post 1", body:'This is a test Post'}
        ]
    }
    return data
}

function PostItems() {
  const  {posts}=useLoaderData()
  return (
    <div>
    <h1>PostItems</h1>
    <ul className="posts-list">
    {posts.map(post=>(
      <li key={post.id}>
        <Link to ={post.id}>
          <h3>{post.title}</h3>
        </Link>
      </li>
      ))}
    </ul>
    
    </div>
  )
}

export default PostItems