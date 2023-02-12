import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    width: '100%'
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
    height: '100%'
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
  }
}));