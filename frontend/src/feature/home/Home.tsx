import { Box } from "@mui/material";
import React from "react";
import { Slider } from "./components/slider/Slider";

export const Home = (): JSX.Element => {
  return(
    <Box sx={{ marginTop: '80px' }}>
      <Slider/>
    </Box>
  );
};