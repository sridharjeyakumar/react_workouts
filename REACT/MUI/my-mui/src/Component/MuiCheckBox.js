import React from 'react'
import{Box,Checkbox,FormControlLabel} from '@mui/material'
import BookmarkBorderIcon from'@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
export const MuiCheckBox = () => {
  return (
    <Box>
        <FormControlLabel label='i accept the terms' control={<Checkbox/>} />
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>}
            checkedIcon={<BookmarkIcon/>}
            />
        </Box>
    </Box>
  )
}
//first import formcontrolllabel
//next import checkbox
//and also use control into formcontrollabel
//use icon in checkbox , i will import bookmarkbordericon,bookmarkicon.we use them in same time.