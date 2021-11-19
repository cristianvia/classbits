import "./styles.css";
import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <nav>
            <Link to="/">Inici</Link>
            <Link to="/game">ClassBits</Link>
            <Link to="/groups">Grups</Link>
            <Link to="/tools">Eines</Link>
            </nav>
        </header>
    )
}
export default Header;
