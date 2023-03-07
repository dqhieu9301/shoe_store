import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignContent: 'center',
    fontWeight: '700!important',
    fontSize: '15px!important',
    paddingBottom: '30px'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  }
}));