import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';
import { Button } from '@material-ui/core';
import Img from './signinwithgoogle.png';

function SignIn() {
  function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <Button style={{ fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle} >
          <img src={Img} />
        </Button>
    </div>
  )
}

export default SignIn;