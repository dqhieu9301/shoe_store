import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '90%',
    margin: '0 auto',
    padding: '10px 0px 17px 0px',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between'
  },
  item: {
    width: '23%',
    display: 'flex',
    flexDirection: 'column'
  },
  select: {
    width: '100%',
    height: '45px',
    fontSize: '16px',
    paddingLeft: '5px'
  },
  label: {
    fontSize: '17px',
    marginBottom: '8px'
  },
  btnFilter: {
    backgroundColor: '#fcd603!important',
    height: '45px',
    color: '#000!important',
    fontWeight: '500!important',
    fontSize: '17px!important',
    '&:hover': {
      color: '#fff!important',
      backgroundColor: '#000!important'
    }
  }
}));