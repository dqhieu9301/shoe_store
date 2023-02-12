import Box from '@mui/material/Box';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from '../components/header/Header';
import { Home } from '../feature/home/Home';

export const MainLayout = (): JSX.Element => {
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
    </Box>
  );
};