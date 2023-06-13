import React, { useState, useEffect } from 'react';
import './App';
import './Reports.css';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Reports({hidden, onButtonClick}) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <Grid hidden={hidden}>
        <h1 className='pageTitle'> Lichen Monitoring in US National Forests and Parks
        Reports, Publications and Other Resources</h1>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
          <strong>Northern Region (R1)</strong>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem >
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 1994. Establishment of a Lichen Biomonitoring Program and Air Quality Baseline in the Anaconda-Pintler Wilderness Area and Adjacent Areas West of the Anaconda Copper Smelter. Final Report Submitted to Anaconda-Pintler Wilderness Area, USDA Forest Service. 66 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 1994. Establishment of a Lichen Biomonitoring Program and Air Quality Baseline in the Cabinet Mountains Wilderness Area. Final Report Submitted to the Cabinet Mountains Wilderness Area, USDA Forest Service. 42 pp.                
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 1995. Establishment of a Lichen Biomonitoring Program and Air Quality Baseline in and near the Selway-Bitterroot Wilderness Area. Final Report Submitted to the Selway-Bitterroot Wilderness Area, USDA Forest Service. 68 pp.  
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                1996 Idaho FHM Lichen Community Indicator Results.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 2000. Establishment of a Lichen Biomonitoring Program and Air QualityBaseline for Dinosaur National Monument. Final Report Submitted to Dinosaur National Monument, USDA Forest Service. 70 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                2003 Idaho Lichen Community Indicator Results.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                McMurray, J.A., Roberts, D.W., Geiser, L. H. 2015. Epiphytic lichen indication of nitrogen deposition and climate in the northern Rocky Mountains, USA. Ecological indicators 49 : 154–161
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
            <strong> Rocky Mountain Region (R2)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Hale, M.E. Jr. 1982. Liches as Bioindicators and Monitors of Air Pollution in the Flat Tops Wilderness Area, Colorado. Final Report: Forest Service Contract No. OMRFP R2-81-SP35.                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 1993. Lichen Biomonitoring Program and Air Quality Baseline in Selected Sites of the Bridger Wilderness Area, Bridger-Teton National Forest. Final Report Submitted to Bridger-Teton National Forest, USDA Forest Service. 54 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Jackson, L., L. Geiser, T. Blett, T. Gries, and D. Haddow. 1996. Biogeochemistry of Lichens and Mosses in and Near Mt. Zirkel Wilderness, Routt National Forest, Colorado: Influences of Coal Fired Power Plant Emissions. Final Report submitted to USDOI U.S. Geological Survey. 150 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                1997 Wyoming FHM Lichen Community Indicator Results
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                McCune, B., et al. 1998. Lichen Communities for Forest Health Monitoring in Colorado, USA. Internal report to Interior West Region, USDA Forest Service.                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1999. Establishment of a Lichen Biomonitoring Program and Baseline in the San Juan and Rio Grande National Forests, Colorado. USDA Forest Service Technical Report. 123 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Peterson, E.B. and P. Neitlich. 2001. Impacts of Two Coal-Fired Power Plants on Lichen Communities in Northwestern Colorado. FHM Evaluation Monitoring Study. Internal report to Interior West Region, USDA Forest Service.               
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
                McMurray, J. A., Roberts, D. W., Fenn, M. E., Geiser, L. H., & Jovan, S. 2013. Using epiphytic lichens to monitor nitrogen deposition near natural gas drilling operations in the Wind River Range, WY, USA. Water, Air, & Soil Pollution, 224(3), 1-14.           
                </ListItemText>
                 </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Southwestern Region (R3)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests. Final Report Submitted to the Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Arizona, USDA Forest Service. 58 pp.      
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and K. Anderson. 1998. Establishment of a Lichen Air Quality Biomonitoring Program and Baseline for Selected Sites in the Gila Wilderness Area. Final Report Submitted to Pete Stewart and John Kramer of the Gila National Forest, USDA Forest Service. 47 pp.               
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Ryan, B.D., T.H. Nash III, and W. Davis. 1990. Lichens and Air Quality in Mt. Baldy Wilderness Area. Arizona State University.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Sierra Ancha Wilderness Area. Final Report Submitted to the Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, USDA Forest Service. 50 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Chiricahua Wilderness Area. Final Report Submitted to the Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forest, USDA Forest Service. 56 pp.           
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Mazatzal Wilderness Area. Final Report Submitted to the Mazatzal Wilderness Area, USDA Forest Service. 44 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Superstition Wilderness. Final Report Submitted to the Galiuro Wilderness Area, USDA Forest Service. 42 pp.             
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
            St. Clair, L.L. 1991. Preliminary Lichen Biomonitoring Program and Air Quality Baseline in Selected Class I Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto National Forests, Galiuro Wilderness Area. Final Report Submitted to the Wilderness Areas of Coronado, Coconino, Kaibab, Prescott and Tonto, USDA Forest Service. 49 pp.        
                </ListItemText>
                 </ListItem>
                 <ListItem>
                <ListItemText>
                St. Clair, L.L. 2013. Field review of the lichen air quality bio-monitoring program and baseline at selected sites in the Gila Wilderness Area, Gila National Forest New Mexico. Report based on collections made during the 2013 field season. Presented to Gila National Forest, 8 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 2013. Establishment of a lichen air quality bio-monitoring program and baseline in the Wheeler Peak Wilderness Area, Carson National Forest, New Mexico. Based on collections made during the 2013 field season. Report to USDA Forest Service, Southwest Region, 18 pp.          
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 2013. Establishment of a lichen air quality bio-monitoring program and baseline in the White Mountain Wilderness Area, Lincoln National Forest, New Mexico. Based on collections made during the 2013 field season. Report to USDA Forest Service, Southwest Region, 14 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 2015. Evaluation of three partial lichens air quality reference sites in the Cibola National Forest, New Mexico based on collections made in the May of 2014 and July of 1997. Report submitted to Cibola National Forest, USDA Forest Service, 8 pp.         
                 </ListItemText>
            </ListItem>    
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Intermountain Region (R4)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and C. Newberry. 1994. Establishment of a Lichen Biomonitoring Program and Baseline at Selected Sites in the High Uintas Wilderness Area, Wasatch-Cache National Forest. Final Report Submitted to Wasatch-Cache National Forest, USDA Forest Service. 70 pp.    
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and D. Smith. 1994. Establishment of a Lichen Biomonitoring Program and Air Quality Baseline at Cedar Breaks National Monument, Utah. Final Report Submitted to Cedar Breaks National Monument, USDA Forest Service. 60 pp.           
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1995. Establishment of a Lichen Biomonitoring Program and Baseline in the Sawtooth Wilderness Area. Final Report Submitted to the Sawtooth National Forest, USDA Forest Service. 38 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                1999 Utah & Nevada FHM Lichen Community Indicator Results
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 2000. Establishment of a Lichen Air Quality Biomonitoring Program and Baseline for Selected Sites in the Manti La Sal National Forest, Utah. Final Report Submitted to Manti La Sal, USDA Forest Service. 57 pp.         
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. and L. Porter. 2000. The Re-Inventory of the Lichen Biomonitoring Program and Baseline for Selected Sites in the Bridger Wilderness Area, Bridger-Teton National Forest, Wyoming. Final Report Submitted to Bridger-Teton National Forest USDA Forest Service. 21 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                St. Clair, L.L.. 2005. The Re-Inventory of the Lichen Biomonitoring Program and Baseline for Selected Sites in the Uinta National Forest, Utah (Originally Collected in May-August 1995) and Baseline Information Concerning Establishment of 12 Additional Lichen Biomonitoring Reference Sites in the Uinta National Forest. Final Report Submitted to Reese Pope, USDA Forest Service. 38 pp.           
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
            Rogers, P. 2007. Factors influencing epiphytic lichen communities in aspen-associated forests of the Bear River Range, Idaho and Utah Logan, UT: Utah State University. 166 p. Dissertation.       
                </ListItemText>
                 </ListItem>
                 <ListItem>
                <ListItemText>
                Rogers, P.C., K.D. Moore, and R.J. Ryel. 2009. Aspen succession and nitrogen loading: a case for epiphytic lichens as bioindicators in the Rocky Mountains, USA. Journal of Vegetation Science 20: 498-510.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Idaho Bureau of Land Management [This website contains a list of available Idaho BLM publications.]         
                </ListItemText>
            </ListItem>   
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Pacific Southwest Region (R5)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Neel, M. 1988. Lichens and Air Pollution in the San Gabriel Wilderness, Angeles National Forest, California. Region 5 Forest Service Monograph. 53 pp.   
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Ryan, B. 1990. Lichens and Air Quality in the Emigrant Wilderness, California: A Baseline Study. Arizona State University, Tempe. 46 pp. [Bibliography available as separate document. See listing for "Literature Cited" below.]        
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Ryan, B. 1990. Lichens and Air Quality in the Agua Tibia Wilderness, California: A Baseline Study. Arizona State University, Tempe. 35 pp. [Bibliography available as separate document. See listing for "Literature Cited" below.]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Ryan, B. 1990. Lichens and Air Quality in Wilderness Areas of California: A Series of Baseline Studies. Arizona State University, Tempe. 20 pp. [Bibliography available as separate document. See listing for "Literature Cited" below.]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Jovan, S. 2002. A Landscape-level Analysis of Epiphytic Lichen Diversity in Northern and Central California: environmental predictors of species richness and potential observer effects. Bulletin of the California Lichen Society 9(1): 1-7.        
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Jovan, S. and B. McCune. 2004. Regional variation in epiphytic macrolichen communities in northern and central California forests. The Bryologist 107(3): 328-329.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Jovan, S. and B. McCune. 2005. Air-quality bioindication in the greater Central Valley of California, with epiphytic macrolichen communities. Ecological Applications 15: 1712-1726.         
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
            Jovan, S. and T. Carlsberg. 2006. Nitrogen content of Letharia vulpina tissue from forests of the Sierra Nevada, California: Geographic patterns and relationships to ammonia estimates and climate. Environmental Monitoring & Assessment 129: 243-251.      
                </ListItemText>
                 </ListItem>
                 <ListItem>
                <ListItemText>
                Jovan, S. and B. McCune. 2006. Using epiphytic macrolichen communities for biomonitoring ammonia in forests of the Greater Sierra Nevada, California. Water, Air, and Soil Pollution 170: 69-93.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Fenn, M.E., S. Jovan, F. Yuan, L. Geiser, T. Meixner, and B.S. Gimeno. 2008. Empirical and simulated critical loads for nitrogen deposition in California mixed conifer forests. Environmental Pollution 155: 492-511.      
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                Jovan, S. 2008. Lichen bioindication of biodiversity, air quality, and climate: baseline results from monitoring in Washington, Oregon, and California. Gen. Tech. Rep. PNW-GTR-737. Portland, OR: U.S. Department of Agriculture, Forest Service, Pacific Northwest Research Station. 115 pp.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Literature Cited in Wilderness Reports by Bruce Ryan, 1988-1990. 6 pp.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Fenn, ME, EB Allen, SB Weiss, S Jovan, LH Geiser, GS Tonnesen, RF Johnson, LE Rao, BS Bimeno, F Yuan, T Meixner, A Bytnerowicz. Nitrogen critical loads and management alternatives for N-impacted ecosystems in California. 2010. Journal of Environmental Management 91: 2404-2423  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Riddell J, Jovan S, Padgett P, Sweat K. 2011 Tracking lichen community composition changes due to declining air quality over the last century: the Nash legacy in southern California. In: Bates ST, Bungartz F, Lücking R, Herrera-Campos MA, Zambrano A (eds.) Bibliotecha Lichenologica 106: 259-273.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Fenn, M.E., Nagel, H.D., Koseva, I., Aherne, J., Jovan, S., Geiser, L.H., Schlutow, A., Scheuschner, T., Bytnerowicz, A., Gimeno, B.S., Yuan, F., Watmough, S.A., Allen, E. B., Johnson, R.F., Meixner, T. 2014. A comparison of empirical and modelled nitrogen critical loads for Mediterranean forests and shrublands in California. Chapter 38, In: Sutton, M.A., Mason, K.E., Sheppard, L.J., Sverdrup, H., Haeuber, R., Hicks, W.K. eds. Nitrogen Deposition, Critical Loads and Biodiversity. Springer Dordrecht. Pp. 357-368.     
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, L.H., Jovan, S.E., Glavich, D.A., and Fenn, ME. 2014. Predicting lichen-based critical loads for nitrogen deposition in temperate forests. Chapter 33 In: Sutton, M.A., Mason, K.E., Sheppard, L.J., Sverdrup, H., Haeuber, R., Hicks, W.K. eds. Nitrogen Deposition, Critical Loads and Biodiversity. Springer Dordrecht. Pp. 311-318.   
                </ListItemText>
            </ListItem>    
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Pacific Northwest Region (R6)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Denison, W.C. 1973. A Guide to Air Quality Monitoring With Lichens. Lichen Technology Inc., Corvallis, OR. 46 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Ryan, B. 1995. Glacier Peak Wilderness Lichen Biomonitoring Study. Arizona State University, Tempe. 72 pp.     
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                McCune, B., C.C. Derr, P.S. Muir, A. Shirazi, S.C. Sillett, and W.J. Daly. 1996. Lichen pendants for transplant and growth experiments. The Lichenologist 28: 161-169.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Neitlich, P. and B. McCune. 1997. Hotspots of Epiphytic Lichen Diversity in Two Young Managed Stands. Conservation Biology 11(1): 172-182.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Rhoades, F.M. 1999. A Review of Lichen and Bryophyte Elemental Content Literature with Reference to Pacific Northwest Species. USDA Forest Service, Pacific Northwest Region. 128 pp.       
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Geiser, L. H. and R. Reynolds. 2002. Using Lichens as Indicators of Air Quality on Federal Lands. Workshop Report. USDA-Forest Service Pacific Northwest Region R6-NR-AG-TP-01-02.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Edwards, T., R. Cutler and L. H. Geiser. 2003. Assessing rarity of species with low detectability: Lichens in Pacific Northwest Forests. Ecological Applications 14: 414-424.       
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
            Lesher, R.D., C.C. Derr, and L.H. Geiser. 2003. Natural History and Management Considerations for Northwest Forest Plan Survey and Manage Lichens Based on Information as of the Year 2000. USDA Forest Service Pacific Northwest Region Natural Resources Technical Paper, Portland, OR, R6-NR-S&M-TP-03-03. 211 p.     
                </ListItemText>
                 </ListItem>
                 <ListItem>
                <ListItemText>
                Geiser, L. 2004. Manual for Monitoring Air Quality Using Lichens on National Forests of the Pacific Northwest. USDA-Forest Service Pacific Northwest Region Technical Paper, R6-NR-AQ-TP-1-04. 126 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Geiser, L. H., D. Glavich, A. G. Mikulin, AR Ingersoll, M Hutten. 2004. New records of rare and unusual coastal lichens from the US Pacific Northwest. Evansia 21: 104-110.   
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                Glavich, D., L. H. Geiser. 2004. Dermatocarpon meiophyllizum Vainio in the US Pacific Northwest. Evansia 21(3): 137-140.   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Ra, H.S.Y., L. Rubin, and R.F.E. Crang. 2004. Structural impacts on thallus and algal cell components of two lichen species in response to low-level air pollution in Pacific Northwest forests. Microscopy and Microanalysis 10(2): 270-279.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Ra, H.S.Y., L.H. Geiser, and R.F.E. Crang. 2005. Effects of season and low-level air pollution on physiology and element content of lichens from the U.S. Pacific Northwest. Science of the Total Environment 343: 155-167. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Glavich, D., L. H. Geiser, A. G. Mikulin. 2005. Rare epiphytic coastal lichen habitats, modeling, and management in the Pacific Northwest. The Bryologist 108: 377-390   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Glavich, DA, LH Geiser, A. G. Mikulin. 2005. The distribution of some rare coastal lichens in the Pacific Northwest and their association with late-seral and federally-protected forests. The Bryologist 108: 241-254.     
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Berryman, S. and B. McCune. 2006. Estimating epiphytic macrolichen biomass from topography, stand structure and lichen community data. Journal of Vegetation Science 17: 157-170. [Includes appendix]  
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Geiser, L.H. and P.N. Neitlich. 2007. Air pollution and climate gradients in western Oregon and Washington indicated by epiphytic macrolichens. Environmental Pollution 145: 203-218.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Glavich, D., L. H. Geiser. 2007. New records of Leptogium rivale and Peltigera hydrothyria in the US Pacific Northwest. Evansia 24(1): 6-9.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Fenn, M., L. Geiser, R. Tachman, T.J. Blubaugh, and A. Bytnerowicz. 2007. Atmospheric deposition inputs and effects on lichen chemistry and indicator species in the Columbia River Gorge, USA. Environmental Pollution 146: 77-91. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, LH, A. R. Ingersoll, A. Bytnerowicz, S. A. Copeland. 2008. Evidence of enhanced atmospheric ammoniacal nitrogen in Hells Canyon National Recreation Area: Implications for natural and cultural resources. Journal of the Air & Waste Management Association 58:1223-1234. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, L.H., A.R. Ingersoll, A. Bytnerowicz, and S.A. Copeland. 2008. Evidence of enhanced atmospheric ammoniacal nitrogen in Hell's Canyon National Recreation Area: Implications for natural and cultural resources. Journal of the Air & Waste Management Association 58: 1223-1234.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Jovan, S. 2008. Lichen bioindication of biodiversity, air quality, and climate: baseline results from monitoring in Washington, Oregon, and California. Gen. Tech. Rep. PNW-GTR-737. Portland, OR: U.S. Department of Agriculture, Forest Service, Pacific Northwest Research Station. 115 pp. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                McCune, B., S. Jovan, and A. Hardman. 2008. Changes in forage lichen biomass after insect outbreaks and fuel reduction treatments in the Blue Mountains, Oregon. North American Fungi 3:1-15. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                McCune, B. and L. Geiser. 2009. Macrolichens of the Pacific Northwest. Second Edition. Oregon State University Press, Corvallis, Oregon. 448 pp. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                USFS. 2009. Atlas of Oregon and Washington Macrolichens. US Forest Service Pacific Northwest Region Air Resource Management Program, Corvallis, OR.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, LH, SE Jovan, DA Glavich, M Porter. 2010. Lichen-based critical loads for nitrogen deposition in western Oregon and Washington Forests, USA. Env. Poll. 158:2412-2421.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Villella, J., D. Stone, and L. M. Calabria. 2013. Macrolichen Communities of Quercus garryana in the Puget Trough and Columbia River Gorge Areas of Washington State. North America Fungi 8(17):1-22
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Cummings, T., T. Blett, E. Porter, L. Geiser, R. Graw, J. McMurray, S. Perakis and R. Rochefort. 2014. Thresholds for protecting Pacific Northwest ecosystems from atmospheric deposition of nitrogen: State of knowledge report. Natural Resource Report NPS/PWRO/NRR—2014/823. National Park Service, Fort Collins, Colorado.  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Root, H.T., Geiser, L.H., Jovan, S.E., Neitlich, P.E. 2015. Epiphytic macrolichen indication of air quality and climate in interior forested mountains of the Pacific Northwest, USA. Ecological Indicators 53: 95–105.  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Glavich, D. 2016. Climate change monitoring with lichens on the west slope of the Cascade Range from southwest Washington and northwest Oregon. Report from PNW Region Air Program, 10 pp. 
                </ListItemText>
            </ListItem>         
          </List>
        </AccordionDetails>
      </Accordion> 
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Southern Region (R8)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                St. Clair, L.L. 1987. The Establishment of an Air Quality Biomonitoring Program Using Various Lichen Parameters in the James River Face Wilderness Area. Final Report Submitted to the Jefferson National Forest Roanoke, Virginia, USDA Forest Service. 121 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C. F. 1991. Lichens and Air Quality in Okefenokee National Wildlife Refuge. Final Report to U.S. Fish and Wildlife Service, 35pp   
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Dey, J.P. 1995. Report on the Identification of the Corticolous Macrolichen Species Collected in the James River Face Wilderness Area and in the Mount Rogers National Recreation Area of Jefferson National Forest, Virginia. Final Report submitted to the Air Quality Specialist, Jefferson National Forest, USDA Forest Service. January 1995.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lawrey, J.D. 1996. Lichen Biomonitoring Program in the George Washington and Jefferson National Forests: A Survey of Lichen Floristics and Elemental Status. Final Report to the Forest Supervisor, George Washington and Jefferson National Forests, USDA Forest Service. March 1996.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                McCune, B., J.P. Dey, J.E. Peck, K. Heiman, and S. Will-Wolf. 1997. Regional Gradients in Lichen Communities of the Southeast United States. The Bryologist 100(2): 145-158.      
                </ListItemText>
            </ListItem>      
          </List>
        </AccordionDetails>
      </Accordion>    
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Eastern Region (R9)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Lawrey, J.D., and M.E. Hale, Jr. 1988. Lichens as Indicators of Atmospheric Quality in the Dolly Sods and Otter Creek Wildernesses of the Monongahela National Forest, West Virginia. Final Report Submitted to Forest Supervisor, Monongahela National Forest, USDA Forest Service. January 1988.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1989. Lichens and Air Quality in White Mountain National Forest Wilderness Areas. Final Report submitted to USDA Forest Service. 34 pp.
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1990. Lichens and Air Quality in Boundary Waters Canoe Area of the Superior National Forest. Final Report submitted to USDA Forest Service, Duluth, MN. 27 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1992. Lichens and Air Quality in Hercules Glades Wilderness of Mark Twain National Forest. Final Report submitted to USDA Forest Service. 22 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lawrey, J.D. 1993. Lichen Biomonitoring Program in the Dolly Sods and Otter Creek Wildernesses of the Monongahela National Forest: A Resurvey of Lichen Floristics and Elemental Status. Final Report to the Forest Supervisor, Monongahela National Forest, USDA Forest Service. May 1993.      
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1993. Lichens and Air Quality in Rainbow Lake Wilderness of The Chequamegon National Forest. Final Report submitted to USDA Forest Service. 27 pp.  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Wetmore, C.M. and J.P. Bennett. 1993. Lichens and Air Quality in Boundary Waters Canoe Area of the Superior National Forest. Final Report submitted to USDA Forest Service, Duluth, MN. 20 pp.     
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1995. Lichens and Air Quality in White Mountain National Forest Wilderness Areas. Final Report submitted to USDA Forest Service. 35 pp.     
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1995. Lichens and Air Quality in Lye Brook Wilderness of the Green Mountain National Forest. Final Report submitted to USDA Forest Service. 40 pp.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Selva, S. B. Using Calicioid Lichens and Fungi as Biomonitors of Pollution in Five Class I Wilderness Areas in Eastern North America.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Lawrey, J.D. 1993. Lichen Biomonitoring Program in the Dolly Sods and Otter Creek Wildernesses of the Monongahela National Forest: A Resurvey of Lichen Floristics and Elemental Status. Final Report to the Forest Supervisor, Monongahela National Forest, USDA Forest Service. May 1993.      
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                Will-Wolf, S., Jovan, S., Neitlich, P., Peck, J.E., and Rosentreter, R. 2015. Lichen-based indices to quantify responses to climate and air pollution across the northeastern USA. The Bryologist 118: 59-82    
                </ListItemText>
            </ListItem>  
          </List>
        </AccordionDetails>
      </Accordion>  
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Alaska Region (R10)</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Derr, C.C. 1994. Lichen Biomonitoring in Southeast Alaska and Western Oregon. M.S. thesis, Oregon State University, Corvallis.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Geiser, L.H., C.C. Derr, and K.L. Dillman. 1994. Air Quality Monitoring on the Tongass National Forest. Methods and Baselines Using Lichens. USDA Forest Service, Alaska Region, Technical Bulletin R10-TB-46. 97 pp.
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Geiser, L.H., K.L. Dillman, C.C. Derr, and M.C. Stensvold. 1994.Lichens of Southeastern Alaska: An Inventory. USDA Forest Service, Alaska Region R10-TB-45. 143 pp. [Text only. Distribution maps currently unavailable.]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1992. Lichens and Air Quality in Hercules Glades Wilderness of Mark Twain National Forest. Final Report submitted to USDA Forest Service. 22 pp.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Geiser, L.H., K.L. Dillman, C.C. Derr, and M.C. Stensvold. 1998. Lichens and Allied Fungi of Southeast Alaska. In: M.G. Glenn, R.C. Harris, R. Dirig and M.S. Cole, eds. Lichenographia Thomsoniana: North American Lichenology in Honor of John W. Thomson. Mycotaxon Ltd., Ithaca NY. 42 pp.     
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Furbish, C.E., L. Geiser, and C. Rector. 2000. Lichen-Air Quality Pilot Study for Klondike Gold Rush National Historical Park and the City of Skagway, Alaska. 47 pp. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Dillman, K. 2004. Epiphytic Lichens from the Forest-Marine Ecotone of Southeastern Alaska. M.S. thesis, Arizona State University, Tempe.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Dillman, K. 2006. Lichens of the National Forests in Alaska. US Dept of Agriculture Forest Service, Alaska Region, R10-RG-170, August 2006. Color brochure, 16 pp.   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Derr, C.C., B. McCune, and L.H. Geiser. 2007. Epiphytic macrolichen communities in Pinus contorta peatlands in southeastern Alaska. The Bryologist 110(3): 521-532.    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Dillman, K., L. Geiser, and G. Brenner. 2007. Air Quality Bio-Monitoring with Lichens. The Togass National Forest. USDA Forest Service. 14 pp.   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Dillman, K. 2009. Alaska Region Plan for Air Resource Management 2009-2013. US Forest Service, Alaska Region, Juneau, AK.      
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                Derr, C.C. 2010. Air Quality Biomonitoring on the Chugach National Forest. 1993 & 1994 Methods and Baselines Using Lichens. USDA FS Technical Report, Alaska Region. TP-R10-147    
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Root, H., McCune, B, Jovan, S. 2014. Lichen communities and species indicate climate thresholds in southeast and south-central Alaska, USA. The Bryologist 117: 241-252.    
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Schirokauer, D., L. Geiser, A. Bytnerowicz, M. Fenn, and K. Dillman. 2014. Monitoring air quality in Southeast Alaska’s National Parks and Forests: Linking atmospheric pollutants with ecological effects. Natural Resource Technical Report NPS/SEAN/NRTR—2014/839. National Park Service, Fort Collins, Colorado.    
                </ListItemText>
            </ListItem> 
          </List>
        </AccordionDetails>
      </Accordion>   
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>National</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Forest Inventory Analysis (FIA) website - FIA/FHM Lichen Indicator Program
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Western Airborne Contaminants Assessment Project (WACAP) website    
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Wetmore, C.M. 1983. Lichens of the Air Quality Class 1 National Parks. U.S. Dept. of the Interior, National Park Service, Air Division, Denver, CO. Published under Contract CX 000 1-2-0034.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Hutchinson, J., D. Maynard, L. Geiser. 1996. Air Quality and Lichens - A Literature Review. USDA Forest Service, Pacific Northwest Region Air Resource Management Program. [web page internal to this site]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Rhoades, F.M. 1999. A Review of Lichen and Bryophyte Elemental Content Literature with Reference to Pacific Northwest Species. USDA Forest Service, Pacific Northwest Region. 128 pp.       
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                McCune, B., et al. 1997. Repeatability of community data: Species richness versus gradient scores in large-scale lichen studies. The Bryologist 100(1): 40-46.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                USDA Forest Service. 2002. Using Lichens as Indicators of Air Quality on Federal Lands: Workshop Report U.S. Dept. of Agriculture Technical Report R6-NR-AG-TP-01-02. 62 pp.      
                 </ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>
            Blett, T., L. Geiser, and E. Porter. 2003. Air Pollution-Related Lichen Monitoring in National Parks, Forests, and Refuges: Guidelines for Studies Intended for Regulatory and management purposes. U.S. Dept. of the Interior Technical Report NPSD 2292. 25 pp.    
                </ListItemText>
                 </ListItem>
                 <ListItem>
                <ListItemText>
                Fenn, ME, R Haebuer, GS Tonnesen, JS Baron, SG Rossman-Clarke, D Hope, DA Jaffe, S Copeland, LH Geiser, HM Rueth, and JO Sickman. 2003. Nitrogen Emissions, Deposition and Monitoring in the Western United States. BioScience 53: 391-403.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Fenn, ME, JS Baron, EB Allen, HM Rueth, KR Nydick, LH Geiser, WD Bowman, JO Sickman, T Meixner and DW Johnson. 2003. Ecological Effects of Nitrogen Deposition in the Western United States. BioScience 53: 404-420  
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                Lesher, R.D., C.C. Derr, and L.H. Geiser. 2003. Natural History and Management Considerations for Northwest Forest Plan Survey and Manage Lichens Based on Information as of the Year 2000. USDA Forest Service Pacific Northwest Region Natural Resources Technical Paper, Portland, OR, R6-NR-S&M-TP-03-03. 211 p.  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Edwards Jr, T. C., D. R. Cutler, N. E. Zimmermann, L Geiser and J Alegria. 2005. Model-based stratifications for enhancing the detection of rare ecological events. Ecology 86(5):1081-1090.   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, L. 2006. The evolving role of lichens in air quality protection on public lands. Botany 2006. Annual meeting of the Botanical Society of America and the American Bryological and Lichenological Society, Lichen Bioindication of Air Quality Symposium, Chico State University, Chico, California, USA. July 28- August 2, 2006. Powerpoint presentation. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Will-Wolf, S., L. H. Geiser, P. Neitlich and A. H. Reis. 2006. Forest lichen communities and environment—how consistent are relationships across scales? Journal of Vegetation Science 17:171-184.   
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Will-Wolf, S., L.H. Geiser, P. Neitlich, and A. Reis. 2006. Comparison of lichen community composition with environmental variables at regional and subregional geographic scales. Journal of Vegetation Science 17: 171-184. [Includes appendix]    
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Glavich, D.A. and L.H. Geiser. 2008. Potential approaches to developing lichen-based critical loads and levels for nitrogen, sulfur and metal-containing atmospheric pollutants in North America. The Bryologist 111(4): 638-649.  
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Landers, D. H., S. M. Simonich, D. Jaffe, L. H. Geiser, D. H. Campbell, A. Schwindt, C. Schreck, M. Kent, H.E. Taylor, K. Hageman, S. Usenko, L. Ackerman, J. Schrlau, N. Rose, T. Blett, M. M. Erway. 2008. The Fate, Transport, and Ecological Impacts of Airborne Contaminants in Western National Parks (USA). EPA/600/R-07/138. US Environmental Protection Agency, Office of Research and Development, NHEERL, Western Ecology Division, Corvallis, Oregon.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Will-Wolf, S. & S. Jovan. 2008. Lichens, ozone, and forest health – exploring cross-indicator analyses with FIA data. In: McWilliams, W.; Moisen, G.; Czaplewski, R., comps. 2008 Forest Inventory and Analysis (FIA Symposium; October 21-23, 2008; Park City, UT. Proc. RMRS-P-56CD. Fort Collins, CO: U.S. Department of Agriculture, Forest Service, Rocky Mountain Research Station. one CD. http://www.treesearch.fs.fed.us/pubs/33326 (July 2009).
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                T. H. Nash, III, L. H. Geiser, B. M. McCune, D. Triebel, A. M. F. Tomescu and W.B. Sanders (ed.). 2010. Biology of Lichens: Symbiosis, Ecology, Environmental Monitoring, Systematics and Cyber Applications. Bibliotheca Lichenologica 105.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Landers, D. H., S. M. Simonich, D. Jaffe, L. H. Geiser, D. H. Campbell, A. Schwindt, C. Schreck, M. Kent, H. E. Taylor, K. Hageman, S. Usenko, L. Ackerman, J Schrlau, N Rose, T Blett, M. M. Erway. 2010. Western Airborne Contaminants Assessment Project (WACAP): An interdisciplinary evaluation of the impacts of airborne contaminants in western US national parks. Environmental Science & Technology Environmental Science & Technology 44:855-859 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, LH, J Schrlau, SM Simonich, DA Glavich, KL Dillman. 2010. Lichens and conifer needles as indicators of airborne semi-volatile organic compounds in western North America. Biology of Lichens – Symbiosis, Ecology, Environmental Monitoring, Systematics, Cyber Applications. Thomas H. Nash III et al. (ed.): Bibliotheca Lichenologica 105:125–137.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Woodall C, Amacher M, Bechtold B, Coulston J, Jovan S, Mielke M, Perry CH, Randolph K, Ritters K, Schulz B, Smith G, Tkacz B, Will-Wolf S. 2010. Status and future of the forest health indicators program of the USA. Environmental Monitoring and Assessment 177: 419-436.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Pardo, LH, Fenn, ME, Goodale, CL, Geiser, LG, Driscoll, CT, Allen EB, Baron, J, Bobbink, R, Bowman, WD, Clark, C, Emmett, B, Gilliam, FS, Greaver, T, Hall, SJ, Lilleskov, EA, Liu, L, Lynch, J, Nadelhoffer, K, Perakis, SS, Robin-Abbott, MJ, Stoddard, J, Weathers, K, Dennis, RL. 2011. Effects of nitrogen deposition and empirical nitrogen critical loads for ecoregions of the United States. Ecological Applications 21(8), 3049-3082.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, LH and K Nadelhoffer. 2011. The Taiga. Chapter 6, pp 49-60 In: Pardo, L.H.; Robin-Abbott, M.J.; Driscoll, C.T., eds. Assessment of nitrogen deposition effects and empirical critical loads of nitrogen for ecoregions of the United States. Gen. Tech. Rep. NRS-80. Newtown Square, PA: USDA Forest Service, Northern Research Station. 291 p. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Pardo, LH, LH Geiser, ME Fenn, CT Driscoll, CL Goodale, EB Allen, JS Baron, R Bobbink, WD Bowman, and 12 others. 2011. Synthesis. Chapter 19, pp 229-284 In: Pardo, L.H.; Robin-Abbott, M.J.; Driscoll, C.T., eds.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Geiser, LH, SE Jovan, DA Glavich, M Porter. 2010. Lichen-based critical loads for nitrogen deposition in western Oregon and Washington Forests, USA. Env. Poll. 158:2412-2421.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Jovan S, Riddell J, Padgett PE, Nash TH III. 2012. Eutrophic lichens respond to multiple forms of N: implications for critical levels and critical loads research. Ecological Applications 22: 1910-1922.
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Root, H. T., Geiser, L. H., Fenn, M. E., Jovan, S., Hutten, M. A., Ahuja, S, & McMurray, J. A. 2013. A simple tool for estimating throughfall nitrogen deposition in forests of western North America using lichens. Forest Ecology and Management, 306, 1-8. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                H.T. Root, L. H. Geiser, S. Jovan, P. Neitlich. 2015. Epiphytic macrolichen indication of air quality and climate in interior forested mountains of the Pacific Northwest, USA.  
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Simkin, S. E. et. al. 2016. Conditional vulnerability of plant diversity to atmospheric nitrogen deposition across the United States. PNAS 113(15): 4086–4091. 
                </ListItemText>
            </ListItem>         
          </List>
        </AccordionDetails>
      </Accordion> 

      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>International</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Matos et al. 2015. Lichen traits responding to aridity. Journal of Ecology 103:451-458.
                </ListItemText>
            </ListItem>     
          </List>
        </AccordionDetails>
      </Accordion> 
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
            <strong>Other Resources on the Web</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText>
                Air Quality and Lichens - Annotated Bibliography [web page internal to this site]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Identifying North American Lichens: A Guide to the Literature. [A downloadable, on-line guide to keys and other literature relevant to lichen identification, provided by Harvard University's Farlow Herbarium.]
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Recent Literature on Lichens. [This website contains a searchable database of publicatons in lichenology, and returns an annotated bibliographic list based on search criteria. Compiled by W.L. Culberson, R.S. Egan, and T.L. Esslinger.]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Environmental Protection Agency Technology Transfer Network. [Hosted by the EPA's Office of Air Quality Planning and Standards, this website contains links to technical information regarding many air-related topics, such as air quality monitoring, air toxics, and modeling. Many links to related sites and additional resources.]
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                National Agricultural Library's On-Line Access. [This website contains a searchable database of publications available through the National Agricultural Library. Publications must be requested, but copies are free of charge for USDA employees.]    
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                Furbish, C.E., L. Geiser, and C. Rector. 2000. Lichen-Air Quality Pilot Study for Klondike Gold Rush National Historical Park and the City of Skagway, Alaska. 47 pp. 
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                Nowak, D., Jovan, S., Branquinho, C., Ribeiro, M.C., Augusto, A. 2015. <em>Chapter 4 in Biodiversity and Human Health: A state-of-knowledge review.</em> Secretariat of the Convention on Biological Diversity and the United Nations Environment Programme-World Conservation Monitoring Centre. CBD Technical Series. pp. 63-74.   
                </ListItemText>
            </ListItem>   
          </List>
        </AccordionDetails>
      </Accordion> 
  
        </Grid>


    )
}