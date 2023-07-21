import React, { useState, useEffect } from 'react';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, ListItemButton, ListItemAvatar, Toolbar} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './App.css';
import HomeContent from './HomeContent';
import Drawer from '@mui/material/Drawer';
import ElementContent from './ElementContent';
import ContactContent from './ContactContent';
import AboutContent from './AboutContent';
import usfsLogo from './images/usfs-logo.png'
import TemplateContent from './template';
import GalleryContent from './GalleryContent';
import Reports from './Reports';
import DBQueriesContent from './DBQueriesContent'
import MapAppContent from './MapAppContent'
import ExplorationTool from './ExplorationTool';
import IllustrationsContent from './IllustrationsContent';
import StructuresContent from './StructuresContent'
import ThresholdTableContent from './ThresholdTableContent';
import EasternSensitivityContent from './EasternSensitivityContent';
import WesternSensitivityContent from './WesternSensitivityContent';
import PacificNorthSensitivityContent from './PacificNorthSensitivityContent';
import OtherResourcesContent from './OtherResourcesContent';
import WorkgroupContent from './WorkgroupContent';
import FunWithLichenContent from './FunWithLichenContent';
import Submission from './Submission';import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';



//renders the main app which includes the logo, title, navigation bar, and container where other page content is hidden or unhidden based on what the currPage is.
function App() {
  const [currPage, setCurrPage] = useState("home");
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openGalleryMenu, setOpenGalleryMenu] = React.useState(false);
  const [openToolMenu, setOpenToolMenu] = React.useState(false);
  const [openOtherMenu, setOpenOtherMenu] = React.useState(false);

  //this sets the window to be scrolled to the top of the page (x = 0 and y = 0) whenever the dependency variable currPage changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  //handles navigation tab changes by setting the tab value and the anchor variable. The tab state variable dictates which tab is currently selected and the anchorEl dictates where dropdown menus anchor to if applicable
  const handleListMenuClick = (event, newValue) => {
    setTab(newValue);
    setAnchorEl(event.currentTarget);
  };


  const open = Boolean(anchorEl);

  //handles clicks by navigating to new page content. This changes the currPage state variable.
  const handleClick = (event, pageID, newValue) => {
    setAnchorEl(event.currentTarget);
    setTab(newValue);
    setCurrPage(pageID);
    setOpenDrawer(false);
    handleClose()
  };

  //sets dropdown menus into a closed state when this is called.
  const handleClose = () => {
    setAnchorEl(null);
  };

  //this defines the content and behavior of the dropdown menu when hovering over the Tools tab.
  function ToolsMenu({open, anchorEl, handleClose, handleClick, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 1}
        placement={'bottom-start'}
        >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={(event) => handleClick(event, "dbQueries")}>Database Queries</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "thresholdData")}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "easternSensitivity")}>Eastern US Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "westernSensitivity")}>Western US Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "pacificSensitivity")}>Pacific North West US Sensitivity Ratings</MenuItem>

          </MenuList>
        </Paper>
      </Popper>
    );
  }

  //this defines the content and behavior of the dropdown menu when hovering over the Other tab.
  function OtherMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 4}
        placement={'bottom-start'}
      >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={(event) => handleClick(event, "funwithLichen")}>Fun with Lichens and Air Quality</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "workgroup")}>Lichen and Air Quality Workgroup</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "otherResources")}>Links to Other Resources</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  //this defines the content and behavior of the dropdown menu when hovering over the Gallery tab.
  function GalleryMenu({open, anchorEl, handleClose, handleClick, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 2}
        placement={'bottom-start'}
      >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={(event) => handleClick(event, "gallery")}>Photographs</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "illustrations")}>Illustrations</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "structures")}>Lichen Structures</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  const handleToolMenuClick = () => {
    setOpenToolMenu(!openToolMenu);
  };
  const handleGalleryMenuClick = () => {
    setOpenGalleryMenu(!openGalleryMenu);
  };
  const handleOtherMenuClick = () => {
    setOpenOtherMenu(!openOtherMenu);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };



  function DrawerComponent() {
    //const classes = useStyles();
      return (
        <>
         <Toolbar>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{padding: '5px',fontSize: '120%', color: "white",fontWeight: 'bold'}}> Menu </Typography>
          </Toolbar>
          <Drawer open={openDrawer}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
            <List>
              <ListItemButton onClick={(event) => handleClick(event, "home")}>
              <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton onClick={handleToolMenuClick}>
              <ListItemText primary="Tools" />
              </ListItemButton>
              <Collapse in={openToolMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                    <MenuList >
            <MenuItem onClick={(event) => handleClick(event, "dbQueries")}>Database Queries</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "thresholdData")}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "easternSensitivity")}>Eastern US Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "westernSensitivity")}>Western US Sensitivity Ratings</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "pacificSensitivity")}>Pacific North West US Sensitivity Ratings</MenuItem>


          </MenuList>
              </ListItem>
            </List>
            </Collapse>
              <ListItemButton onClick={handleGalleryMenuClick}>
              <ListItemText primary="Gallery" />
              </ListItemButton>
              <Collapse in={openGalleryMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                  <MenuList>
            <MenuItem onClick={(event) => handleClick(event, "gallery")}>Photographs</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "illustrations")}>Illustrations</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "structures")}>Lichen Structures</MenuItem>
          </MenuList>
              </ListItem>
            </List>
            </Collapse>
              <ListItemButton onClick={(event) => handleClick(event, "reports")}>
              <ListItemText primary="Reports" />
              </ListItemButton>
              <ListItemButton onClick={handleOtherMenuClick}>
              <ListItemText primary="Other" />
              </ListItemButton>
              <Collapse in={openOtherMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                  <MenuList>
                  <MenuItem onClick={(event) => handleClick(event, "funwithLichen")}>Fun with Lichens and Air Quality</MenuItem>
                  <MenuItem onClick={(event) => handleClick(event, "workgroup")}>Lichen and Air Quality Workgroup</MenuItem>
                  <MenuItem onClick={(event) => handleClick(event, "otherResources")}>Links to Other Resources</MenuItem>
          </MenuList>
              </ListItem>
            </List>
            </Collapse>
              <ListItemButton  onClick={(event) => handleClick(event, "contactPage")} >
              <ListItemText primary="Contact" />
              </ListItemButton>
            </List>
          </Drawer>

        </>
      );
    }

  return (
    //this is the main container for the website. It consists of the logo, title, navigation bar, and container for page content. Each tab on the navigation bar has event listeners that will change the current page content displayed inside the container. Each page and its behavior is defined in the src files.
    <Grid onMouseLeave={handleClose} sx={{width: '100%', padding: 0 }}>
                <Stack
            justifyContent='flex-start'
            direction="row"
            spacing={2}
            marginTop={2}
            marginLeft={2}
            marginRight={8}
            marginBottom={2}
          >
            
              <img class='logo' src={usfsLogo} alt='logo' onClick={(event) => handleClick(event, "home")} style={{cursor: 'pointer'}}/>
              <Stack
              direction='column'
              >
                <Typography sx={{fontSize: '170%'}}>United States Forest Service</Typography>
                <Typography sx={{fontSize: '140%'}}>National Lichens & Air Quality Database and Clearinghouse</Typography>
              </Stack>
            
          </Stack>
          <AppBar position={'static'} sx={{width: '100%', background: '#5b8441'}} >
      {isMobile ? (
        <>
       <DrawerComponent/>
       </>
     ) : (
       <Tabs sx={{background: '#5b8441', width: '100%'}} value={tab} textColor= 'inherit'  TabIndicatorProps={{style: {backgroundColor:'black', color:'black'}}} >

       <Tab label="Home"  onClick={(event) => handleClick(event, "home", 0)} sx={{ marginLeft: 5,fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }, ":active": { color: "black" }}}/>
       <Tab label="Tools" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end" onClick={(event) => handleListMenuClick(event, 1)} sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/>
       <Tab label="Gallery" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end"  onClick={(event) => handleListMenuClick(event, 2)}sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/>
       <Tab label="Reports"  onClick={(event) => handleClick(event, "reports",3)} sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/>
       <Tab label="Other" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end"  onClick={(event) => handleListMenuClick(event, 4)} sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/>
       <Tab label="Contact" onClick={(event) => handleClick(event, "contactPage",5)} sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/>
       {/* <Tab label="Data Entry" onClick={(event) => handleClick(event, "submission",6)} sx={{fontSize: '120%', color: "white",fontWeight: 'bold',":hover": { color: "black" }}}/> */}
       
       <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>
       <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
       <GalleryMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>
       
     </Tabs>
     )}

   </AppBar>
      <Container className="pageContainer" sx={{marginY: 5, width:'100%', padding: 0}}>
        <HomeContent hidden={currPage !== "home"} onButtonClick={handleClick} sx={{width:'100%'}}/>
        <GalleryContent hidden={currPage !== "gallery"}/>
        <IllustrationsContent hidden={currPage !== "illustrations"}/>
        <StructuresContent hidden={currPage !== "structures"}/>
        <DBQueriesContent hidden={currPage !== "dbQueries"} onButtonClick={handleClick}/>
        <ElementContent hidden={currPage !== "elementAnalysis"}/>
        <AboutContent hidden={currPage !== "contact"}/>
        <ThresholdTableContent hidden={currPage !== "thresholdData"}/>
        <EasternSensitivityContent hidden={currPage !== "easternSensitivity"}/>
        <WesternSensitivityContent hidden={currPage !== "westernSensitivity"}/>
        <PacificNorthSensitivityContent hidden={currPage !== "pacificSensitivity"}/>
        <OtherResourcesContent hidden={currPage !== "otherResources"}/>
        <Reports hidden={currPage !== "reports"}/>
        <FunWithLichenContent hidden={currPage !== "funwithLichen"}/>
        {/* <Submission hidden={currPage !== "submission"}/> */}
        <ContactContent hidden={currPage !== "contactPage"}/>
        <WorkgroupContent hidden={currPage !== "workgroup"}/>
        <MapAppContent hidden={currPage !== "mapApp"} onButtonClick={handleClick}/>
        <ExplorationTool hidden={currPage !== "explorationTool"} onButtonClick={handleClick}/>
      </Container>
      <footer style={{opacity: 0}}>.</footer> {/* this is to get rid of the white footer but nothing should actually showup here */}
    </Grid>
  );
}

export default App;
