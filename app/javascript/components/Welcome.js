import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

export default function Welcome() {
  return (
    <Box sx={{ width: '100%'}}>
      <Typography component={'span'} sx={{ typography: { sm: 'h3', xs: 'h5' } }} gutterBottom>
        <strong>WELCOME TO THE <Box color={"primary.main"} display='inline'>MOVE</Box></strong>
      </Typography>
      <Typography variant="body1" sx={{mt: 3, mb: 2}} gutterBottom>
        We know connecting to a church can sometimes be difficult, so we put together the Move to help you. These sessions have three primary objectives:
      </Typography>
      <Typography variant="h5" sx={{mt: 4, mb: 0}} gutterBottom>
        OUR <Box color={"primary.main"} display='inline'>FIRST</Box> OBJECTIVE:  
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>To help you have a better understanding of your gifting and purpose.</strong>
      </Typography>
      <Typography variant="h5" sx={{mt: 4, mb: 0}} gutterBottom>
        OUR <Box color={"primary.main"} display='inline'>SECOND</Box> OBJECTIVE:  
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>To paint a clear picture of who we are as a church community.</strong>
      </Typography>
      <Typography variant="h5" sx={{mt: 4, mb: 0}} gutterBottom>
        OUR <Box color={"primary.main"} display='inline'>THIRD</Box> OBJECTIVE:  
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>To connect you in partnership to the amazing Center City Church family.</strong>
      </Typography>
      <Typography variant="body1" sx={{mt: 4}} gutterBottom>
        Once you're done, fill out the NEXT STEPS Survey and we will connect with you. If you need to take a break at any point, feel free to leave and come back. Your progress will be saved for you.
      </Typography>
    </Box>
  )
}