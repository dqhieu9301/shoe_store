import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './feature/login/Login';
import { MainLayout } from './Layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/account/login' element={ <Login/> }/>
          <Route path='/*' element={ <MainLayout/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
