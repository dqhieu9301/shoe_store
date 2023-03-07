import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getProductById } from '../product/redux/Action';

export const DetailProduct = (): JSX.Element => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.ProductReducer.product);
  console.log(product);
  useEffect(() => {
    dispatch(getProductById(productId as string));
  }, []);
  return(
    <Box></Box>
  );
};