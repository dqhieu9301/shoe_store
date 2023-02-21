import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '99',
    backgroundColor: 'var(--color-white)',
    borderBottom: '1px solid var(--color-boderLight)'
  },
  container: {
    height: '60px',
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: '100%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  menu: {
    listStyle: 'none'
  },
  menuItem: {
    display: 'inline-block',
    padding: '0px 10px',
  },
  path: {
    color: 'var(--color-black)',
    fontWeight: '600',
    padding: '3px 7px',
    borderRadius: '20px',
    transition: 'all 0.5s ease',
    '&:hover': {
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-yellow)'
    }
  },
  leave: {
    color: 'var(--color-black)',
    fontWeight: '600',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  cartProduct: {
    position: 'fixed',
    zIndex: '999',
    right: '20px',
    bottom: '20px'
  },
  quantityProduct: {
    fontSize: '11px',
    position: 'absolute',
    zIndex: '1000',
    top: '-3px',
    right: '-6px',
    padding: '2px 5px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    fontWeight: '600'
  }
}));