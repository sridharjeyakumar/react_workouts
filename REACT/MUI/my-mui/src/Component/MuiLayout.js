import React from 'react'
import{Box,Grid} from '@mui/material'

export const MuiLayout = () => {
  return (
    <>
    <Box
    sx={{
        backgroundColor:'primary.light',
        width:'100px',
        height:'100px',
        padding:'26px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '&:hover':{
            backgroundColor:'greenyellow'
        }
    }}>
        Uchia Madara
    </Box>
    <Grid container>
        <Grid item backgroundColor='pink' p={2}>
         <Box>Item1</Box>
        </Grid>
        <Grid item backgroundColor='pink' p={2} sm={10}>
            <Box>Item2</Box>
        </Grid>
        <Grid item backgroundColor='pink' p={2} xs={5}>
            <Box>Item3</Box>
        </Grid>
        <Grid item backgroundColor='pink' p={2}>
            <Box>Item4</Box>
        </Grid>
    </Grid>
    </>
  )
}
//we use the box because it accpet the props called 'sx'.
//sx is used to define the custome style that acces the theam
// '&:hover'-it is used for hover.
//mui doc-system-properties-we see system properties
//stack is help to manage the layout in one direction either vertical or horizontal,default for stack is column.
//stack-padding,margin all are supporyted.
//first we import grid.
//and use grid container and inside it we use grid items
//grid contain the 12 coulmn
//each item in grid take one or more column  as it width.
//5 break point each corresponding to device width.
//xs-mobile,sm-tablet,md-desktop, lg and xl-monitors
//paper component ref in the video