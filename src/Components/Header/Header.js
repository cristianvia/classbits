import "./styles.css";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getAuth, signOut } from "firebase/auth";
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

    const logOutGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signOut(auth, provider).then(() => {
            console.log("Logged out")
            setUser(null);
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <header>
            <nav>
                <Link to="/">Inici</Link>
                {user ? <Link to="/game">ClassBits</Link> : ""}
                {user ? <Link to="/tools">Eines</Link> : ""}
                <span class="welcome">{user ? "Bienvenido " + user.displayName : ""}</span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {user ? <span class="loginButton" onClick={logOutGoogle}>Desconectar</span> : <span class="loginButton" onClick={signInWithGoogle}>Entra con google </span>}
            </nav>
        </header>
    )
}
export default Header;
