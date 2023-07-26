import { InputAdornment, Stack,TextField ,Box, MenuItem} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'
export const MuiTextField = () => {
  return (
   <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
           <TextField label='Name'/>
           <TextField label='Name' variant='filled'/>
           <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='secondary' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' required/>
            <TextField label='Password' type='password' helperText='Dont show password'/> 
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>,
            }}/>
            <TextField label='weight' InputProps={{
                endAdornment:<InputAdornment position='end'><VisibilityIcon color='primary'/></InputAdornment>
            }}/>
        </Stack>
        <Box width='300px'>
           <TextField lanbel='Legend' select>
           <MenuItem value='uchia'>Uchia Itachi</MenuItem>
           <MenuItem value='sage'>Jiraya</MenuItem>
           <MenuItem value='Ghost'>Uchia Madhara</MenuItem>
           </TextField>
        </Box>
   </Stack>
  )
}
// text fiels-we import text field for make a text box.
// varient-outline(default),filled,standard-these are used in text field.
// if you need that *symbol-requierd will be used
// helper text-it will help to the input.
// we use disable we unable to edit.
// input adorment component-it help to add prefix and suffix in the text field,first we import the input adorment.
// input props is used for read only we will not edit it
// import box to use box and 'menuitem' first-it help to use 'select text field'
//whenever we use menuitem we must use select in the text field.