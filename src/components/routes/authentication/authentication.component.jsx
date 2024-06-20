import React from 'react';
import SignUpForm from '../../sign-up/sign-up-form.component';
import SignInForm from '../../sign-in/sign-in-form.component';
import { Paper, Box, Typography } from '@mui/material';
import backgroundImage from '../../../assets/light-pink.webp';

export default function Authentication() {

  return (
    <Box
    sx = {{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
    }}>

      <Paper elevation={3} 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-around',
        padding: '30px', 
        width: '900px',
        margin: '30px auto', 
        borderRadius: '15px',
        background: 'rgba(255,255,255, 0.9)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
      }}>
        <SignInForm />
        <SignUpForm />
      </Paper>
    </Box>
  )
}
