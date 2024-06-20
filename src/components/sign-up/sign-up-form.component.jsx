import React, { useState } from 'react';
import { Paper, Box, TextField, Button, Typography } from '@mui/material';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../util/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encountered an error', err);
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
      >I want to create a new account</Typography>

      <form onSubmit={handleSubmit}>
          <TextField
            label="Display Name"
            variant='outlined'
            type="text"
            fullWidth
            required            
            onChange={handleChange}
            name="displayName"
            value={displayName}
            sx={{
              marginBottom: '20px'
            }} 
          />

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

          <TextField
            label="Confirm Password"
            variant='outlined'
            type="password"
            fullWidth
            required            
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            sx={{
              marginBottom: '20px'
            }} 
          />  
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Paper>
  );
}
