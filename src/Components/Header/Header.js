import "./styles.css";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useState, useEffect } from "react";


function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          })
    }, [])

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
                <span>{user ? "Bienvenido "+user.displayName : ""}</span>
            </nav>
        </header>
    )
}
export default Header;
