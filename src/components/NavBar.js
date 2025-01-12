import React from "react";
import { auth, provider } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png"

const NavBar = () => {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        // setUser(true);
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    }

    const googleSignOut = () => {
        // setUser(false);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <nav className="nav-bar">
            <h1>React Chat</h1>
            {user ? (
                <button onClick={googleSignOut} className="sign-out" type="button">Sign Out</button>
            ) : (
                <button onClick={googleSignIn} className="sign-in" type="button"><img
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