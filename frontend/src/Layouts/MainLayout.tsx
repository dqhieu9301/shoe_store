import Box from '@mui/material/Box';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from '../components/header/Header';
import { AllProductByType } from '../feature/allProductByType/AllProductByType';
import { DetailProduct } from '../feature/detailProduct/DetailProduct';
import { Home } from '../feature/home/Home';

export const MainLayout = (): JSX.Element => {
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='/product/all/:page' element={<AllProductByType/>}/>
        <Route path='/product/nike/:page' element={<AllProductByType/>}/>
        <Route path='/product/adidas/:page' element={<AllProductByType/>}/>
        <Route path='/product/yeezy/:page' element={<AllProductByType/>}/>
        <Route path='/product/jornas/:page' element={<AllProductByType/>}/>
        <Route path='/product/jornas/:page' element={<AllProductByType/>}/>
        <Route path='/product/detail/:productId' element={<DetailProduct/>}/>
      </Routes>
    </Box>
  );
};