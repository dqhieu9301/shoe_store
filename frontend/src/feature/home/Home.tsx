import { Box } from "@mui/material";
import React from "react";
import { Introduce } from "./components/introduce/Introduce";
import { ListNewProduct } from "./components/listNewProduct/ListNewProduct";
import { Slider } from "./components/slider/Slider";

export const Home = (): JSX.Element => {
  return(
    <Box sx={{ marginTop: '80px' }}>
      <Slider/>
      <Introduce/>
      <ListNewProduct/>
    </Box>
  );
};