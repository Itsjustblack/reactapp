import { Link } from "react-router-dom";
import logo from './images/brilworx-logo-min.svg';

const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
                <Link to="/">
                <div className="icon"></div>
                </Link>
            </div>
        </nav>
     );
}
 
export default NavBar;