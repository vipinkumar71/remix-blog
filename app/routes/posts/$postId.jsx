import {useParams} from "@remix-run/react"
function Post() {
    const params=useParams()
  return (
    <div><h1>Post {params.PostId}</h1></div>
  )
}

export default Post