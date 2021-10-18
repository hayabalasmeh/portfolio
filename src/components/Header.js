import React from 'react';
import { Typography, Box, Fab, Link, Container } from "@mui/material";
import Typed from "react-typed";
import { makeStyles } from '@mui/styles';
import { CssBaseline } from "@mui/material";
import MouseIcon from '@mui/icons-material/Mouse';





const useStyle = makeStyles(theme => ({





    particlesCanva: {
        position: 'absolute'
    },
    typo: {
        textAlign: 'center', color: "grey", fontFamily: 'fantasy',  
        fontStyle: 'oblique', fontWeight: 'bolder', position:'absolute',top:'20%', left:"50%"
    },
    text_2: {

        textAlign: 'center', color: "white", fontFamily: 'fantasy',
        fontStyle: 'oblique'
    },
   
 


}))
export default function Header() {
  
    
    const classes = useStyle()
    return (
        <>
            <CssBaseline />
            <Container>

           
            <Box >
           
            <Typography component="div" fontFamily="Anton" variant="h5" className={classes.typo}>
                <Typed
                    strings={[
                        'Who I am ?',
                        'Haya Balasmeh',
                        'Full stack Developer',
                        'UI/UX web designer',
                        'Innovation Professional',
                       ]}
                    typeSpeed={30}
                    backSpeed={50}


                    loop ></Typed>

            </Typography>
            </Box>




        
            



            <Box sx={{ top:"70%",left:"49%", position: 'absolute' }}>
               <Link href="/projects">
                <Typography gutterBottom fontFamily="Anton" variant="h5" className={classes.text_2}>
                <Fab variant="extended" component="button" size="small" >
                    Projects
                    <MouseIcon  />
                    </Fab>
                </Typography>
                </Link>

              
           

      
               
             
            </Box>
            </Container>
           
        </>
    )
}
