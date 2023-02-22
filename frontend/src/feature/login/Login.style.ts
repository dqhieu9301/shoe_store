import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
  container: {
    width: '400px', 
    marginTop: '100px', 
    textAlign: 'center'
  },
  form: {
    width: '400px',
    margin: '0 auto'
  },
  buttonSubmit: {
    width: '100%', 
    marginBottom: '5px', 
    marginTop: '8px'
  },
  buttonLoading: {
    width: '100%', 
    height: '40px'
  }
}));