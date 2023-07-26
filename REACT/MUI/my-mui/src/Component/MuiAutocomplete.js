import React from 'react'
import {Stack,Autocomplete,TextField} from "@mui/material"
const skills=['java','python','Reactjs','nodejs']

export const MuiAutocomplete = () => {
  return (
    <Stack width='300px'>
        <Autocomplete 
        options={skills}
        renderInput={(params)=><TextField{...params} label='skills'/>}
        />
    </Stack>
  )
}
//first import autocomplete ..inside the autocomplete use option and render input.
//in option we use array or string in it.
