import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { TextField, Container, Typography, Link, Fab, Button, Box } from '@mui/material';
import { useStyles } from './LoginAdmin.style';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../../api/axios';

export const LoginAdmin = (): JSX.Element => {
  const classes = useStyles();
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  
  const validateForm = Yup.object({
    username: Yup.string().required().max(100),
    password: Yup.string().required().max(30)
  });
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validateForm,
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.post('api/auth/admin/login', { username: values.username, password: values.password });
        if(res.data.success) {
          navigate('/admin/home');
        }
      } catch (err) {
        setErrorLogin(true);
      }
    }
  });
  return (
    <Container className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Fab sx={{ marginBottom: '5px' }} size="medium" color="secondary">
          <LockIcon />
        </Fab>
        <Typography sx={{ fontSize: '26px', marginBottom: '20px' }} variant='h2'>ADMIN</Typography>
        <TextField
          sx={{ marginBottom: '20px' }}
          error={errorLogin}
          label="Tài khoản*"
          name='username'
          onClick={() => {setErrorLogin(false);}}
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
          fullWidth
        />
        <TextField
          sx={{ marginBottom: '10px' }}
          error={errorLogin}
          name='password'
          label="Mật khẩu*"
          type="password"
          onClick={() => {setErrorLogin(false);}}
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth/>
        { errorLogin && <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '10px', color: 'var(--color-error)' }}>Sai tài khoản hoặc mật khẩu</Typography>}
        {
          formik.values.username.trim()  && formik.values.password.trim()
            ? <Button className={classes.buttonSubmit} type='submit'variant="contained">Đăng nhập</Button>
            : <Button className={classes.buttonSubmit} variant="contained" disabled>Đăng nhập</Button>
        }
        <Box sx={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between' }}>
          <Link sx={{ fontSize: '14px' }} href="#">Quên mật khẩu ?</Link>
        </Box>
        <Typography variant='h4' align='center' sx={{ fontSize: '15px', marginTop: '30px', color: '#000000' }}>Copyright © Your Website 2022.</Typography>
      </form>
    </Container>
  );
};