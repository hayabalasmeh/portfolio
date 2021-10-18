import React, { useRef } from 'react';

import {Dialog,DialogContent, DialogTitle} from '@mui/material';
import { Button } from '@mui/material';

import TextField from '@mui/material/TextField';

import emailjs from 'emailjs-com';

export default function ContactForm(props) {
   
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hqg6pqe', 'template_mp3jkte', form.current, 'user_N7NicZSJaSbvOgojQyf4W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           props.handleClose()
    };

    return (
        <>
           
           <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Contact Me !</DialogTitle>
        <DialogContent>
 
       
          
           
                <form ref={form} onSubmit={(e) => sendEmail(e)}>
                    <TextField
                        sx={{display:"block", margin:5}}
                        required
                        id="from_name"
                        name="from_name"
                        label="Name"
                        placeholder="Your Name"
                    />
                    <TextField
                       sx={{display:"block", margin:5}}
                        required
                        id="from_email"
                        label="Email"
                        placeholder="Your Email"
                        name="from_email"
                    />
                    <TextField
                       sx={{display:"block", margin:5}}
                        required
                        id="message"
                        label="Message"
                        placeholder="Your Message"
                        name="message"
                    />
                  
                    <Button type="submit" sx={{ margin:"auto"}} variant="contained" >Send</Button>
                    <Button  sx={{ margin:"1%"}} variant="contained" onClick={props.handleClose}>Cancel</Button>
              
                </form>

   
                </DialogContent>
                </Dialog>
        </>
    );

    

}
