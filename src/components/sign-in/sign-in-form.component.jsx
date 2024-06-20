import React, { useState } from 'react';
import { Paper, Box, TextField, Button, Typography } from '@mui/material';
import { signInWithGooglePopUp, signInAuthWithEmailAndPassword } from '../../util/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async ()  => {
    const { user  } = await signInWithGooglePopUp();
    console.log(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try{
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
    }
    catch(error){
    
      switch(error.code){
        case 'auth/wrong-password':
          alert('You have entered the wrong password.');
          break;
        case 'auth/user-not-found':
          alert('We could not identify this email.');
          break;
        default:
          console.log(error);
      }
    }
  }

  return (
    <Paper elevation={3} sx={{ padding: '30px', maxWidth: '400px', margin: '20px auto' }}>
      <Typography variant="h5" component="h1"
      sx={{
        textAlign: 'center',
        marginBottom: '20px',
      }}
      >Already have an account?</Typography>

      <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant='outlined'
            type="email"
            fullWidth
            required            
            onChange={handleChange}
            name="email"
            value={email}
            sx={{
              marginBottom: '20px'
            }} 
          />

          <TextField
            label="Password"
            variant='outlined'
            type="password"
            fullWidth
            required            
            onChange={handleChange}
            name="password"
            value={password}
            sx={{
              marginBottom: '20px'
            }} 
          />  
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
        }}>
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} variant="contained" color="primary" fullWidth>
            Google Sign In
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
