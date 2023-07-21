import React, { useState, useEffect } from 'react';
import './App';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Contacts({hidden, onButtonClick}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <Grid hidden={hidden}>
        <h1 className='pageTitle'> Lichen and Air Quality Resources and Links</h1>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
          <strong>Lesson Plans</strong>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem >
                <ListItemText>
                What is a Lichen? <em>Contributed by Peter Nelson</em>            
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lichen Morphology & Drawing <em>Contributed by Peter Nelson</em> 
                
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lichen Collecting <em>Contributed by Larissa Lasselle</em>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Creating a Scientific Collection <em>Contributed by Peter Nelson</em> 
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Identifying Lichens <em>contributed by Laurice Anderson</em>            
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                What are Non-vascular Plants? <em>contributed by Laurice Anderson</em>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Painting Lichens using Watercolor Techniques <em>contributed by Laurice Anderson</em>             
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lichen Lesson Plan Additional Resources and References <em>Contributed by Peter Nelson</em> 
                </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong> Share your Projects</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography> For teachers, naturalists, students</Typography>
        <Typography>Contribute a lesson plan, an interpretive activity, or share your results and projects.</Typography>
        <Typography>Have you recently completed or have in progress a successful activity involving lichens and air quality? Send your materials for consideration for posting on this website, or provide us a link to your already posted material.</Typography>
        <Typography> <strong>Contact:</strong> <br/>
Linda Geiser <br/>
US Forest Service <br/>
Air Resource Management <br/>
PO Box 1148 <br/>
Corvallis, Oregon 97339-1148 <br/>
USA <br/>
<br/>
Email: lgeiser@fs.fed.us</Typography>
        </AccordionDetails>
      </Accordion>  
        </Grid>
    )

}