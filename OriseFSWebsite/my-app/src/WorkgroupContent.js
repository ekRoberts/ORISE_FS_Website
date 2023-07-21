import React, { useState, useEffect } from 'react';
import './App';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, Divider} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function WorkgroupContent({hidden, onButtonClick}) {
    return(
<Box hidden={hidden}>
<h1 >Lichens and Air Quality Workgroup</h1>
<Typography sx={{marginBottom: 5, marginTop:5}}> The goal of the workshop was to gather a diverse group of lichenologists, federal land managers and database managers to discuss ways to integrate existing data, make it more accessible to land managers dealing with air quality, and to explore ways to expand what is already being done with the data. An important additional goal of the workshop was to bring together people with common and conjoining interests, to share knowledge and develop relationships that would spawn future cooperative endeavors. </Typography>
<Typography>Arizona State University offered to host the gathering, and two days in October, 2001 were selected. The organizing committee then developed the workshop's official objectives:</Typography>
<List>
    <ListItem>
    <ListItemIcon>
        <CircleIcon fontSize='small'/>
    </ListItemIcon>
    <ListItemText>
    Gain an increased understanding of how to utilize lichen data in air resource management.
    </ListItemText>
    </ListItem>
    <ListItem>
    <ListItemIcon>
        <CircleIcon fontSize='small'/>
    </ListItemIcon>
    <ListItemText>
    Understand the range of lichen information resources available, both federal and non-federal.
    </ListItemText>
    </ListItem>
    <ListItem>
    <ListItemIcon>
        <CircleIcon fontSize='small'/>
    </ListItemIcon>
    <ListItemText>
    Provide input on needed analysis tools and standards for utilizing lichen data in federal air regulatory and decision-making processes.
    </ListItemText>
    </ListItem>
    <ListItem>
    <ListItemIcon>
        <CircleIcon fontSize='small'/>
    </ListItemIcon>
    <ListItemText>
    Outline database needs and requirements specific to the NRIS lichen module that can accommodate or link lichen information from many sources.
    </ListItemText>
    </ListItem>
    <ListItem>
    <ListItemIcon>
        <CircleIcon fontSize='small'/>
    </ListItemIcon>
    <ListItemText>
    Develop a plan for future collaboration and action.
    </ListItemText>
    </ListItem>


</List>

<Typography>During the workshop, an official workgroup was developed to share lichen-related information and programs to benefit air resource management on federal lands.</Typography>
</Box>
    )

}