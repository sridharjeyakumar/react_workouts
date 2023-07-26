import { Link } from "react-router-dom";
function Navbar(){
  return(
    <nav>
        <Link to='/'>LogIn</Link>
        <Link to='/SignIn'>SignIn</Link>
    </nav>
  )
}
export default Navbar