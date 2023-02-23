import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { TextField, Container, Typography, Link, Fab, Button, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStyles } from './Login.style';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { loginThunk } from './redux/Action';
import { useNavigate } from 'react-router';

export const Login = () => {

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.LoginReducer.isLoadding);
  const [errorLogin, setErrorLogin] = useState<null | string>();
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
      const res = await dispatch(loginThunk(values));
      if(res.payload.status === 400) {
        setErrorLogin(res.payload.data.message);
      } else if(res.payload.status === 200) {
        navigate('/');
      }
    }
  });
  return (
    <Container className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Fab sx={{ marginBottom: '5px' }} size="medium" color="secondary">
          <LockIcon />
        </Fab>
        <Typography sx={{ fontSize: '26px', marginBottom: '20px' }} variant='h2'>Login</Typography>
        <TextField
          sx={{ marginBottom: '20px' }}
          error={errorLogin ? true : false}
          label="Username*"
          name='username'
          onClick={() => {setErrorLogin(null);}}
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
          fullWidth
        />
        <TextField
          sx={{ marginBottom: '10px' }}
          error={errorLogin ? true : false}
          name='password'
          label="Password*"
          type="password"
          onClick={() => {setErrorLogin(null);}}
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth/>
        { errorLogin && <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '10px', color: 'var(--color-error)' }}>{errorLogin}</Typography>}
        {
          isLoading ? <LoadingButton className={classes.buttonLoading} loading variant="contained" size="large"></LoadingButton> : 
            <>
              {
                formik.values.username.trim()  && formik.values.password.trim()
                  ? <Button className={classes.buttonSubmit} type='submit'variant="contained">SIGN IN</Button>
                  : <Button className={classes.buttonSubmit} variant="contained" disabled>SIGN IN</Button>
              }
            </>
        }
        <Box sx={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between' }}>
          <Link sx={{ fontSize: '14px' }} href="#">Forgot password</Link>
          <Link sx={{ fontSize: '14px' }} href='/account/signup'>Don`t have an account? Sign Up</Link>
        </Box>
        <Typography variant='h4' align='center' sx={{ fontSize: '15px', marginTop: '30px', color: '#000000' }}>Copyright © Your Website 2022.</Typography>
      </form>
    </Container>
  );
};