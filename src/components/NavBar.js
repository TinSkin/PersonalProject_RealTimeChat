import React, { useState } from "react";
import GoogleSignin from "../img"

const NavBar = () => {
    const [user, setUser] = useState(false);

    const googleSignIn = () => {
        setUser(true);
    }

    const googleSignOut = () => {
        setUser(false);
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