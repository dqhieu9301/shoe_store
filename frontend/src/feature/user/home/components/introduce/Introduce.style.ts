import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
  introduce: {
    backgroundColor: 'var(--color-gray)',
  },
  container: {
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  item: {
    width: '33%',
    textAlign: 'center',
    padding: '30px 0px'
  }
}));