import { Box } from '@mui/material';
import React from 'react';
import logo from '../../assets/images/logo.png';
import { useStyles } from './Header.style';

export const Header = (): JSX.Element => {

  const listMenu = [
    { name: 'GIỚI THIỆU', path: '/gioithieu' },
    { name: 'NIKE', path: '/nike' },
    { name: 'YEEZY',path: '/yeezy' },
    { name: 'ADIDAS',path: '/adidas' },
    { name: 'JORNAS',path: '/jornas' },
  ];
  const classes = useStyles();
  return(
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
          <a className={classes.path}  href='/login'>Đăng nhập</a>
          <a className={classes.path} href='/signup'>Đăng kí</a>
        </Box>
      </Box>
    </header>
  );
};