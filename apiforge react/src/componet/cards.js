import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
}));

export default function ActionAreaCard(props) {
    return (
        <>
            <Stack direction="row" justifyContent="center" alignItems="flex-end" spacing={2}>
                <Item className='number-block' sx={{fontSize:'30px',fontWeight:'600', }}>
                    {props.number}
                </Item>
            </Stack>
            <Card sx={{ maxWidth: 344 , borderRadius:"5px" }} sm={{ maxWidth: 200}}>
                <CardActionArea >
                    <Stack sx={{backgroundColor:'#0F3156', color:'#fff' ,padding:'10px 0px',fontSize:'17px' }}
                    direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            {props.head}
                    </Stack>
                    <Box sx={{width:"80%" , margin:'auto', padding:'15px' }}>
                    <CardMedia
                        component="img"
                        image={props.cimg}
                        alt="green iguana"
                        width='100%'
                    />
                    </Box>
                    <CardContent style={{backgroundColor: "#D9EAF3"}}>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}