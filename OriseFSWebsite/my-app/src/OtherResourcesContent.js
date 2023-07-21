import React, { useState, useEffect } from 'react';
import './App';
import './Reports.css';
import {Box, Container, Tabs, Tab, Typography, IconButton, List, ListItem, ListItemText,Menu, useTheme, useMediaQuery,MenuItem, MenuList, Stack, AppBar, Popper, Paper, Grid, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

export default function OtherResourcesContent({hidden, onButtonClick}) {

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
          <strong>General Lichen Resources</strong>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem >
                <ListItemText>
                Lichenland              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "https://ucmp.berkeley.edu/fungi/lichens/lichens.html" >{'Introduction to Lichens'}</Link>
                
                 </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Lichens of North America
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                Identifying North American Lichens: A Guide to Lichen Literature
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "https://www.bgbm.org/sipman/keys/default.htm" >{'Lichen Keys Available On-Line'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nmnh.si.edu/botany/projects/lichens/" >{'Smithsonian Lichen Page'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nybg.org/bsci/lichens/ozarks/" >{'Lichens of the Ozarks'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://ursus.maine.edu/record=b5600077~S1" >{'University of Maine Lichen Research Program'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://kancrn.org//so2/" >{'Lichens, Tardigrades, and SO2'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.soilcrust.org/" >{'Biological Soil Crusts'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.fia.fs.fed.us/lichen/default.asp" >{'Forest Inventory Assessment: Biomonitoring Air Quality with Lichens'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://avalon.unomaha.edu/lichens/" >{'Robert Egan&apos;s Homepage'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://bmccune.weebly.com/" >{'Bruce McCune&apos;s Homepage'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.tc.umn.edu/~wetmore/" >{'Clifford Wetmore&apos;s Homepage'}</Link>              
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
            <strong> Herbaria</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://lichenportal.org/portal/" >{'Consortium of North American Lichen Herbaria'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://botany.si.edu/" >{'National Museum of Natural History Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://osu.orst.edu/Dept/botany/herbarium/" >{'Oregon State  University Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://nhc.asu.edu/lherbarium/" >{'Arizona State  University Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://mlbean.byu.edu/ResearchCollections/Collections/Lichens.aspx/" >{'Brigham Young University Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.huh.harvard.edu/" >{'Harvard University Herbaria'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.tc.umn.edu/~wetmore/Herbarium/HERBHOME.htm" >{'University of Minnesota Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://ucjeps.berkeley.edu/" >{'University of California, Berkeley Herbaria'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.washington.edu/burkemuseum/collections/herbarium/index.php" >{'University of Washington Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://herbarium.dbs.umt.edu/" >{'University of Montana Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://plantsciences.montana.edu/department/biology/herbarium.html" >{'Montana State University Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://biology.boisestate.edu/snake-river-plains/" >{'Boise State University Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.biology.museums.ualberta.ca/CryptogamicHerbarium.aspx" >{'University of Alberta, Canada Cryptogamic Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nhm.ac.uk/botany/databases/clifford/index.html" >{'London Natural History Museum Herbarium'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://sciweb.nybg.org/science2/hcol/lena/index.asp.html" >{'New York Botanical Garden'}</Link>              
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
            <strong>Lichen Checklists</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://www.ndsu.nodak.edu/instruct/esslinge/chcklst/chcklst7.htm" >{'Checklist of the Lichen-forming, Lichenicolous and Allied Fungi of North America'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://lichenportal.org/portal/projects/index.php?proj=500" >{'Checklists of Lichens in the National Parks'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nybg.org/bsci/lichens/ozarks/ozark_checklist.html" >{'Checklist of Lichens in the Ozarks'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.ut.ee/lichens/fce.html" >{'Lichenized, lichenicolous and allied fungi of Estonia'}</Link>              
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
            <strong>Lichen Organizations and Research Groups</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://abls.org/" >{'American Bryological and Lichenological Society'}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.lichenology.org/" >{'International Association of Lichenologists'}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.thebls.org.uk/" >{'The British Lichen Society'}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://ucjeps.berkeley.edu/rlmoe/cals.html" >{'The California Lichen Society'}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nwlichens.org/" >{'Northwest Lichenologists'}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://bmccune.weebly.com/lichen-bryo-seminar.html" >{'Oregon State University Lichen and Bryophyte Research Group'}</Link>              
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
            <strong>Journals and Newsletters</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://journals.cambridge.org/action/displayJournal?jid=LIC" >{<em>'The Lichenologist'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.borntraeger-cramer.de/j/international-journal-of-mycology-and-lichenology/" >{<em>'International Journal of Bryology and Lichenology'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.bioone.org/perlserv/?request=get-archive&issn=0007-2745" >{<em>'The Bryologist'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://bryology.org/html/publications.html" >{<em>'The Bryological Times'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.borntraeger-cramer.de/j/advances-in-bryology/" >{<em>'Advances in Bryology'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "https://sites.google.com/a/abls.org/abls/events-publications-and-media/journals" >{<em>'Evansia'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.mycotaxon.com/" >{<em>'Mycotaxon'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://hattorilab.org/en/publication/" >{<em>'Journal of the Hattori Botanical Laboratory'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.cryptogamie.com/" >{<em>'Cryptogamie, Bryologie-Lichenologie'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://link.springer.com/journal/13199" >{<em>'Symbiosis'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.lindbergia.org/" >{<em>'Lindbergia'</em>}</Link>              
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                <Link href = "http://www.arctoa.ru/en/" >{<em>'Arctoa'</em>}</Link>              
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                <Link href = "http://www.briolat.org/briolatina/index.htm" >{<em>'Briolatina'</em>}</Link>              
                </ListItemText>
            </ListItem>  
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nhm.ac.uk/hosted_sites/bbstbg/" >{<em>'Tropical Bryology'</em>}</Link>              
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                <Link href = "http://sweetgum.nybg.org/science/op/" >{<em>'Opuscula Philolichenum'</em>}</Link>              
                </ListItemText>
            </ListItem>   
            <ListItem>
                <ListItemText>
                <Link href = "http://nhm2.uio.no/botanisk/lav/Graphis/GS.PHP" >{<em>'Graphis Scripta'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://www.pnwfungi.org/index.php/pnwfungi/index" >{<em>'North American Fungi'</em>}</Link>              
                </ListItemText>
            </ListItem> 
            <ListItem>
                <ListItemText>
                <Link href = "http://californialichens.org/society-bulletin/" >{<em>'Bulletin of the California Lichen Society'</em>}</Link>              
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
            <strong>Human Resources</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://www.fs.fed.us/air/technical/class_1/contacts.php" >{'Directory of USDA Forest Service Air Program Managers'}</Link>              
                </ListItemText>
        </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://abls.org/" >{'American Bryological and Lichenological Society Membership Directory'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.lichenology.org/" >{'International Association of Lichenologists Directory'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://sweetgum.nybg.org/science/op/" >{'Oregon State University Lichen and Bryophyte Research Group Member Directory'}</Link>              
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
            <strong>Lichen Resources from Outside North America</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://www.opalexplorenature.org/airsurvey" >{'OPAL - Using Lichens in Citizen Science'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://dbiodbs.univ.trieste.it/" >{'The Information System on Italian Lichens'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://members.chello.at/johannes.pruegger/uni/slovenia/" >{'Lichen Biodiversity in Slovania'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nhm.ac.uk/take-part/identify-nature/lichen-id-guide/lichens.dsml" >{'London Natural History Museum: Lichens'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nhm.ac.uk/jdsml/nature-online/lichen-id-guide/index.dsml" >{'Guide to Lichens on Twigs (Great Britain)'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://nhm2.uio.no/botanisk/nxd/lav/nld_e.htm" >{'Norwegian Lichen Database'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.nrm.se/theswedishmuseumofnaturalhistory/researchandcollections/botany/cryptogamicbotany/collections/lichens.651_en.html" >{'Swedish Museum of Natural History: Lichen Collections'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.b-s-p.org/program/aquality.htm" >{'Baltic Sea Project Lichen Biomonitoring Study'}</Link>              
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
            <strong>Lichen Media</strong>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
        <ListItem>
                <ListItemText>
                <Link href = "http://www.opb.org/television/programs/ofg/segment/lichen/" >{'Oregon Field Guide: Lichen'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "https://itunes.apple.com/us/app/lichen-guide/id610221541?mt=8" >{'Michael Hicks NW Lichen Guide for iphone'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "https://www.androidpit.com/app/com.lichen.guide" >{'Michael Hikes NW Lichen Guide for Android'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://citizenscience.cs.mtu.edu/websites/lichen/dev/" >{'Exploring Lichens and Air Quality'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "https://www.androidpit.com/app/com.lichen.guide" >{'Lichens are under threat from climate and habitat changes. Should we care? A discussion with James Lendemer and Jessica Allen'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.bing.com/videos/search?q=lichen+videos&adlt=strict%2cstrict%2cstrict%2cstrict&view=detail&mid=502D9A8159D710EAD7CF502D9A8159D710EAD7CF&rvsmid=502D9A8159D710EAD7CF502D9A8159D710EAD7CF&fsscr=0&FORM=VDFSRV" >{'Lichen time lapse video'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.bing.com/videos/search?q=lichen+videos&adlt=strict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict&view=detail&mid=A4BABFAA103EBA92B489A4BABFAA103EBA92B489&rvsmid=502D9A8159D710EAD7CF502D9A8159D710EAD7CF&fsscr=0&FORM=VDFSRV" >{'Lichen Growth Form video'}</Link>              
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Link href = "http://www.bing.com/videos/search?q=lichen+videos&adlt=strict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict%2cstrict&view=detail&mid=110C2DE57B11CC48EE87110C2DE57B11CC48EE87&rvsmid=502D9A8159D710EAD7CF502D9A8159D710EAD7CF&fsscr=-1320&FORM=VDFSRV" >{'Growth rates of lichen on cemetery stones Anne Pringle'}</Link>              
                </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>    
  
        </Grid>


    )
}