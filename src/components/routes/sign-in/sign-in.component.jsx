import React from 'react';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopUp, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../../util/firebase/firebase.utils';
import SignUpForm from '../../sign-up/sign-up-form.component';
import { Paper, Button, Typography, Box } from '@mui/material';


export default function SignIn() {

  // run this when the component mounts for the first time
  // useEffect ( async ()=> {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  // }, []);


  const logGoogleUser = async ()  => {
    const { user  } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <Paper elevation={3} sx={{ padding: '30px', maxWidth: '400px', margin: '20px auto' }}>
      <Typography 
      variant="h5" 
      component="h1"
      sx={{
        textAlign: 'center',
        marginBottom: '20px',
      }}
      >
        Already have an account ?
      </Typography>
      <Button onClick={logGoogleUser} variant='contained' color='primary' fullWidth sx={{marginBottom:'20px'}} >
        Sign in with Google
      </Button>
      <SignUpForm />
    </Paper>
  )
}
