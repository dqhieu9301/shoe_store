import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '95%',
    margin: '0 auto',
    padding: '30px 0px'
  },
  title: {
    fontWeight: '700!important',
    fontSize: '20px!important',
    marginBottom: '30px!important'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  }
}));