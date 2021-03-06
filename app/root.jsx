import { Outlet, LiveReload, Link, Links, Meta} from "@remix-run/react"
import globalStylesUrl from "./styles/global.css"

export const links =() => [{rel:'stylesheet', href:globalStylesUrl}]

export const meta =()=>{
  const description = "A cool blog build with Remix"
  const keywords = "remix, react, javascript"
  return{
    description,
    keywords,
  }
}


export default function App(){
  return (
    <document>
    <Layout>
     <Outlet />
    </Layout>
      
    </document>
  )
}

function Document ({children, title}){
  return(
    <html lang="en">
    <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content='width=device-width, initial-scale=1' />
    <Meta />
    <Links />
    <title>
        {title ? title: 'Remix Blog'}
      </title>
      </head>
    <body>
      {children}
      {process.env.NODE_ENV === "development" ? <LiveReload /> : null }
    </body>
    </html>
    )
}

function Layout({children}){
  return(
    <>
      <nav className="navbar">
        <Link to='/' className="logo">
          Remix
        </Link>
        <ul className="nav">
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}


export function ErrorBoundary({error}){
  console.log(error);
  return(
    <Document>
      <Layout>
      <h1>Error</h1>
      <pre>{error.message}</pre>
      </Layout>
    </Document>
  )
}