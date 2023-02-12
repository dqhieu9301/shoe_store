import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './feature/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/account/login' element={ <Login/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
