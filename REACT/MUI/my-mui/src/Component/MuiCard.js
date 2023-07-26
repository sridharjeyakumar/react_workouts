import React from 'react'
import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='400px'>
        <Card>
            <CardMedia
                Component='img'
                height='140'
                image='https://source.unplash.com/random'
                alt='unplash image'
          />
            <CardContent>
                <Typography color='blue'>React</Typography>
                <Typography xolor='secondary.text'>
                React JS is used to build the user interface of web applications
                (that is, apps that run on a web browser)
                React Native is used to build applications that run on both iOS and Android devices
                (that is, cross-platform mobile applications) React uses HTML, CSS and JavaScript to create interactive user interfaces.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
//first import box,card,cardcontent.
//inside that we use card action..card action is based on button.
//card media used for place image inside the card.
//cardmedia not work in this component refer the video