import { Link } from "react-router-dom";
import logo from './images/brilworx-logo-min.svg';
import icon from './images/bars-solid.svg';

const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <Link to="/">
                <img className="logo"src={logo} alt="" />
                </Link>
                <div className="nav-icon">
                    <img src={icon} alt="" />
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;