import "./styles.css";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Button } from "react";


function Header() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <header>
            <nav>
                <Link to="/">Inici</Link>
                <Link to="/game">ClassBits</Link>
                <Link to="/tools">Eines</Link>
                <button onClick={signInWithGoogle}>Entra con google</button>
            </nav>
        </header>
    )
}
export default Header;
