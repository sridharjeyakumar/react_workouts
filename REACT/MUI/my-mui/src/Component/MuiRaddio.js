import React from 'react'
import { Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio } from '@mui/material'
export const MuiRaddio = () => {
  return (
  <Box>
    <FormControl>
        <FormLabel id='job'>
            Experience
        </FormLabel>
        <RadioGroup 
        name='job-experience'
         aria-labelledby='job'>
            <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
            <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
            <FormControlLabel control={<Radio/>} label='8-12' value='8-12'/>
        </RadioGroup>
    </FormControl>
  </Box>
  )
}
//first import the box. next import form control for wrap it.
//next form label for group label button.
//form controll label for individual radio button
//radio group wrap the individual radio.
//finally import radio.above mentioned need for radio button.
//whenever we use formcontroll near to we use 'control'.
//row help to align radio button in row
