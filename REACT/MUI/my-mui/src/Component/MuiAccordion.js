import React from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
export const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary 
        id='panel1-header' 
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon/>}
        >
            <Typography>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            React JS is used to build the user interface of web applications (that is, apps that run on a web browser) 
            React Native is used to build applications that run on both iOS and Android devices 
            (that is, cross-platform mobile applications) React uses HTML, CSS and JavaScript to create interactive user interfaces.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
//import accordion,accordiodetails,accordionsummary.
//refer video they teach about expand.