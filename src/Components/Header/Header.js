import "./styles.css";
import { classData } from "../../data/classData";
import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <nav>
            <Link to="/">Inici</Link>
            <Link to="/game">Clase: {classData[0].classname}</Link>
            <Link to="/tools">{classData[0].tools}</Link>
            </nav>
        </header>
    )
}
export default Header;
