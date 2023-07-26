import React from 'react'
import { Button, 
IconButton,
 Stack,
 ButtonGroup,
 ToggleButtonGroup,
 ToggleButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'




export const MuiButton = () => {
  return (
        <Stack spacing={3} direction='row'>
        <Button variant='text' href='https://www.youtube.com'>text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined' color='error'>outline</Button>
        <Button variant='contained' color='warning' size='small'>large</Button>
        <Button variant='text' color='info' endIcon={<SendIcon/>}>Send</Button>
        <IconButton  color='primary' size='large' onClick={()=>alert('welcome')}>
        {<SendIcon/>}
        </IconButton>
         
         <Stack direction='row'>
          <ButtonGroup orientation='vertical' arial-aria-label='alignment button group'>
            <Button variant='contained'>hello</Button>
            <Button variant='contained'>hi</Button>
            <Button variant='contained'>hey</Button>
          </ButtonGroup>
         </Stack>

         <Stack>
           <ToggleButtonGroup aria-label='text formating' exclusive>
            <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
           </ToggleButtonGroup>
         </Stack>
      </Stack>
  )
}
 {/* less attention-text
        primary action-contained
        for user attention(cancel or go back)-outlined 
        stack-The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.
         Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement.
         using href in button we make that as anchor tag.
         mui-customization-palet,-for button color
         default theme-check palate for color.
         six color button-(primary,secondary,error warning,info ,success)
         display-def value is flex we change to block.
         button size-small,medium,large.
         mui-component-icon-download.
         import icon button-it help to create icon only,we also change color and size in this.
         disableelevation,disableripel it is used in button
         button group make button in one group.
         orientation help to move button vertical and horizontally.
         for toggel we import toggel button and toggel button group.
         import format bold italic underlineicon for style.
         using exclusive we use only one option at a time. 
        */} 
