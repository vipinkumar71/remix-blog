import { Link, redirect} from "@remix-run/node"

export const action=({request}) =>{
  const form=await request.formData()
  const title= form.get("title")
  const body= form.get("body")

  const fields={title,body}

    // @todo -submit to database
  return redirect("/posts")
}

function NewPost() {
  return (
    <>
    <div className="page-header">
    <h1>This is the HEADING NewPost</h1>
    <Link to="/posts" className="btn btn-reverse">
      Back
    </Link>
    </div>
    <div className="page-content">
      <form method="POST">
      <div className="form-control">
        <label htmlfor="title">Title</label>
        <input type="text" name="title" id="body"/>
      </div>
      <button type="submit" className="btn btn-block">
        Add Post
      </button>
      <div className="form-control">
        <label htmlFor="body">Post Body</label>
      </div>
      </form>
    </div>
    
    </>
  )
}

export default NewPost