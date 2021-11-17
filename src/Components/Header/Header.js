import "./styles.css";
import { classData } from "../../data/classData";
import { Routes, Route, Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <nav>
            <Link to="/">Clase: {classData[0].classname}</Link>
            <Link to="/tools">{classData[0].tools}</Link>
            </nav>
        </header>
    )
}
export default Header;
