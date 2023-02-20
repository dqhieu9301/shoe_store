import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './feature/login/Login';
import { SignUp } from './feature/signup/SignUp';
import { MainLayout } from './Layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/account/login' element={ <Login/> }/>
          <Route path='/account/signup' element={ <SignUp/> }/>
          <Route path='/*' element={ <MainLayout/> }/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
