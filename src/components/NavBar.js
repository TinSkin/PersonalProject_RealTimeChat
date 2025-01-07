import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png"

const NavBar = () => {
    // const [user, setUser] = useState(false);
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        // setUser(true);
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const googleSignOut = () => {
        // setUser(false);
        auth.googleSignOut();
    }

    return (
        <nav className="nav-bar">
            <h1>React Chat</h1>
            {user ? (
                <button onClick={googleSignOut} className="sign-out" type="button">Sign Out</button>
            ) : (
                <button onClick={googleSignIn} className="sign-out" type="button"><img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign in with google"
                    type="button"
                /></button>
            )}
        </nav>
    )
}

export default NavBar;