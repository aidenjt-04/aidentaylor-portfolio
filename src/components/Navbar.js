import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ReactComponent as Logo } from '../AT-Logo.svg';

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <ul className="navbar-links">
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Experience">Experience + Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
} 

export default Navbar;