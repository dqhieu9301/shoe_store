import Box from '@mui/material/Box/Box';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useStyles } from './Slider.style';
import slider1 from '../../../../../assets/images/banner-sn3web-1571294680--acbihpps-1592386128--hipspcba-1622453987.jpg';
import slider2 from '../../../../../assets/images/coverwebcrep-1554432453i-1622454041-1623428656.png';


export const Slider = (): JSX.Element => {

  const classes = useStyles();
  return(
    <Box className={classes.sliderMain}>
      <Slide easing='ease' duration={3000}>
        <Box className={classes.sliderItem}>
          <img className={classes.imageSlider} src={slider1}></img>
        </Box>
        <Box className={classes.sliderItem}>
          <img className={classes.imageSlider} src={slider2}></img>
        </Box>
      </Slide>    
    </Box>
  );
};