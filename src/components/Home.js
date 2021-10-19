import React from 'react';

import Header from './Header';
import { CssBaseline ,Paper, Typography, Button,} from "@mui/material";
import coverr from "../assets/landing.jpg";




export default function Home(props) {
  
    return (
        <>
        <CssBaseline />
       
        <Paper  sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        width:'100vw',
        height:"100vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${coverr})`,
      }}>
        {<img style={{ display: 'none' }} src={coverr} alt='project' />}
        <Header />
        <Typography color='black' fontFamily="Anton" fontWeight="bolder"paddingTop={"4%"} fontSize={'2rem'} paddingLeft={"1%"}>
          Innovative,
          <br />
          Creative 
          <br />
          and Highly 
          <br/>
          Professional 
          <br />
          Website ??!
          <br />
          <Button sx={{bgcolor:'yellow', color:'black', fontSize:'1rem', fontFamily:'Anton'}} onClick={props.handleOpen}> Contact Me Now </Button>
         
        </Typography>
        </Paper>
       
      
        
        
        </>
    )
}
