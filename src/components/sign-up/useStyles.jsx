import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  group: {
    position: 'relative',
    margin: '45px 0',
  },
  formInput: {
    background: 'none',
    backgroundColor: 'white',
    color: 'grey',
    fontSize: '18px',
    padding: '10px 10px 10px 5px',
    display: 'block',
    width: '100%',
    border: 'none',
    borderBottom: '1px solid grey',
    margin: '25px 0',
    '&:focus': {
      outline: 'none',
    },
    '&:focus + $formInputLabel': {
      top: '-14px',
      fontSize: '12px',
      color: 'black',
    },
  },
  formInputPassword: {
    letterSpacing: '0.3em',
  },
  formInputLabel: {
    color: 'grey',
    fontSize: '16px',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    transition: '300ms ease all',
  },
  shrink: {
    top: '-14px',
    fontSize: '12px',
    color: 'black',
  },
}));

export default useStyles;
