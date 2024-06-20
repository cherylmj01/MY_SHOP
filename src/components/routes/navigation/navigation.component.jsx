import React, {Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import Box from '@mui/material/Box'; 
export default function Navigation() {
  return (
    // why are Fragments used ?
    // Outlets are used when that component should be on every page
    // and each page can be accessed through this page
    <Fragment>
      <Box sx={{
        height: '70px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '25px',
        '.logo-container': {
            height: '100%',
            width: '70px',
            padding: '25px',
        },
        '.links-container':{
            width: '50%',
            height: '100%',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '.nav-link': {
                padding:'10px 15px',
                cursor: 'pointer',
            }
        }
      }}>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
        </Link>
        <Box className='links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SIGN IN
            </Link>
        </Box>
        </Box>
      <Outlet />
      </Fragment>
  )
}
