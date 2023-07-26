import React from 'react'
import {Stack,Rating} from '@mui/material'

export const MuiRating = () => {
  return (
   <Stack>
    <Rating precision={0.25} highlightSelectedOnly/>
   </Stack>
  )
}
//import rating to use the star rating.
//precesion- it help to give how much rating we give
//highlightselected only it will help to select the particular icon eg facebook like