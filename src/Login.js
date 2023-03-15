import { Button } from '@mui/material';
import { auth, provider } from "./features/firebase";
import React from 'react';
import "./Login.css";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


function Login() {
    const signIn = () => {
        //do clever google login ....
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch((error) => alert(error.message));
    };
  return (
    <div className='login'> 
        <div className='login__logo'>
            <img 
            src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo-500x281.png" alt="" />
        </div>


    <Button onClick={signIn}>Sign In </Button>
    </div>


  )
}

export default Login
