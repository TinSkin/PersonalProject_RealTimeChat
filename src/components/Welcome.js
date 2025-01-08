import React from "react";
import { auth } from '../firebase/firebase'
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { signInWithPopup } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <div>
            <main className="welcome">
                <h2>Welcome to React Chat.</h2>
                <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
                <p>Sign in with Google to chat with with your fellow React Developers.</p>
                <button className="sign-in">
                    <img onClick={googleSignIn} src={GoogleSignIn} alt="sign in with google" type="button" />
                </button>
            </main>
        </div>
    )
}

export default Welcome;