import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import { Button } from '@mui/material';

export default function TimeLine(props) {
    return (
        <div>
             <Timeline position="alternate"  sx={{bgcolor:"gainsboro"}}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
         
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FaceIcon sx={{ color:"yellow"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          <Link href="/">
          <Button sx={{bgcolor:"yellow", color:'black'}} >
            More about Me ?
            </Button>
            </Link>
        
          </Typography>
          <Typography>Because you seem intrested </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
       
          <Typography variant="h6" component="span">
       
          <Link href="/projects">
          <Button variant="contained" >
            Projects
            </Button>
            </Link>
           
          </Typography>
          
          <Typography>Dicover Now !</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <ContactMailIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" >
              <Button variant="contained" color="secondary" onClick={()=>props.handleOpen()}>
            Contact ME !
            </Button>
          </Typography>
          <Typography>Because you won&apos;t regret!</Typography>
        </TimelineContent>
      </TimelineItem> 
    </Timeline>
        </div>
    )
}
