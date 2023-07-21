import React, { useState, useEffect } from 'react';
import './App';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, Divider} from '@mui/material';


export default function Contacts({hidden, onButtonClick}) {
    return(
<Box hidden={hidden}>
<h1> National and Regional Program Contacts</h1>
<h2>Federal Air Resource Management Programs</h2>
<Typography> National and Regional program contacts are maintained on the US Forest Service website.
Please click the link below to visit that page. </Typography>
<Typography>National Forest Service Air Program Contacts</Typography>
</Box>
    )

}