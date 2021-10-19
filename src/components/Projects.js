import React from 'react';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { Typography, Box, Card, CardContent, Grid, Container, CardMedia, CardActions, Button } from "@mui/material";
import Typed from "react-typed";
import Particles from 'react-particles-js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import drowsy from "../assets/projectposter.png";
import project from "../assets/dark-cover.jpg";
import hrmact from "../assets/hrmact.png";
import gamers from '../assets/gamers.png';
import cardCover from '../assets/card.jpg';



const useStyle = makeStyles(theme => ({





    particlesCanva: {
        position: 'absolute'
    },
    typo: {
        textAlign: 'center', color: "white", fontFamily: 'fantasy',
        fontStyle: 'oblique', fontWeight: 'bolder', paddingTop: "1%", marginTop: "2%", marginBottom: "4%"
    },
    cover:{
        backgroundColor: "black",
        backgroundImage:`url(${project})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        height:'100%',
        width:'100%',
        borderRadius:'30%',
        padding:'10%'
       
        
       
        
      
    },

    card: {
     
        height:'70%',
        borderRadius: "10%",
       
        width:'40%',
       
        






    },
    card_3: {
       
        height:'70%',
        borderRadius: "10%",
        width:'40%',
        margin:'5%'
      
        
        
       
    },
    card_2: {
      
        height:'70%',
        borderRadius: "10%",
        width:'40%',
        margin:'5%'
        
       




    },
  

   
    project_info: {
       
        backgroundImage:`url(${cardCover})`,
        backgroundSize: 'cover',
       
        backgroundPosition: "center",

    }
}))
export default function Projects() {
    const classes = useStyle()
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>

        
                <Particles canvasClassName={classes.particlesCanva}
                    params={{
                        particles: {
                            color: {
                                value: "#FFFFFF"
                            },
                            line_linked: {
                                color: {
                                    value: "#483d8b"
                                },

                            },
                            number: {
                                value: 40
                            },
                            desnity: {
                                enable: true,
                                value_area: 900
                            },
                            size: {
                                value: 2
                            },


                        }
                    }}
                />
                {/* <Container sx={{ position: "relative", pt: "5%", mb: "5%" }}>
                    <Paper
                        sx={{

                            backgroundColor: 'grey.800',
                            color: '#fff',
                            width: "100%",
                            height: "80vh",
                            opacity: .7,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right',
                            backgroundImage: `url(${project})`,
                            alignSelf: "center",
                            borderRadius: 10
                        }}
                    > */}

                        {/* <Box sx={{mb:40}} > */}

                        {/* <Typography  fontFamily="Anton" variant="h5" className={classes.typo}>
                <Typed
                    strings={[
                        'Who I am ?',
                        'Haya Balasmeh',
                        'Full stack Developer',
                        'UI/UX web designer',
                        'Certified Innovation Professional',
                        'Healthcare Professional']}
                    typeSpeed={30}
                    backSpeed={50}


                    loop ></Typed>

            </Typography> */}
                        {/* </Box> */}

                        {/* Increase the priority of the hero background image */}
                        {/* {<img style={{ display: 'none' }} src={project} alt='project' />}

                    </Paper> */}
{/*                    
                </Container> */}
                
               
                <Container className={classes.cover} >
                <Typography sx={{ color: "darkslateblue", fontFamily: 'Anton',fontSize:'2em', bgcolor:'lightgry',  textAlign:'center', padding:'5%' }}> 
                        
                        <Typed
                    strings={[
                        'Professional' ,
                        'Creative',
                        'and Innovative',
                        'real world problem domain solving',
                        'projects !',
                      ]}
                    typeSpeed={70}
                    backSpeed={70}


                    loop ></Typed>
                    </Typography>
                        
                        <Container sx={{display:'flex', width:'80%', height:'30%' }}  >

                            <Card className={classes.card_2} data-aos="fade-left">
                                <CardMedia component="img" image={drowsy} height="100%" sx={{width:'100%'}} >
                                </CardMedia>
                               


                            </Card>





                            <Card className={classes.card_3}  data-aos="fade-right">
                                
                                <CardContent  >
                                    <Typography  color="text.secondary" >
                                        Safety Technology Tool
                                    </Typography>
                                    <Typography variant="h5" component="div" >
                                        DRowsy
                                    </Typography>
                                    <Typography  color="text.secondary">
                                        Deep Drowsiness Detector
                                    </Typography>
                                    <Typography  >
                                        This application will detect the drowsiness status of the employee and it will do a specific action by first sounding an alarm and also sending an email to the in charge person that can save the situation.
                                        <br />
                                        <br />
                                        This project was done using python
                                        and Opencv and Dlib and facerecognition libraries.
                                      
                                    </Typography>
                                   
                                </CardContent>
                                <CardActions>
                                    <Button href="https://github.com/Data-Assassins/Drowsiness-Detector-Project" size="small">Discover More </Button>
                                </CardActions>
                                {/* <Box className={classes.project_info}></Box> */}

                            </Card>

                        </Container>
                        <Container sx={{display:'flex' , width:'80%', height:'30%'}}  >
                            <Card className={classes.card_2} data-aos="fade-right">
                                <CardMedia component="img" image={hrmact} height="100%" sx={{width:'100%'}} >
                                </CardMedia>
                                

                            </Card>

                            <Card className={classes.card_3} data-aos="fade-right">
                                {/* <CardMedia component="img" src={drowsy}>
                                </CardMedia> */}
                                <CardContent >
                                    <Typography  color="text.secondary" gutterBottom>
                                        Automation of human resources management Process
                                    </Typography>
                                    <Typography variant="h5" component="div" >
                                       HRMACT
                                    </Typography>
                                    <Typography  color="text.secondary">
                                    Employee onboarding, document management, performance tracking, and more!
                                    </Typography>
                                    <Typography >
                                   This application will make the human resource management and operations easier and more efficient and paperless.
                                        <br />
                                        <br />
                                        This project was done using Django framework for the back end m and react.js for the front end and chakra ui for the styling.
                                      
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href="https://github.com/Data-Assassins/Drowsiness-Detector-Project" size="small">Discover More </Button>
                                </CardActions>


                            </Card>

                        </Container>
                        <Container sx={{display:'flex',  width:'80%', height:'30%'}} >
                            <Card className={classes.card_2} data-aos="fade-right">
                                <CardMedia component="img" image={gamers} height="100%" sx={{width:'100%'}}>
                                </CardMedia>
                               


                            </Card>

                            <Card className={classes.card_3} data-aos="fade-right">
                                {/* <CardMedia component="img" src={drowsy}>
                                </CardMedia> */}
                                <CardContent >
                                    <Typography  color="text.secondary" gutterBottom>
                                        All about Gaming world !
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                       Space Games
                                    </Typography>
                                    <Typography  color="text.secondary">
                                    Free Games, best giveaways, trending games, and more!
                                    </Typography>
                                    <Typography variant="body2">
                                   Space Games provides access to the best giveaways in gaming from free games to newly updated games news to top trendy games and lot more.
   
                                        <br />
                                        <br />
                                         This project was done using react.js and bootstrap for the front end and node.js and express framework for the back end. 
                                      
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href="https://github.com/Data-Assassins/Drowsiness-Detector-Project" size="small">Discover More </Button>
                                </CardActions>


                            </Card>

                       
                        </Container>
                    
             
                </Container>


       

        </>
    )
}
