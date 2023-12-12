import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './index.css'
const Navbar = () => {
    return ( 
            <div className="navbar">
                <header>
                    <Link to="/">React Blog App</Link>
                </header>
                <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/create'>Create New Blog</Link>
                  <Link to=''>Technology Blogs</Link>
                </nav>

               
            </div> 
            );
}
 
export default Navbar;