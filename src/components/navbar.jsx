import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
    return (

        <div className="navbar">


            <h3 className="ms-5">Stories</h3>

            <div className="links">
                <Link to={'/homePage'} href="">Home</Link>

                <Link to={'/aboutPage'} href="">About</Link>
                <Link to={'/posts'} href="">Posts</Link>

                <Link to={'/addpost'} href="">Add Post</Link>
                <Link to={'/'} href="">Logout</Link>

            </div>

        </div>
    );
}

export default Navbar;