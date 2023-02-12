import { Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { useStyles } from './Header.style';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import jwt_decode from "jwt-decode";
import { getAccessToken, removeAccessToken } from '../../utils/localStorage';
import { IPayloadDecodeToken } from '../../interface/interface';

export const Header = (): JSX.Element => {

  const [name, setName] = useState<undefined | string>(undefined);
  const listMenu = [
    { name: 'GIỚI THIỆU', path: '/gioithieu' },
    { name: 'NIKE', path: '/nike' },
    { name: 'YEEZY',path: '/yeezy' },
    { name: 'ADIDAS',path: '/adidas' },
    { name: 'JORNAS',path: '/jornas' },
  ];
  const classes = useStyles();

  useEffect(() => {
    const accessToken = getAccessToken();
    if(accessToken) {
      const decode = jwt_decode(accessToken) as IPayloadDecodeToken;
      setName(decode.username);
    }
  }, []);

  const handleLeaveAccount = () => {
    setName(undefined);
    removeAccessToken();
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
              name ? 
                <>
                  <span>Xin chào, {name} </span>
                  <span className={classes.leave} onClick={handleLeaveAccount}>| Thoát</span>
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