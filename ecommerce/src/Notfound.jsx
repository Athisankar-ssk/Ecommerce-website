import{Link} from "react-router-dom"
function NotFound(){
    return(
        <>
        <h2>404 Error page not Found</h2>
         <a className="btn btn-primary" href="/">Home</a>

       <Link className="btn btn-danger" to="/">Home</Link>
        </>
    )
}
export default NotFound;