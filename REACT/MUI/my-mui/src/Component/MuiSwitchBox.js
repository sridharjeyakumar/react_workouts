import React from 'react'
import {Box,FormControlLabel,Switch} from '@mui/material'

export const MuiSwitchBox = () => {
  return (
   <Box>
    <FormControlLabel label='dark mode' control={<Switch/>}/>
   </Box>
  )
}
