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
    username: Yup.string().required("This field cannot be left blank").min(8, "Account with at least 8 characters").max(100),
    password: Yup.string().required("This field cannot be left blank").min(8, "Password with at least 8 characters").max(30),
    passwordConfirmation : Yup.string().required("This field cannot be left blank").oneOf([Yup.ref('password')], 'Password must match')
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
        console.log(res);
        if(res.data.status === 200) {
          toast.success(res.data.message, {
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
        if(err.response.status === 400) {
          setErrorMessage(err.response.data.message);
        }
      }
    }
  });
  return (
    <Container className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Fab sx={{ marginBottom: '5px' }} size="medium" color="secondary">
          <LockIcon />
        </Fab>
        <Typography sx={{ fontSize: '26px', marginBottom: '20px' }} variant='h2'>SignUp</Typography>
        <TextField
          sx={{ marginBottom: '10px' }}
          error={errorMessage || (formik.errors.username && formik.touched.username) ? true : false}
          label="Username*"
          name='username'
          onClick={() => { setErrorMessage(false);} }
          onBlur={formik.handleBlur}
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
          fullWidth
        />
        { formik.errors.username && formik.touched.username ? <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '20px', color: 'var(--color-error)' }}>{formik.errors.username}</Typography> : ''}
        { errorMessage && <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '20px', color: 'var(--color-error)' }}>{errorMessage}</Typography>}
        <TextField
          sx={{ marginBottom: '10px' }}
          error={formik.errors.password && formik.touched.password ? true : false}
          name='password'
          label="Password*"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth/>
        { formik.errors.password && formik.touched.password ? <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '20px', color: 'var(--color-error)' }}>{formik.errors.password}</Typography> : ''}
        <TextField
          sx={{ marginBottom: '10px' }}
          error={formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? true : false}
          name='passwordConfirmation'
          label="Password Confirmation*"
          type="password"
          value={formik.values.passwordConfirmation}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          fullWidth/>
        { formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? <Typography variant='h4' align='left' sx={{ fontSize: '13px', marginBottom: '20px', color: 'var(--color-error)' }}>{formik.errors.passwordConfirmation}</Typography> : ''}
        
        {
          formik.values.username.trim()  && formik.values.password.trim() && formik.values.passwordConfirmation.trim()
            ? <Button className={classes.buttonSubmit} type='submit'variant="contained">Sign Up</Button>
            : <Button className={classes.buttonSubmit} variant="contained" disabled>Sign Up</Button>
        }
        <Box sx={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between' }}>
          <Link sx={{ fontSize: '14px' }} href="/">Home</Link>
          <Link sx={{ fontSize: '14px' }} href='/account/login'>Already have an account? Log in</Link>
        </Box>
        <Typography variant='h4' align='center' sx={{ fontSize: '15px', marginTop: '30px', color: '#000000' }}>Copyright © Your Website 2022.</Typography>
      </form>
    </Container>
  );
};