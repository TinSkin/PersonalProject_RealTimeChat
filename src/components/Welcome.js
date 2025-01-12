import React from "react";
import { auth, provider } from '../firebase/firebase'
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
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