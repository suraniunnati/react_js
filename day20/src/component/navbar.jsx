import { Link } from "react-router-dom"
function Navbar(){
    return<>
        <nav>
        <Link to="/signup">signup</Link><br/>
        <Link to="/login">login</Link><br/>
        <Link to="/">home</Link><br/>
        <Link to="/product">product</Link>
        <Link to="/singleproduct">singleproduct</Link>
        </nav>
    </>
}

export default Navbar