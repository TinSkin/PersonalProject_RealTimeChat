import React from "react";

const Welcome = () => {
    const googleSignIn = () => {

    }

    return (
        <div>
            <main className="welcome">
                <h2>Welcome to React Chat.</h2>
                <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
                <p>Sign in with Google to chat with with your fellow React Developers.</p>
                <button className="sign-in">
                    <img onClick={googleSignIn} src={googleSignIn} alt="sign in with google" type="button" />
                </button>
            </main>
        </div>
    )
}