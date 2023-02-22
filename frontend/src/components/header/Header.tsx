import { Avatar, Box } from '@mui/material';
import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { useStyles } from './Header.style';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getInforUserThunk } from '../../feature/login/redux/Action';
import { removeAccessToken, removeRefreshToken } from '../../utils/localStorage';
import { removeInforUser } from '../../feature/login/redux/Login.reducer';

export const Header = (): JSX.Element => {

  const listMenu = [
    { name: 'GIỚI THIỆU', path: '/gioithieu' },
    { name: 'NIKE', path: '/nike' },
    { name: 'YEEZY',path: '/yeezy' },
    { name: 'ADIDAS',path: '/adidas' },
    { name: 'JORNAS',path: '/jornas' },
  ];
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const inforUser = useAppSelector(state => state.LoginReducer.inforUser);
  useEffect(() => {
    dispatch(getInforUserThunk());
  }, []);

  const handleLogout = async () => {
    dispatch(removeInforUser());
    removeAccessToken();
    removeRefreshToken();
  };
  return(
    <>
      <header className={classes.header}>
        <Box className={classes.container}>
          <img className={classes.logo} src={logo}/>
          <ul className={classes.menu}>
            {
              listMenu.map((item) => {
                return(
                  <li key={item.name} className={classes.menuItem}><a className={classes.path} href={item.path}>{item.name}</a></li>
                );
              })
            }
          </ul>
          <Box>
            {
              inforUser ? 
                <>
                  <span>Xin chào, {inforUser.username} </span>
                  <span className={classes.leave} onClick={() => {handleLogout();}}>| Thoát</span>
                </>
                :
                <>
                  <a className={classes.path}  href='/account/login'>Đăng nhập</a>
                  <a className={classes.path} href='/account/signup'>Đăng kí</a>
                </>
            }
          </Box>
        </Box>
      </header>
      <Box className={classes.cartProduct}>
        <Avatar sx={{ bgcolor: 'var(--color-yellow)', '&:hover': { cursor: 'pointer'} }}>
          <LocalGroceryStoreOutlinedIcon />
        </Avatar>
        <span className={classes.quantityProduct}>0</span>
      </Box>
    </>
  );
};