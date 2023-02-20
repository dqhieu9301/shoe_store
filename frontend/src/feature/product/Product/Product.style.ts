import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
  container: {
    height: '400px',
    position: 'relative',
    border: '1px solid var(--color-border)',
    transition: 'all 0.5s ease',
    '&:hover': {
      cursor: 'pointer',
      border: '1px solid var(--color-boderDark)',
    }
  },
  content : {
    width: '90%',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    height: '258px',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '15px!important',
    fontWeight: '700!important',
    color: 'var(--color-blackLight)',
  },
  cost: {
    fontSize: '15px!important',
    fontWeight: '700!important',
    color: 'var(--color-blackLight)'
  },
  newCost: {
    fontSize: '15px!important',
    fontWeight: '700!important',
    color: 'var(--color-blackLight)',
    textDecoration: 'line-through',
    opacity: '0.6'
  },
  status: {
    width: '65px',
    padding: '6px 0px',
    backgroundColor: 'var(--color-yellow)',
    color: 'var(--color-white)',
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '13px',
    textAlign: 'center'
  },
  discount: {
    width: '65px',
    padding: '6px 0px',
    backgroundColor: 'var(--color-redLight)',
    color: 'var(--color-white)',
    position: 'absolute',
    top: '33px',
    left: '0',
    fontSize: '13px',
    textAlign: 'center'
  }
}));