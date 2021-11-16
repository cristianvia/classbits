import "./styles.css";
import { classData } from "../../data/classData";


function Header() {
    return (
        <header>
            <nav>
                <a href="">Clase: {classData[0].classname}</a> <a href="">{classData[0].tools}</a>
            </nav>
        </header>
    )
}
export default Header;
