import { Link } from "react-router-dom";
import logo from './images/brilworx-logo-min.svg';

const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <Link>
                <img src={logo} alt="" />
                </Link>
                <Link>
                <div className="icon"></div>
                </Link>
            </div>
        </nav>
     );
}
 
export default NavBar;