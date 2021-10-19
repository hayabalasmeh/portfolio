import React from "react";
import Home from "./components/Home";
import { Box} from "@mui/system";
import {  CssBaseline } from "@mui/material";
import { makeStyles } from '@mui/styles';
import coverr from "./assets/color-cover.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import TimeLine from './components/TimeLine';

import ContactForm from './components/ContactForm';
const useStyle = makeStyles(theme => ({
  boxStyling: {
   
    backgroundImage: `url(${coverr})`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
  position:'relative'


  },
  projects:{
    backgroundColor:"	lavender ",
    height:'100%'
  }
}))


function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      
        <Router>
          <Switch>
          <Route exact path="/">

         

          < Home  handleClose={handleClose} handleOpen={handleOpen}/>
    
          </Route>
          <Route exact path="/projects">
            <Box className={classes.projects}>
          <Projects />
          </Box>
          </Route>
        </Switch>
        <TimeLine   handleOpen={handleOpen}/>
        <ContactForm open={open} handleClose={handleClose}/>
        </Router>
     
    </>
  );
}

export default App;
