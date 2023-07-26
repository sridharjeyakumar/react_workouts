import {Typography} from '@mui/material'
import React from 'react'
export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>Head1</Typography>
        <Typography variant='h2'>Head2</Typography>
        <Typography variant='h3'>Head3</Typography>
        <Typography variant='h4' component='h1' gutterBottom='false'>Refer in console</Typography>
        <Typography variant='h5'>Head5</Typography>
        <Typography variant='h6'>Head6</Typography>
        <Typography variant='subtitle1'>Head7</Typography>
        <Typography variant='subtitle2'>Head8</Typography>
        <Typography variant='body2'>it is used for paragraph</Typography>
    </div>
  )
}
