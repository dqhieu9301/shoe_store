/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { TextField, Container, Typography, Link, Fab, Button, Box } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useStyles } from './SignUp.style';
import { axiosInstance } from '../../api/axios';
import { toast } from 'react-toastify';

export const SignUp = () => {

  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState<string | boolean>(false);
  const navigate = useNavigate();

  const validateForm = Yup.object({
    username: Yup.string().required().max(100),
    password: Yup.string().required().max(30),
    passwordConfirmation : Yup.string().oneOf([Yup.ref('password')], 'Mật khẩu phải trùng khớp')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: validateForm,
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.post('api/auth/signup', { username: values.username, password: values.password });
        if(res.data.success) {
          toast.success('Tạo tài khoản thành công!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate('/account/login');
          }, 3000);
        }
      } catch (err: any) {
        setErrorMessage(err.response.data.message);
      }
    }
  });
  return (
    <Container className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Fab sx={{ marginBottom: '5px' }} size="medium" color="secondary">
          <LockIcon />
        </Fab>
        <Typography sx={{ fontSize: '26px', marginBottom: '20px' }} variant='h2'>Đăng ký</Typography>
        <TextField
          sx={{ marginBottom: '20px' }}
          error={errorMessage ? true : false}
          label="Nhập tài khoản*"
          name='username'
          onClick={() => { setErrorMessage(false);} }
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
          fullWidth
        />
        { errorMessage && <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '20px', color: 'var(--color-error)' }}>Tài khoản đã tồn tại</Typography>}
        <TextField
          sx={{ marginBottom: '10px' }}
          name='password'
          label="Nhập mật khẩu*"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth/>
        <TextField
          sx={{ marginBottom: '10px' }}
          error={formik.errors.passwordConfirmation ? true : false}
          name='passwordConfirmation'
          label="Nhập lại mật khẩu*"
          type="password"
          value={formik.values.passwordConfirmation}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          fullWidth/>
        { formik.errors.passwordConfirmation && <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '10px', color: 'var(--color-error)' }}>{formik.errors.passwordConfirmation}</Typography>}
        {
          formik.values.username.trim()  && formik.values.password.trim() && formik.values.passwordConfirmation.trim()
            ? <Button className={classes.buttonSubmit} type='submit'variant="contained">Đăng ký</Button>
            : <Button className={classes.buttonSubmit} variant="contained" disabled>Đăng ký</Button>
        }
        <Box sx={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between' }}>
          <Link sx={{ fontSize: '14px' }} href="/">Trang trủ</Link>
          <Link sx={{ fontSize: '14px' }} href='/account/login'>Đã có tài khoản ? Đăng nhập</Link>
        </Box>
        <Typography variant='h4' align='center' sx={{ fontSize: '15px', marginTop: '30px', color: '#000000' }}>Copyright © Your Website 2022.</Typography>
      </form>
    </Container>
  );
};