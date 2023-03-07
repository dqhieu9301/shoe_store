import { Avatar, Box } from '@mui/material';
import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { useStyles } from './Header.style';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getInforUserThunk } from '../../feature/login/redux/Action';
import { removeAccessToken, removeRefreshToken } from '../../utils/localStorage';
import { removeInforUser } from '../../feature/login/redux/Login.reducer';
import { useNavigate } from 'react-router';

export const Header = (): JSX.Element => {

  const listMenu = [
    { name: 'GIỚI THIỆU', path: '/gioithieu' },
    { name: 'NIKE', path: '/product/nike/1' },
    { name: 'YEEZY',path: '/product/yeezy/1' },
    { name: 'ADIDAS',path: '/product/adidas/1' },
    { name: 'JORNAS',path: '/product/jornas/1' },
  ];
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const inforUser = useAppSelector(state => state.LoginReducer.inforUser);
  const navigate = useNavigate();
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
          <img onClick={() => { navigate('/');}} className={classes.logo} src={logo}/>
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