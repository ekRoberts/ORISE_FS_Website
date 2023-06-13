import React, { useState, useEffect } from 'react';
import './App';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Divider,List, ListItem, ListItemText, Container} from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';


const images = [];

function importAll(r) {
    r.keys().map(item => { images[item.replace('./', './pacificLichenPictures/')] = r(item); });
  console.log(images)
  console.log(images['./pacificLichenPictures/Ahtiana_pallidula_graph.jpeg'])
}

importAll(require.context('./pacificLichenPictures', false, /\.(png|jpe?g|svg)$/));



export default function PacificNorthSensitivityContent({hidden, onButtonClick}) {
    return(
<Grid hidden={hidden}>
<Typography variant="h4" sx={{fontWeight: 'bold', marginBottom:5}}>Air Pollution Sensitivity Ratings for Macrolichens in the US Pacific NW</Typography>
<Typography> Nitrogen-containing air pollutants are the chief pollutants of widespread ecological concern in the Pacific Northwest. The ratings below are based on regional studies by the US Forest Service of western Oregon and Washington. Other pollutants such as sulfur dioxide, fluorine, ozone, metals, and acidic deposition are of localized concern. We report literature ratings for these pollutants. See Understanding Air Pollution Effects on Lichens for additional details about regional emissions, lichen responses, and calculating and using the ratings. All literature cited here can be found in our annotated bibliography. </Typography>
<Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Nitrogen Requirement: O = oligotroph, M = mesotroph, E = eutroph</Typography>
<Typography> <strong>Oligotrophs</strong> are most abundant under nitrogen deposition regimes averaging 0.5 to 2.5 kg N/ha/yr and are increasingly difficult to find as deposition increases above 2.5. <strong>Mesotrophs</strong> prefer a moderate nutrient regime, 2.5 to 4.5 kg N/ha/yr, with declines in frequency above 4.5 and below 2.5. <strong>Eutrophs</strong> tolerate and are usually enhanced by N deposition loads above 4.5 kg N/ha/yr. Highest mean annual nitrogen deposition estimates for the PNW from 1990-1999 were about 8 kg N/ha/yr; lowest levels were less than 1 kg ha/yr (Porter 2006).</Typography>
<Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Sulfur Dioxide Sensitivity: S = sensitive, I = intermediate, T = tolerant</Typography>
<Typography>Sulfur dioxide sensitive lichens tolerate mean annual concentrations up to 5 to 15 ppb SO2; lichens of intermediate sensitivity tolerate between 15 to 30 ppb SO2; lichens rated 'tolerant' can tolerate mean annual SO2 concentrations greater than 30 ppb.</Typography>
<Typography>To learn about a particular species of lichen, click on the name. To browse through all of the listed species alphabetically, just scroll further down on this page. Taxonomy follows the 21st North American Checklist.</Typography>

<Container>
<Typography sx={{fontSize:20,fontWeight: 'bold', marginTop: 5}}> <em>Ahtiana pallidula</em></Typography>
<img src={images['./pacificLichenPictures/Ahtiana_pallidula_picture.jpeg']} alt={`./pacificLichenPictures/Ahtiana_pallidula_picture`} width="300" height="200"/>
<img src={images['./pacificLichenPictures/Ahtiana_pallidula_graph.jpeg']} alt={`./pacificLichenPictures/Ahtiana_pallidula_graph`} width="300" height="200"/>
<Typography><strong>Nitrogen Deposition</strong></Typography>
<Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.9 kg N per ha per y (McCune and Geiser 2009).</Typography>
<Typography><strong>Habitat</strong></Typography>
<Typography sx={{marginLeft:5}}>On well-lit branches beneath an open canopy or on branches in the upper crown; mesic forests at low to high elevations. PNW: widespread in mountains.</Typography>
</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
<Typography sx={{ fontSize:20,fontWeight: 'bold', m: 1 }}> <em>Ahtiana sphaerosporella</em></Typography>
<img src={images['./pacificLichenPictures/Ahtiana_sphaerosporella_picture.jpeg']} alt={`./pacificLichenPictures/Ahtiana_sphaerosporella_picture`} width="300" height="200"/>
<img src={images['./pacificLichenPictures/Ahtiana_sphaerosporella_graph.jpeg']} alt={`./pacificLichenPictures/Ahtiana_sphaerosporella_graph`} width="300" height="200"/>
<Typography><strong>Nitrogen Deposition</strong></Typography>
<Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N/ha/y (McCune and Geiser 2009).</Typography>
<Typography><strong>Habitat</strong></Typography>
<Typography sx={{marginLeft:5}}>On bark or wood of conifers. Subalpine to lower elevation montane forests. PNW: Infrequent in the eastern Cascades of OR and WA and western Cascades of s OR.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Alectoria imshaugii</em></Typography>
    <img src={images['./pacificLichenPictures/Alectoria_imshaugii_picture.jpeg']} alt={`./pacificLichenPictures/Alectoria_imshaugii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Alectoria_imshaugii_graph.jpeg']} alt={`./pacificLichenPictures/Alectoria_imshaugii_graph`} width="300" height="200"/>  
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>moderate N requirement, peak detection frequency occurs at 1.9 kg N/ha/y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of both conifers and hardwoods. PNW: common in forests east of the Cascade Range crest and in the western Cascades of central & southern OR; sporadic in Coast Range. Ranges from southern British Columbia to California, east to western Montana and the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Alectoria sarmentosa</em></Typography>
    <img src={images['./pacificLichenPictures/Alectoria_sarmentosa_picture.jpeg']} alt={`./pacificLichenPictures/Alectoria_sarmentosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Alectoria_sarmentosa_graph.jpeg']} alt={`./pacificLichenPictures/Alectoria_sarmentosa_graph`} width="300" height="200"/>  
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per yr (McCune and Geiser 2009)</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: 5-15 ppb (Peterson et al. 1992); present at 12.6-19.2/ absent from 19.2-28.9 ppb (LeBlanc et al. 1974); see also Kuusinen et al. (1990).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood, rarely on rock or mosses over rock. PNW: One of the most common lichens of PNW forests; widespread in all mountain ranges but rare in the Willamette valley, Puget trough and Columbia Basin. Ranges from Alaska to California, east to Alberta and Montana; mainly west of the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Alectoria vancouverensis</em></Typography>
    <img src={images['./pacificLichenPictures/Alectoria_vancouverensis_graph.jpeg']} alt={`./pacificLichenPictures/Alectoria_vancouverensis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: probably 5-20 ppb, similar to A. sarmentosa.</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Most common in the transition between valley forests and mountain forests (generally below about 700 m); often occurring in the same stands as A. sarmentosa, but usually dropping out below the elevation of highest dominance by A. sarmentosa. Coastal British Columbia south to California, in and west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Anaptychia crinalis</em></Typography>
    <img src={images['./pacificLichenPictures/Anaptychia_crinalis_picture.jpeg']} alt={`./pacificLichenPictures/Anaptychia_crinalis_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present to 15 ppb/absent at 19 ppb. Rating by Wetmore (1983) based on Deruelle (1977 & 1978); Hawksworth & Rose (1970 & 1976); Johnsen & Søchting (1973); Jürgling (1975); and Vick & Bevan (1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood mainly north of Washington on the immediate coast; rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Arctoparmelia incurva</em></Typography>
    <img src={images['./pacificLichenPictures/Arctoparmelia_incurva_picture.jpeg']} alt={`./pacificLichenPictures/Arctoparmelia_incurva_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Purvis, et.al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock. Mainly boreal and arctic with rare disjuncts to southern BC and the WA Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria bicolor</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_bicolor_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_bicolor_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N/ha/y (McCune & Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On coastal trees rocks, and mossy turfs; Alaska to northern Oregon. Rare to infrequent in the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria capillaris</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_capillaris_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_capillaris_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_capillaris_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_capillaris_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: 5-15 ppb (Peterson et al. 1992); (Ryan 1990); present between 20.8-31.2 ppb (LeBlanc et al. 1974).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood of both conifers and hardwoods but typically on conifers. Most common in understory of Abies, Picea, Pseudotsuga, and Thuja forests. PNW Range: Common in moist forests of all mountain ranges from low to high elevations. Alaska to northern California, east to Newfoundland, with a disjunct in Colorado.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria fremontii</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_fremontii_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_fremontii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_fremontii_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_fremontii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.9 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood of conifers, occasionally on hardwoods. Highest biomass occurs in dry, open Pinus and Pseudotsuga forests, often forming long thick bears. From low elevation to timberline. PNW Range: widespread in eastern OR and WA forested mountains and in forests of SW OR, rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria friabilis</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_friabilis_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_friabilis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_friabilis_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_friabilis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a low N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Sigal and Nash 1983).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at  &lt; 20 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark of both conifers and hardwoods, rarely on rocks. West of the Cascade crest, this species is widely but thinly distributed from valley bottoms to mountain forests, occasionally in old orchards and riparian hardwood forests (where it is the most common Bryoria species. East of the Cascade crest, this species is an old-growth associate, most often found in moist older forests at lower elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria furcellata</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_furcellata_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_furcellata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_furcellata_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_furcellata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N/ha/y (McCune & Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 5-10/absent at 10-20 ppb SO2 (LeBlanc et al. 1972a)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Prostrate on rock, soil or alpine sod.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria fuscescens</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_fuscescens_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_fuscescens_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_fuscescens_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_fuscescens_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}> Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: (Nash and Wirth 1988); (Purvis et al. 1992); present at 23 ppb/ absent at 26 ppb (Hawksworth and Rose 1970 & 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On conifer bark or wood, occasionally on rocks or hardwoods.Common in forests of the Cascade Range and eastern OR and WA but infrequent in the Coast Ranges and Olympics. This is the most common sorediate Bryoria species in the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria glabra</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_glabra_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_glabra_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_glabra_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_glabra_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}> Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: Present at 10-35 ppb (Ryan and Rhoades 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On conifer bark or wood, in coastal and mountain conifer forests, mainly low to high elevations. Found from Alaska to California, east to Alberta and Montana; most common in northern coastal areas, uncommon inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria implexa</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: Present at 5-15 ppb (Ryan and Rhoades 1992); present at 4-11 ppb (Trass 1973)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On conifer bark and wood, Alaska to eastern N America south to northern Idaho and northwest Montana; rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria pseudocapillaris</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_pseudocapillaris_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_pseudocapillaris_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_pseudocapillaris_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_pseudocapillaris_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed coastal trees, northern OR and California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria pseudofuscescens</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_pseudofuscescens_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_pseudofuscescens_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_pseudofuscescens_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_pseudofuscescens_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist valleys to mountains; eastern Cascades most in Abies grandes-Thuja habitats to subalpine (Abies lasiocarpa) forests; in a broader range of habitats in the western Cascades and Coast Ranges.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria spiralifera</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_spiralifera_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_spiralifera_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_spiralifera_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_spiralifera_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed coastal trees; endemic to the Pacific Coast, largest population is in Humboldt Co., California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria subcana</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_subcana_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_subcana_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_subcana_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_subcana_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed coastal trees; endemic to the Pacific Coast, largest population is in Humboldt Co., California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Bryoria trichodes</em></Typography>
    <img src={images['./pacificLichenPictures/Bryoria_trichodes_picture.jpeg']} alt={`./pacificLichenPictures/Bryoria_trichodes_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Bryoria_trichodes_graph.jpeg']} alt={`./pacificLichenPictures/Bryoria_trichodes_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}> Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to intermediate: present at 5.4.8-9.6/ absent at 9.6-19.2 ppb (LeBlanc et al 1972a).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood of conifers. Wet coastal forests at low to high elevations. Alaska to Santa Cruz, mainly in the Coast Range, typically west of the Cascade crest in Oregon and Washington.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Candelaria concolor</em></Typography>
    <img src={images['./pacificLichenPictures/Candelaria_concolor_picture.jpeg']} alt={`./pacificLichenPictures/Candelaria_concolor_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Candelaria_concolor_graph.jpeg']} alt={`./pacificLichenPictures/Candelaria_concolor_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen Deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present 4.8-14.8/absent 18.5 ppb (Hawskworth and Rose 1970 & 1976, LeBlanc et al. 1972a, Trass 1973); see also (Crock et al. 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: 18 (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On nutrient-rich bark or wood (mainly hardwoods), rarely on rock. PNW: In the Willamette Valley, Puget Trough and along the Columbia River, and in forests bordering the Columbia Plateau. Often in urban, suburban, and agricultural areas. Widespread.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cavernularia hultenii</em></Typography>
    <img src={images['./pacificLichenPictures/Cavernularia_hultenii_picture.jpeg']} alt={`./pacificLichenPictures/Cavernularia_hultenii_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on conifers; in moist conifer forests at low to medium elevations. Found from Alaska to California, west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cavernularia lophyrea</em></Typography>
    <img src={images['./pacificLichenPictures/Cavernularia_lophyrea_picture.jpeg']} alt={`./pacificLichenPictures/Cavernularia_lophyrea_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Cavernularia_lophyrea_graph.jpeg']} alt={`./pacificLichenPictures/Cavernularia_lophyrea_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on conifers; in low to mid-elevation conifer forests. PNW: Fairly frequent in the Coast Range, especially in semi-open coastal Pinus contorta and Picea sitchensis forests; rare in the western Cascades. Range extends from coastal Alaska to California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cetraria islandica</em></Typography>
    <img src={images['./pacificLichenPictures/Cetraria_islandica_picture.jpeg']} alt={`./pacificLichenPictures/Cetraria_islandica_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 10-35 ppb (Ryan and Rhoades 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Widespread boreal and subalpine to arctic-alpine; occasional in Oregon and Washington.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cetraria muricata</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: Present from 10 to &lt; 30 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On alpine or subalpine sod at high elevations, occasionally on moss and humus over rock at lower elevations. Range is from Alaska to California and Colorado.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cetrelia cetrariodes</em></Typography>
    <img src={images['./pacificLichenPictures/Cetrelia_cetrariodes_picture.jpeg']} alt={`./pacificLichenPictures/Cetrelia_cetrariodes_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Cetrelia_cetrariodes_graph.jpeg']} alt={`./pacificLichenPictures/Cetrelia_cetrariodes_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 6.1 kg N per ha per y butthis lichen is also common at sites with less than 1.5 kg N per ha per y.</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist riparian and valley bottom forests, especially older Alnus rubra stands over seepy or swampy ground. Most frequent along the immediate coast and west-side of the Coast Ranges, the Columbia River Gorge, foothills of the western Cascades, Puget Trough, Willamette Valley.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia arbuscula</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_arbuscula_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_arbuscula_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 10-35 ppb (Ryan and Rhoades 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Ross and Nash 1983).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: to heavy metals (Folkeson and Andersson-Bringmark 1988); to Zn/Cu (Tyler 1989)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on soil, humus, or soil over rock; circumpolar south to Washington, Montana and Colorado; uncommon, mostly in cool rocky sites at low elevations.</Typography>
</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia bellidiflora</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_bellidiflora_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_bellidiflora_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Cladonia_bellidiflora_graph.jpeg']} alt={`./pacificLichenPictures/Cladonia_bellidiflora_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 5-35 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On mossy rocks and on bark, wood and soil. Most frequent on cool, moist talus slopes and outcrop areas, including old lava flows; occasional in forests and sand dunes. Found in and west of the Cascade Range, rare inland in British Columbia and Washington.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia carneola</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_carneola_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_carneola_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Cladonia_carneola_graph.jpeg']} alt={`./pacificLichenPictures/Cladonia_carneola_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988); (Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on humus-rich soil, stumps, and rotten wood, occasionally on tree trunks. Widespread in North America, fairly common throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia cenotea</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_cenotea_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_cenotea_picture`} width="300" height="200"/>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988); (Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on rotten logs, tree bases, and humus-rich soil; in cool, moist forests from valleys to subalpine, in both shaded and semi-open habitats. Range is widespread, common east of the Cascade crest, rare west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia chlorophaea</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_chlorophaea_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_chlorophaea_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 4.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 10-35 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988); (Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on a variety of substrates including soil, humus, bark, rotten wood, and mosses or detritus over rock. Common in many habitats, most often where partly shaded or exposed. Range is cosmopolitan, common in the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia coniocraea</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_coniocraea_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_coniocraea_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 13-20 ppb/absent at 20-29 ppb (LeBlanc 1969, LeBlanc et al. 1972a, LeBlanc et al. 1974).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rotten wood, tree bases, humus, and occasionally soil. PNW: OR & WA Cascades, Coast Ranges, and Olympic P.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia fimbriata</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_fimbriata_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_fimbriata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N tolerance, peak detection frequency at 6.1 kg per ha per y.</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 5 ppb/absent at 5-10 ppb (LeBlanc et al. 1972a).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>In a broad array of habitats. PNW: Widespread throughout OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia furcata</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_furcata_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_furcata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Cladonia_furcata_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_furcata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 10 to &lt;30 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Folkeson and Andersson-Bringmark 1988).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on soil, moss, and humus, occasionally on rotten wood or tree bases; in moist coastal forests at low to mid elevations, frequent on partly shaded roadcuts. Range is from Alaska to California, very common west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia gracilis</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_gracilis_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_gracilis_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: present from 10 to &lt;30 ppb (Ryan and Rhoades 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, humus, soil over rock, or rotten logs; widespread in North America.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia macilenta</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_macilenta_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_macilenta_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, tree trunks, and rotten wood; widespread but uncommon, coastal Alaska to California. PNW: mostly west of the Cascade Ranges crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia mitis</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_mitis_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_mitis_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 5-35 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &lt; 65 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on soil, humus, or soil over rock; on outcrops and talus slopes, mainly cool, moist slopes at low elevations. Range is circumpolar south to Oregon, Idaho, Wyoming and eastern US; uncommon.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia norvegica</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_norvegica_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_norvegica_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rotten wood and tree bases in humid to mesic forests: Alaska to Oregon.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia ochrochlora</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_ochrochlora_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_ochrochlora_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988); (Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on rotten wood, tree bases, and humus and occasionally soil. This species is relatively indiscriminant, occurring in a wide array of forests, in both shaded and exposed habitats. Range is widespread, found throughout Pacific Northwest forests, but common only west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia pyxidata</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_pyxidata_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_pyxidata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988); (Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on mineral soil or soil or moss over rock, occasionally on humus; in a wide array of open or semi-open habitats, in some cases where recently disturbed, including roadcuts and clearcuts, but also on undisturbed, open, rocky sites; at all elevations. Range is widespread.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia rangiferina</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_rangiferina_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_rangiferina_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 5-35 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: ? (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Brown and Smirnoff 1978); (Ross and Nash 1983).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: to Cu/Zn (Tyler 1989); (Folkeson and Andersson-Bringmark 1988).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on humus or soil over rock; on outcrops and talus slopes, often on cool, moist slopes and in narrow valleys and canyon slopes. Range is circumpolar south to Oregon and Montana; rare in the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia squamosa</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_squamosa_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_squamosa_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 4.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to Zn/Cu (Folkeson and Andersson-Bringmark 1988);(Tyler 1989).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Grows on soil, soil over rock, rotten logs, and tree trunks; found in moist forests at low to mid elevations. Range is widespread in North America. PNW: common west of the Cascade crest, rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia transcendens</em></Typography>
    <img src={images['./pacificLichenPictures/Cladonia_transcendens_picture.jpeg']} alt={`./pacificLichenPictures/Cladonia_transcendens_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a broad N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>In both shaded and open sites, including both clear-cuts and old-growth forests, at low to high elevations; eastern Cascades it is infrequent and largely restricted to moist, partly shaded locations, often near streams or in cool canyons.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia umbricola</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Uncommon in low- to mid-elevation moist forests in canyons, stream bottoms and valleys.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cladonia verruculosa</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.9 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>A wide variety of open to partly open disturbed sites, including roadcuts, clearcuts, and stabilized dunes, in and around areas of low- to mid-elevation moist forests, occasional in the steepe fringes of foresed ecosystems.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Cetraria muricata</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: Present from 10 to &lt;30 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On alpine or subalpine sod at high elevations, occasionally on moss and humus over rock at lower elevations. Range is from Alaska to California and Colorado.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Collema nigrescens</em></Typography>
    <img src={images['./pacificLichenPictures/Collema_nigrescens_picture.jpeg']} alt={`./pacificLichenPictures/Collema_nigrescens_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Collema_nigrescens_graph.jpeg']} alt={`./pacificLichenPictures/Collema_nigrescens_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ryan 1990)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark of broad-leaved trees and shrubs; in low-elevation hardwood forests, often in riparian areas. Range is from Alaska to California, west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Erioderma sorediatum</em></Typography>
    <img src={images['./pacificLichenPictures/Erioderma_sorediatum_picture.jpeg']} alt={`./pacificLichenPictures/Erioderma_sorediatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Erioderma_sorediatum_graph.jpeg']} alt={`./pacificLichenPictures/Erioderma_sorediatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Coastal shrubs and trees; rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Esslingeriana idahoensis</em></Typography>
    <img src={images['./pacificLichenPictures/Esslingeriana_idahoensis_picture.jpeg']} alt={`./pacificLichenPictures/Esslingeriana_idahoensis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Esslingeriana_idahoensis_graph.jpeg']} alt={`./pacificLichenPictures/Esslingeriana_idahoensis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Occasional in the Coast ranges; common in the Medford valley, forests of the western OR Cascades, the eastern slopes of the OR & WA Cascades, the Wallowa & Selkirk ranges, and in moist forests on the western slopes of the Rocky Mountains.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Evernia divaricata</em></Typography>
    <img src={images['./pacificLichenPictures/Evernia_divaricata_picture.jpeg']} alt={`./pacificLichenPictures/Evernia_divaricata_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 4 ppb (Trass 1973).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On conifers in mesic forests; Rocky Mountains from Alberta to New Mexico and Arizona. Rare in OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Evernia mesomorpha</em></Typography>
    <img src={images['./pacificLichenPictures/Evernia_mesomorpha_picture.jpeg']} alt={`./pacificLichenPictures/Evernia_mesomorpha_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 10-23 ppb/absent at 29 ppb (LeBlanc 1969, LeBlanc et al. 1972a).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Generally on conifers. Circumpolar boreal; very rare west of the Continental Divide but more frequent north into Canada.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Evernia prunastri</em></Typography>
    <img src={images['./pacificLichenPictures/Evernia_prunastri_picture.jpeg']} alt={`./pacificLichenPictures/Evernia_prunastri_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Evernia_prunastri_graph.jpeg']} alt={`./pacificLichenPictures/Evernia_prunastri_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: absent or rare at levels &lt; 22.2 ppb (Purvis et al. 1992); present to 22 ppb (Hawksworth and Rose 1970); moderately sensitive (Kuusinen et al. 1990); present at 18.5-24.1 ppb (Hawkworth et al. 1973, Morgan-Huws et al. 1973, Trass 1973); see also (Diamantopoulos et al. 1992 and Nash and Wirth 1988).  Notes: More sensitive to S deposition on conifers than on deciduous trees with less acidic bark (Kuusinen et al. 1990). High concentration and long exposure (fumigation) = reduced photosynthesis and respiration, chlorophyll destruction (Sanz et al. 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992); (Perkins & Millar 1987a). Notes: Bleaching (Perkins & Millar 1987a)..</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppm (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Notes: Slightly &lt; C-fixation (photosynthesis) w/ Zn sol. (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On wood or bark, especially hardwood trees and shrubs, occasionally on conifers. Ubiquitous in most habitats at low elevations west of the Cascade Range crest, especially hardwood forests, savannas, and in urban and agricultural areas; less abundant in lower mountain forests where it is best developed in pockets of hardwoods; east of the Cascade crest almost entirely restricted to riparian forests and shrubby areas. Most common west of the Cascade crest, sporadic east of the crest to Idaho, rarely inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Flavocetraria nivalis</em></Typography>
    <img src={images['./pacificLichenPictures/Flavocetraria_nivalis_picture.jpeg']} alt={`./pacificLichenPictures/Flavocetraria_nivalis_picture`} width="300" height="200"/>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Common on soil in arctic-alpine and boreal sites, rarely subalpine. Range is circumpolar, in the west from Washington to New Mexico</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Flavoparmelia caperata</em></Typography>
    <img src={images['./pacificLichenPictures/Flavoparmelia_caperata_picture.jpeg']} alt={`./pacificLichenPictures/Flavoparmelia_caperata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of hardwoods. Low elevation forests,oak savannas, and other valley woodlands. PNW: Rare, look for it in the Puget Trough, Columbia River Gore, and Willamette Valley.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Flavopunctelia flaventior</em></Typography>
    <img src={images['./pacificLichenPictures/Flavopunctelia_flaventior_picture.jpeg']} alt={`./pacificLichenPictures/Flavopunctelia_flaventior_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of hardwoods. Low elevation forests,oak savannas, and other valley woodlands. PNW: Rare, look for it in the Puget Trough, Columbia River Gore, and Willamette Valley.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Fuscopannaria leucostictoides</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of both hardwoods and conifers. Edges of coastal forests, oak savannas, and other valley and foothills woodlands. PNW: Infrequent in the OR Coast Range, Olympics, western Cascades of southern WA and northern OR. British Columbia to California, occuring west of the Cascade Range crest but with rare disjuncts in Idaho.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Fuscopannaria mediterranea</em></Typography>
    <img src={images['./pacificLichenPictures/Fuscopannaria_mediterranea_picture.jpeg']} alt={`./pacificLichenPictures/Fuscopannaria_mediterranea_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a broad N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mainly on bark, sometimes on mossy rock or soil. Occasional in the western Cascades and Coast ranges at low elevations but rare east of the Cascade crest outside of the Columbia River Gorge NSA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Fuscopannaria pacifica</em></Typography>
    <img src={images['./pacificLichenPictures/Fuscopannaria_pacifica_picture.jpeg']} alt={`./pacificLichenPictures/Fuscopannaria_pacifica_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist to wet forests, in deep shade to somewhat open sites, low to mid elevations. PNW: Common west of the Cascade crest, especially in OR.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Heterodermia leucomela</em></Typography>
    <img src={images['./pacificLichenPictures/Heterodermia_leucomela_picture.jpeg']} alt={`./pacificLichenPictures/Heterodermia_leucomela_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Heterodermia_leucomela_graph.jpeg']} alt={`./pacificLichenPictures/Heterodermia_leucomela_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Uncommon on conifers on the immediate coast from California to British Columbia; especially on windswept headlands.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia apinnata</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_apinnata_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_apinnata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_apinnata_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_apinnata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist conifer forests low to high elevations. PNW: Abundant in western OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia duplicata</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_duplicata_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_duplicata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Cool, moist coastal forests; low elevation to coastal mountaintops. PNW: Infrequent in north OR Coast Range and west side OR Cascades, more common on the western slopes of the northern WA Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia enteromorpha</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_enteromorpha_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_enteromorpha_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_enteromorpha_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_enteromorpha_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to tolerant: from 10 to &lt;30 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to tolerant: from 15 to &lt;65 ppb (Ryan and Rhodes 1992, Ross and Nash 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on conifers. In forests of all elevations. Range is from Alaska to California, very common west of the Cascade crest, uncommon to rare east of the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia heterophylla</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_heterophylla_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_heterophylla_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_heterophylla_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_heterophylla_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Best developed in open conifer forests along the immediate coast. On tree and shrub branches, occupying both well-lit and shaded branches; approaching the open coast it becomes increasingly restricted to sheltered microsites.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia imshaugii</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_imshaugii_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_imshaugii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_imshaugii_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_imshaugii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: (Ryan 1990); ?(Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 15 to &lt;65 ppb. (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of low elevation to subalpine forests and savannas, occasionally in steppe (on fences and Artemesia); in moist dense forests mostly restricted to the upper canopy. Range extends from Alaska to California, inland to Alberta, Montana, and Wyoming, common throughout the Pacific Northwest except on the immediate coast, most common east of the Cascade crest and west of the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia inactiva</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_inactiva_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_inactiva_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_inactiva_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_inactiva_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.8 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Low to high-elevation moist conifer forests, more shade tolerant than most other Hypogymnia species. PNW: one of the most abundant and widespread lichens of western OR and WA; infrequent east of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia metaphysodes</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_metaphysodes_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_inactiva_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_metaphysodes_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_inactiva_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per y (McCune and Geiser 2009</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist forests at low to high elevations. PNW: One of the most common Hypogymnia sp. of eastern OR and WA but also common on the western slopes of the Cascades; infrequent in the Coast Ranges, Olympics, and west-side valleys.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia occidentalis</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_occidentalis_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_occidentalis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_occidentalis_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_occidentalis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist low-elevation to subalpine forests; one of the most common Hypogymnia species in Abies grandes, moist Pseudotsuga, and Thuja forests between the Cascade and Rocky Mountain crests; also common west of the Cascade crest but less so than other H. apinnata, H. enteromorpha and H. inactiva.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia oceanica</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_oceanica_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_oceanica_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_oceanica_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_oceanica_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a low to moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist Pseudotsuga-Tsuga forests of the western Cascades Ranges; rare in Coast ranges and Olympics.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia physodes</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_physodes_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_physodes_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_physodes_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_physodes_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 4.9 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: (Turk and Lange 1974); present at 19.2-26/absent at 29 ppb (Wetmore 1983 based on Deruelle 1978, Johnsen and S&oslash;chting 1973 & 1976; Jürgling 1975, LeBlanc 1969, LeBlanc et al. 1972a &1974, Margot 1973, Morgan-Huws et al. 1973, and Trass 1973); present at 22-26 ppb (Hawksworth and Rose 1970).

Tolerant: 10 to &lt;30 ppm (Peterson et al. 1992); (Nash and Wirth 1988); absent at levels &lt; 40 ppb (Purvis et al. 1992); semitolerant: 36-44 ppb (Johnsen and S&oslash;chting 1973); fairly tolerant (Kuusinen et al. 1990).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: (LeBlanc et al. 1971, Peterson et al. 1992); (Perkins and Millar 1987a).

Notes: Bleaching, turning red (Perkins & Millar 1987a).</Typography>
    <Typography><strong>Acidic deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: (Farmer et al.1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, occasionally on rock or mossy. Ubiquitous in forests at all elevations, often in nonforested habitats (steppe, shrub thickets, farmlands, etc.). Widespread, common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia rugosa</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_rugosa_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_rugosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_rugosa_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_rugosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist mid-elevation to subalpine forests west of the Continental Divide; often in mixed Abies and Tsuga mertensiana forests, sporadically down into the Pseudtuga-Tsuga heterophylla forest in cool sites.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypogymnia tubulosa</em></Typography>
    <img src={images['./pacificLichenPictures/Hypogymnia_tubulosa_picture.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_tubulosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Hypogymnia_tubulosa_graph.jpeg']} alt={`./pacificLichenPictures/Hypogymnia_tubulosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate to high N requirement, peak detection frequency occurs at 4.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 4-12 ppb (Trass 1973).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Perkins & Millar 1987a); ? (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Common in open to semi-open habitats at all elevations, including riparian areas, farm trees, urban areas, savannas, and wooded wetlands. Widespread, common throughout the forested parts of the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Hypotrachyna sinuosa</em></Typography>
    <img src={images['./pacificLichenPictures/Hypotrachyna_sinuosa_picture.jpeg']} alt={`./pacificLichenPictures/Hypotrachyna_sinuosa_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most common in moist forests at low to mid-elevations, from the coast to valleys to the western Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Kaernefeltia californica</em></Typography>
    <img src={images['./pacificLichenPictures/Kaernefeltia_californica_picture.jpeg']} alt={`./pacificLichenPictures/Kaernefeltia_californica_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Kaernefeltia_californica_graph.jpeg']} alt={`./pacificLichenPictures/Kaernefeltia_californica_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most common on open edges of Pinus contorta or Picea sitchensis forests within sight or sound of the ocean, quickly diminishing inland; coastal Alaska to California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Kaernefeltia merillii</em></Typography>
    <img src={images['./pacificLichenPictures/Kaernefeltia_merillii_picture.jpeg']} alt={`./pacificLichenPictures/Kaernefeltia_merillii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Kaernefeltia_merillii_graph.jpeg']} alt={`./pacificLichenPictures/Kaernefeltia_merillii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.9 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: (Skorepa and Vitt 1976).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present at &lt; 20-70 ppb (Ryan and Rhodes 1992);(Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on conifers (especially Pinus contorta, Larix and Pinus albicaulis), also on shrubs. Grows on well-lit branches in forests and on more open, exposed trees on rocky ridges; also in treetops of moist low-elevation forests; present at all forested elevations. Range is Yukon to California, inland to western Montana; most common between the Cascade and Continental Divides, found infrequently in the Coast Ranges south to southern Oregon and California; not present on the immediate coast.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{ fontSize:20,fontWeight: 'bold', m: 1 }}> <em>Leioderma sorediatum</em></Typography>
    <img src={images['./pacificLichenPictures/Leioderma_sorediatum_picture.jpeg']} alt={`./pacificLichenPictures/Leioderma_sorediatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leioderma_sorediatum_graph.jpeg']} alt={`./pacificLichenPictures/Leioderma_sorediatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Semi open habitats on the coast, most often in dune woodlands and deflation plains.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium brebissonii</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_brebissonii_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_brebissonii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leptogium_brebissonii_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_brebissonii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>In forests of the immediate coast; on trees.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium gelatinosum</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_gelatinosum_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_gelatinosum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leptogium_gelatinosum_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_gelatinosum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most often on mossy rock, especially near streams, rarely on mossy soil and bark. PNW: Widespread and common along streams in the western Cascades; infrequent east of the Cascades crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium lichenoides</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_lichenoides_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_lichenoides_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leptogium_lichenoides_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_lichenoides_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most commonly seen in outcrop and talus areas at low to mid elevations where it is often intermixed in moss cushions over rock; in both open and sheltered sites.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium palmatum</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_palmatum_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_palmatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leptogium_palmatum_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_palmatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Road cuts, roadsides, poorly re-vegetated areas in clear-cuts, outcrops and talus areas; low to mid elevations; populations on bark tend to be in hardwood stands at low elevations. PNW: western OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium polycarpum</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_polycarpum_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_polycarpum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.8 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Common in oak savannas and ash swamps in the valleys, frequent in foothill conifer and deciduous forests, sporadic at middle elevations. PNW: western OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium pseudofurfuraceum</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_pseudofurfuraceum_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_pseudofurfuraceum_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate to high N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, occasionally on rock; widespread in western N America, NW Territories to Mixico, inland to S Dakota.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Leptogium saturninum</em></Typography>
    <img src={images['./pacificLichenPictures/Leptogium_saturninum_picture.jpeg']} alt={`./pacificLichenPictures/Leptogium_saturninum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Leptogium_saturninum_graph.jpeg']} alt={`./pacificLichenPictures/Leptogium_saturninum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a moderate to high N requirement, peak detection frequency occurs at 4.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Usually on bark, most commonly deciduous trees and shrubs, occasionally on rock or moss over rock. Most frequent in moist riparian forests at low elevations; range is widespread.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Letharia columbiana</em></Typography>
    <img src={images['./pacificLichenPictures/Letharia_columbiana_picture.jpeg']} alt={`./pacificLichenPictures/Letharia_columbiana_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Letharia_columbiana_graph.jpeg']} alt={`./pacificLichenPictures/Letharia_columbiana_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &lt;30 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 15 to &lt;65 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood, rarely on rock. Common in subalpine forests, high plateaus and ridges to the timberline, and forests east of th Cascade crest. Rare west of the crest, in dry sites in the Willamette Valey and Puget trough.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Letharia vulpina</em></Typography>
    <img src={images['./pacificLichenPictures/Letharia_vulpina_picture.jpeg']} alt={`./pacificLichenPictures/Letharia_vulpina_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Letharia_vulpina_graph.jpeg']} alt={`./pacificLichenPictures/Letharia_vulpina_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate to high N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &lt;30 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 15 to &lt;65 ppb (Ryan and Rhodes 1992, Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood, rarely on rock. Found from low elevations to the timberline; often abundant on exposed dead decorticate branches and snags, occasionally in shaded closed forests, but in moist, old forests it is restricted to dry microsites, especially in the upper canopy. The range of this species is widespread throughout western North America; common throughout the Pacific Northwest, but most conspicuous east of the Cascade crest and in southern OR.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lichinodium canadense</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lobaria hallii</em></Typography>
    <img src={images['./pacificLichenPictures/Lobaria_hallii_picture.jpeg']} alt={`./pacificLichenPictures/Lobaria_hallii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Lobaria_hallii_graph.jpeg']} alt={`./pacificLichenPictures/Lobaria_hallii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Riparian forests, usually where sheltered and moist. PNW: Cascades, eastern Columbia River Gorge NSA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lobaria linita</em></Typography>
    <img src={images['./pacificLichenPictures/Lobaria_linita_picture.jpeg']} alt={`./pacificLichenPictures/Lobaria_linita_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 5-15 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees, shrubs, mossy rocks, or alpine sod. Grows in montane to alpine regions east of the Cascade crest where it is generally found on alpine sod or mossy rocks, but it is mainly epiphytic in coastal regions from Alaska to western Oregon, in the Cascades and east of the Cascade crest; in moist habitats with coastal influence. Range extends from the Arctic to the North Cascades of WA (a few sites as far south as northern OR) inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lobaria oregana</em></Typography>
    <img src={images['./pacificLichenPictures/Lobaria_oregana_graph.jpeg']} alt={`./pacificLichenPictures/Lobaria_oregana_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Usually on coniferous trees; sporadically on hardwoods including Alnus, Fraxinus, and shrubs. Oceanic forests, reaching maximum dominance in mid-elevation old-growth forests (Pseudotsuga - Tsuga heterophylla) of the Oregon Coast Range and the western slope of the Cascades. Occasional in moist low-elevation forests in the foothills. Alaska to California, west of the Cascade crest; known east of the crest from only two sites (British Columbia and northern Idaho).</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lobaria pulmonaria</em></Typography>
    <img src={images['./pacificLichenPictures/Lobaria_pulmonaria_picture.jpeg']} alt={`./pacificLichenPictures/Lobaria_pulmonaria_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Lobaria_pulmonaria_graph.jpeg']} alt={`./pacificLichenPictures/Lobaria_pulmonaria_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 10.4/absent between 10.4-13.6 ppb (Wetmore 1983 based on LeBlanc et al. 1974, Nash 1976b, and Trass 1973); 5-15 ppb (Peterson et al. 1992); genus extremely sensitive: &lt; 9.25 ppb (Purvis et al. 1992); present in zones where SO2 is &lt; 11.1 ppb (Hawksworth and Rose 1970); see also (Nash and Wirth 1988); (Turk and Lange 1974).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: 15-&lt;65 ppb (Peterson et al. 1992). No signif effect on N fix. or Ps (Sigal & Johnston1986).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Notes: Slightly &lt; C-fixation (photosynthesis) w/ Zn sol. (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees (both conifers and hardwoods), shrubs, and mossy rock Moist lowland to mid elevation forests in areas of strong coastal influence. PNW: frequent west of the Cascade crest in Oregon and the Columbia River Gorge, occasional in Washington, rare east of the Cascades. Alaska to central California, inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Lobaria scrobiculata</em></Typography>
    <img src={images['./pacificLichenPictures/Lobaria_scrobiculata_picture.jpeg']} alt={`./pacificLichenPictures/Lobaria_scrobiculata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Lobaria_scrobiculata_graph.jpeg']} alt={`./pacificLichenPictures/Lobaria_scrobiculata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: 5-15 ppb (Peterson et al. 1992); genus extremely sensitive, &lt; 9.25 ppb (Purvis et al. 1992); one of the most air-pollution sensitive lichens (Hallingback 1989); 14.5 (Nash and Wirth 1988); zone 10, 'pure air' (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Acidic deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive (Farmer et al. 1992); symptoms of acid rain damage are chlorosis, loss of mature lobes, negative growth rate (Wolsely & James 1992).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Notes: reduced C-fixation (photosynthesis) w/ Zn soln. (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees, shrubs, and mossy rocks, rarely on the ground. Most frequent in low-elevation hardwood forests, swamps, and savannas west of the Cascade crest; also in low- to mid-elevation old-growth conifer forests; east of the Cascade crest restricted to sheltered mossy outcrop areas, often near lakes or streams, and the Columbia Rive Gorge NSA. Circumpolar boreal south to Montana and northern California; rare east of the Cascades where it is known only along Salmon River and in western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanelixia fuliginosa</em></Typography>
    <img src={images['./pacificLichenPictures/Melanelixia_fuliginosa_picture.jpeg']} alt={`./pacificLichenPictures/Melanelixia_fuliginosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Melanelixia_fuliginosa_graph.jpeg']} alt={`./pacificLichenPictures/Melanelixia_fuliginosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 13-19 ppb, absent from 20-29 ppb (Wetmore 1993 based on LeBlanc et al. 1974 and Morgan-Huws et al. 1973); present at 22 ppb (Hawksworth and Rose 1970)</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: (Perkins and Millar 1987a)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark (mainly hardwood trees and shrubs) and rock. Common as an epiphyte on hardwoods west of the Cascade crest in low to mid elevation forests and more open habitats; east of the Cascade crest it is more often on rock in shaded habitats in the mountains. Range is widespread throughout the Pacific Northwest; common west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanelixia glabra</em></Typography>
    <img src={images['./pacificLichenPictures/Melanelixia_glabra_picture.jpeg']} alt={`./pacificLichenPictures/Melanelixia_glabra_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate to high N requirement, peak detection frequency occurs at 3.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On hardwoods. PNW: Medford valley, Columbia River Gorge NSA, Selkirks and Wallowas.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanelixia subargentifera</em></Typography>
    <img src={images['./pacificLichenPictures/Melanelixia_subargentifera_picture.jpeg']} alt={`./pacificLichenPictures/Melanelixia_subargentifera_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.2 kg N per ha per y. Acidophyte (Jovan 2008).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: Present at 30-38 ppb (Trass 1973)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most common on rock, also on bark or wood; widespread; occasional in fairly shaded, moist, low elevation sites.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanelixia subaurifera</em></Typography>
    <img src={images['./pacificLichenPictures/Melanelixia_subaurifera_picture.jpeg']} alt={`./pacificLichenPictures/Melanelixia_subaurifera_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Melanelixia_subaurifera_graph.jpeg']} alt={`./pacificLichenPictures/Melanelixia_subaurifera_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to intermediate: present at 4-12 ppb (Trass 1973). Present to 20 ppb (Purvis et al. 1992); present to 28 ppb (Taylor and Bell 1983).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood (mainly hardwood trees and shrubs), less often on rock; in a wide variety of forest and shrub habitats. PNW: Widespread at low to mid elevations west of the Cascade crest. Rare elsewhere</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanohalea elegantula</em></Typography>
    <img src={images['./pacificLichenPictures/Melanohalea_elegantula_picture.jpeg']} alt={`./pacificLichenPictures/Melanohalea_elegantula_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Melanohalea_elegantula_graph.jpeg']} alt={`./pacificLichenPictures/Melanohalea_elegantula_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a moderate to high N requirement, peak detection frequency occurs at 5.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present to &lt; 26 ppb (Purvis et al. 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: (Ryan 1990); to &lt;65 ppb (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, wood, and rock, occasionally on mosses or soil over rock. Found in a wide range of forests, savannas, and open habitats, most prominent in the more continental climates of the Pacific Northwest. Range is widespread throughout western North America, common east of the Cascade crest at low elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanohalea exasperatula</em></Typography>
    <img src={images['./pacificLichenPictures/Melanohalea_exasperatula_picture.jpeg']} alt={`./pacificLichenPictures/Melanohalea_exasperatula_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Melanohalea_exasperatula_graph.jpeg']} alt={`./pacificLichenPictures/Melanohalea_exasperatula_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate to high N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 12-32/absent at 24 ppb (Wetmore 1983 based on Jürgling 1975, LeBlanc et al 1972a, Trass 1973); 10-35 ppb (Peterson et al. 1992); tolerant to 28 ppb (Purvis et al. 1992); (Ryan 1990); tolerates 18.5-14.8 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood (both conifers and hardwoods), rarely on rock. Frequent in a very broad range of habitats, from low to high elevations, in both continental and oceanic climates, and in deep shade to exposed habitats. Widespread, throughout western North America. PNW: common east of the Cascades, in the Willamette Valley and west Cascades south to CA; infrequent in the Puget Trough, absent from the Coast Ranges and Olympics.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanohalea subelegantula</em></Typography>
    <img src={images['./pacificLichenPictures/Melanohalea_subelegantula_picture.jpeg']} alt={`./pacificLichenPictures/Melanohalea_subelegantula_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Melanohalea_subelegantula_graph.jpeg']} alt={`./pacificLichenPictures/Melanohalea_subelegantula_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. Drier forests of the Puget Trough, Willamette Valley, Medford Valley, western Cascades, especially SW OR. Common in forests of eastern OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Melanohalea subolivacea</em></Typography>
    <img src={images['./pacificLichenPictures/Melanohalea_subolivacea_picture.jpeg']} alt={`./pacificLichenPictures/Melanohalea_subolivacea_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 15 to &lt;65 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of both conifers and hardwoods. Found in a broad range of open and forested habitats, including dry forests and savannahs (e.g. Pinus ponderosa), steppe (on Artemesia and Cercocarpus, etc.), and moist forests; at all forested elevations. Range is widespread in western North America. PNW: frequent at low to mid elevatins east of the Cascade Crest, in the Columbia River Gorge and in valleys of southern OR, otherwise rare west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Menegazzia subsimilis</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ryan and Rhoades 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees (mainly hardwoods) and shrubs; especially frequent on Alnus rubra. Found in moist oceanic forests, often in riparian areas. PNW: especially common in the Coast Ranges, more scattered on the west slope of the Cascades and Puget Trough; absent east of the Cascades and sw OR. Range extends from Alaska to California, west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Neofuscelia loxodes</em></Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Perkins and Millar 1987b)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock or mosses over rock, vary rarely on wood or bark. Fairly common in exposed dry sites, especially on basalt on the Columbia Plateau and Snake River Plain, sporadically into western Montana. Range extends from Washington east to North Dakota, south to California and Colorado.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma bellum</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_bellum_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_bellum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nephroma_bellum_graph.jpeg']} alt={`./pacificLichenPictures/Nephroma_bellum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus is sensitive (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees, shrubs, and mossy rocks. Moist forests with strong coastal influence; often on riparian hardwoods. Widespread in the Coast Ranges and western Cascades; rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma helveticum</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_helveticum_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_helveticum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nephroma_helveticum_graph.jpeg']} alt={`./pacificLichenPictures/Nephroma_helveticum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus is sensitive (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On mossy rocks and woody plants. Generally in moist shady habitats; primarily moist low- to mid-elevation (often riparian) forests. PNW: Widespread throughout western Oregon, the Columbia River Gorge, the western WA Cascades and the Olympics.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma laevigatum</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_laevigatum_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_laevigatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nephroma_laevigatum_graph.jpeg']} alt={`./pacificLichenPictures/Nephroma_laevigatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus is sensitive (Purvis et al. 1992); absent at 24 ppb (Hawksworth &Rose 1970).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Notes: reduced C-fixation (photosynthesis) w/ Zn sol. (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees (mainly hardwoods) and shrubs, less often on rock. Moist low to mid elevation forests, often in riparian areas and on understory shrubs. From Alaska to California. PNW: common in western OR, infrequent in western WA Cascades and Olympics, rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma occultum</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_occultum_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_occultum_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus is sensitive (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Rare in coniferous forests of the western cascades; associated with very old Pseudotsuga menziesii-Tsuga heterophylla stands with abundant Lobaria oregana; most frequent in the mid to upper canopy.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma parile</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_parile_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_parile_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nephroma_parile_graph.jpeg']} alt={`./pacificLichenPictures/Nephroma_parile_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: Genus is sensitive (Purvis et al. 1992).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Reduced C-fixation (photosynthesis) w/ Zn sol. (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most often on mosses over bark or rock, also on bare bark and rock. Moist, somewhat shady to partially exposed habitats; with broader climatic tolerances than other species of Nephroma. PNW: Infrequent in forests of western OR, the Wallowa Mts of ne OR, western Cascades of southern WA, and the Selkirk Mtns of ne WA; rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nephroma resupinatum</em></Typography>
    <img src={images['./pacificLichenPictures/Nephroma_resupinatum_picture.jpeg']} alt={`./pacificLichenPictures/Nephroma_resupinatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nephroma_resupinatum_graph.jpeg']} alt={`./pacificLichenPictures/Nephroma_resupinatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: Genus is sensitive (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and rock. Shady to somewhat open, moist riparian forests and upland forests west of the Cascade Range crest. Widespread in boreal, Montana, and oceanic forests, in the PNW: Common in western OR and the Columbia River Gorge, infrequent in the western Cacades of WA and the Olympics; rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Niebla cephalota</em></Typography>
    <img src={images['./pacificLichenPictures/Niebla_cephalota_picture.jpeg']} alt={`./pacificLichenPictures/Niebla_cephalota_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Niebla_cephalota_graph.jpeg']} alt={`./pacificLichenPictures/Niebla_cephalota_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed coastal trees (less often rock), always within sight or sound of the ocean; Baja California to southeastern Alaska, including the Puget Sound.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{ fontSize:20,fontWeight: 'bold', m: 1 }}> <em>Nodobryoria abbreviata</em></Typography>
    <img src={images['./pacificLichenPictures/Nodobryoria_abbreviata_picture.jpeg']} alt={`./pacificLichenPictures/Nodobryoria_abbreviata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nodobryoria_abbreviata_graph.jpeg']} alt={`./pacificLichenPictures/Nodobryoria_abbreviata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On conifer bark or wood. In valleys to near timberline, especially common in open pine and larch forests east of the Cascade Range crest, also in treetops of moist closed forests. Common from western Montana and central Idaho to British Columbia, south to Baja California. PNW: common in forests east of the Cascade Crest and in sw OR</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Nodobryoria oregana</em></Typography>
    <img src={images['./pacificLichenPictures/Nodobryoria_oregana_picture.jpeg']} alt={`./pacificLichenPictures/Nodobryoria_oregana_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Nodobryoria_oregana_graph.jpeg']} alt={`./pacificLichenPictures/Nodobryoria_oregana_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present at 5-35 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Usually on conifers, rarely on hardwoods or shrubs, often intricately intermixed with other Bryoria and Alectoria species. Common in moist low-elevation to subalpine forests with relatively strong coastal influence. PNW: most abundant in mid elevation to subalpine forests in the Cascade Range, but also widespread on the west side of the Coast Ranges and forests of eastern OR and WA; rare elsewhere. Found from British Columbia to southern California, and east to southwest Alberta and northwest Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Normandina pulchella</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a broad N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present at 13 ppb/absent at 18.5 ppb (Hawksworth and Rose 1970 &1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On mosses, bark, and other lichens in moist lowland habitats; absent in boreal regions. Infrequent, but easily overlooked. Range is widespread, circumpolar; south to Arizona and New Mexico. PNW: Coast range and western Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmelia hygrophila</em></Typography>
    <img src={images['./pacificLichenPictures/Parmelia_hygrophila_picture.jpeg']} alt={`./pacificLichenPictures/Parmelia_hygrophila_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmelia_hygrophila_graph.jpeg']} alt={`./pacificLichenPictures/Parmelia_hygrophila_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a low to moderate N requirement, peak detection frequency occurs at 2.5 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: present from 10 to &lt;30 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate:  &gt;20-70 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, rarely rock. Common in moist low to subalpine forests, also in urban and agricultural habitats. PNW: common in forests throughout OR and WA. Alaska to Oregon, from the coast inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmelia pseudosulcata</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. PNW: Common in forests of western Oregon and Washington.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmelia saxatilis</em></Typography>
    <img src={images['./pacificLichenPictures/Parmelia_saxatilis_picture.jpeg']} alt={`./pacificLichenPictures/Parmelia_saxatilis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmelia_saxatilis_graph.jpeg']} alt={`./pacificLichenPictures/Parmelia_saxatilis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 4.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 14-21 ppb/absent from 21-31 ppb (LeBlanc et al. 1974); present from 16-24 ppb (Vick and Bevan 1976); present from 22-26 ppb (Hawksworth and Rose 1970); see also(Nash and Wirth 1988);.</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &gt;65 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 8-18 ppb (Perkins et al. 1980); (Perkins and Millar 1987a), (Perkins and Millar 1987b); probably sensitive (Ryan and Rhodes 1992)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On siliceous rock and soil or mosses over rock, frequently on bark west of the Cascade crest. The rock-dwelling form grows on both sunny and shaded rock outcrops; the bark-dwelling form lives in moist oceanic conifer forests, in partial to fairly deep shade. Range is widespread in North America, common throughout the Pacific Northwest but especially in western OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmelia squarrosa</em></Typography>
    <img src={images['./pacificLichenPictures/Parmelia_squarrosa_picture.jpeg']} alt={`./pacificLichenPictures/Parmelia_squarrosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmelia_squarrosa_graph.jpeg']} alt={`./pacificLichenPictures/Parmelia_squarrosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 10-16 ppb (LeBlanc et al. 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on conifers. Found in wet coastal forests. PNW: Most common along the mmediate coast of OR & WA; infrequent in the OR coast ranges, Willamette Valley, w Cascades of OR; rare in western WA Cascades. extends from Alaska to California, Coast Range and on the immediate coast.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmelia sulcata</em></Typography>
    <img src={images['./pacificLichenPictures/Parmelia_sulcata_picture.jpeg']} alt={`./pacificLichenPictures/Parmelia_sulcata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmelia_sulcata_graph.jpeg']} alt={`./pacificLichenPictures/Parmelia_sulcata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: present at 19.24-37/ absent at 35.15 ppb (Wetmore 1983 based on Deruelle 1978, Johnsen and S&oslash;chting 1976, LeBlanc 1969, LeBlance et al. 1972a & 1974 & 1976, LeBlanc & Rao 1973b, Morgan-Huws & Haynes 1973, Showman 1975, and Trass 1973); to 25.9ppb (Taylor and Bell 1983); present at 26 ppb (Hawksworth and Rose 1970); present from 10 to &gt;30 ppb (Peterson et al. 1992); present from 36-44 ppb (Johnsen and S&oslash;chting 1973); see also (Nash and Wirth 1988).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ryan 1990); (Perkins & Millar 1987a); (Perkins & Millar 1987b).

Tolerant: 14 (LeBlanc et al. 1972b);

Bleaching/red coloration (Perkins & Millar 1987a & b);</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ross & Nash 1983, Ryan 1990) to Intermediate: &lt; 20-70 ppb (Peterson et al. 1992); 50 ppb PAN: photosynth &lt; 50% / 3 days (Sigal & Taylor 1979).

Bleaching, algal layer damaged (Sigal & Taylor 1979); increased starch in chloroplast (Eversman & Sigal 1984).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, less often on rock or mossy rock. Occurring in a wide range of habitats, in both continental and oceanic climates, ranging from urban areas to the mountains. Widespread, common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmeliopsis ambigua</em></Typography>
    <img src={images['./pacificLichenPictures/Parmeliopsis_ambigua_picture.jpeg']} alt={`./pacificLichenPictures/Parmeliopsis_ambigua_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmeliopsis_ambigua_graph.jpeg']} alt={`./pacificLichenPictures/Parmeliopsis_ambigua_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 19-24 ppb/absent at 29 ppb (Wetmore 1993 based on Hawksworth et al. 1973, LeBlanc et al. 1972a & 1974, and Trass 1973); present at 10-35 ppb (Ryan and Rhodes 1992); present at 22 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: probably tolerant (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most common on conifer bark, also on wood, deciduous trees, and shrubs. Found in moist to dry conifer forests, at low elevations to subalpine; tolerant of snow burial so this species is often found on tree bases in the mountains. Range is widespread; throughout the Pacific Northwest, but most common in continental climates; increasingly rare toward the coast.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmeliopsis hyperopta</em></Typography>
    <img src={images['./pacificLichenPictures/Parmeliopsis_hyperopta_picture.jpeg']} alt={`./pacificLichenPictures/Parmeliopsis_hyperopta_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmeliopsis_hyperopta_graph.jpeg']} alt={`./pacificLichenPictures/Parmeliopsis_hyperopta_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 21-31 ppb (LeBlanc et al. 1974).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Most common on conifer bark, also on wood, deciduous trees, and shrubs. Found in moist conifer forests, at low elevations to subalpine. Range is widespread, common throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmotrema arnoldii</em></Typography>
    <img src={images['./pacificLichenPictures/Parmotrema_arnoldii_picture.jpeg']} alt={`./pacificLichenPictures/Parmotrema_arnoldii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmotrema_arnoldii_graph.jpeg']} alt={`./pacificLichenPictures/Parmotrema_arnoldii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. Coastal conifer forests and scrub, Willamtte Valley and Puget Trough, nw WA Cascades, western Columbia River Gorge NSA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmotrema crinitum</em></Typography>
    <img src={images['./pacificLichenPictures/Parmotrema_crinitum_picture.jpeg']} alt={`./pacificLichenPictures/Parmotrema_crinitum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmotrema_crinitum_graph.jpeg']} alt={`./pacificLichenPictures/Parmotrema_crinitum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, occasionally on rock. PNW: Sporadic along the immediate coast from the border with CA through the west coast of the Olympic Peninsula. Most abundant in fairly open forests as on the edge of headland forests and boulders, fences, and trees by parking and picnic areas.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Parmotrema perlatum</em></Typography>
    <img src={images['./pacificLichenPictures/Parmotrema_perlatum_picture.jpeg']} alt={`./pacificLichenPictures/Parmotrema_perlatum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Parmotrema_perlatum_graph.jpeg']} alt={`./pacificLichenPictures/Parmotrema_perlatum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: to mean levels &gt; 13 ppb (Purvis et al. 1992), present from 5-35 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, occasionally on rock. Found in coastal conifer forests and scrub, sometimes in more open habitats near the coast; also penetrating inland in low-elevation (usually riparian) forests. Range is from British Columbia to Mexico on the coast; sporadic in the Coast Range and elsewhere west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera aphthosa</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_aphthosa_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_aphthosa_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: ? (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, forest floor, and mossy rocks. Common in more continental climates east of the Cascade crest, but largely replaced by P. Britannica in low to mid-elevation moist forests west of the Cascades; frequent on roadcuts and in open outcrop and talus areas. Range is widespread, throughout forested areas of the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera britannica</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_britannica_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_britannica_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Peltigera_britannica_graph.jpeg']} alt={`./pacificLichenPictures/Peltigera_britannica_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Roadcuts, trailsides, outcrop areas, talus slopes, old-growth canopies, and other partly open habitats in areas of moist oceanic forests.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera canina</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_canina_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_canina_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &gt;30 ppb (Ryan and Rhodes 1992)..</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Perkins and Millar 1987a); ? (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb; (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, mosses, forest floor, rotten logs, or soil or moss over rock. Found in forests and relatively open (outcrops, talus) or disturbed areas (roadcuts, clearcuts); low elevations to subalpine, mainly in forested regions with a continental climate. Range is widespread, found throughout the Pacific Northwest, but most common east of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera collina</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_collina_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_collina_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a broad N requirement, peak detection frequency occurs at 3.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb; (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On mossy bark or rock in moist habitats from low elevations to subalpine. Range is widespread, common throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera didactyla</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_didactyla_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_didactyla_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb; (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil or soil over rock. Usually in recently disturbed habitats such as roadcuts, clearcuts, trailsides, and recently burned forests; low to high elevations. Range is widespread, occasional in forested areas throughout the Pacific Northwest, occasional in steppe or alpine tundra.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera horizontalis</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_horizontalis_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_horizontalis_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present up to 24 ppb (Hawskworth & Rose 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, rotten wood, and rock; subarctic south to New Mexico; uncommon in the Pacific Northwest.</Typography>
</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera membranacea</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_membranacea_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_membranacea_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Acidic deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: (Farmer et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, mosses, forest floor, rotten logs, or soil or moss over rock. Common in mesic oceanic forests at low to mid elevations. Range is circumpolar boreal to temperate, with oceanic affinities; Alaska to California, east to Alberta and western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera neopolydactyla</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_neopolydactyla_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_neopolydactyla_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Peltigera_neopolydactyla_graph.jpeg']} alt={`./pacificLichenPictures/Peltigera_neopolydactyla_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Common in coastal forests, infrequent eastward where it is restricted to low to mid elevation forests in areas of strongest coastal influence.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera ponojensis</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_ponojensis_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_ponojensis_picture`} width="300" height="200"/>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: characteristic of old mine spoil heaps (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, moss, and organic debris. Occasional on exposed or partly exposed sites, dry forest fringes to cold semi-arid sites; low elevations to alpine. Range extends from Alaska to California, inland throughout the Rocky Mountains.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera rufescens</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_rufescens_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_rufescens_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present from 20-70 ppb (Ryan and,Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On soil, mosses, or decaying organic matter. Very common in dry, mostly open sites east of the Cascade crest, including steppe, dry forest, outcrop areas and subalpine and alpine ridges. Range is widespread, throughout the Pacific Northwest but most common east of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Peltigera venosa</em></Typography>
    <img src={images['./pacificLichenPictures/Peltigera_venosa_picture.jpeg']} alt={`./pacificLichenPictures/Peltigera_venosa_picture`} width="300" height="200"/>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: characteristic of old mine spoil heaps (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On moist soil, often where recently disturbed but somewhat shaded, especially roadcuts, stream-cut banks, and trailsides. Range is widespread; throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Phaeophyscia nigricans</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: Present from 30-38 ppb (Trass 1973).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On hardwoods, occasionally on rock; dry areas of southern British Columbia, Montana and South Dakota, south to Colorado.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Phaeophyscia orbicularis</em></Typography>
    <img src={images['./pacificLichenPictures/Phaeophyscia_orbicularis_picture.jpeg']} alt={`./pacificLichenPictures/Phaeophyscia_orbicularis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Phaeophyscia_orbicularis_graph.jpeg']} alt={`./pacificLichenPictures/Phaeophyscia_orbicularis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 22.2-29.6/absent at 33.3 ppb (Wetmore 1983 based on Deruelle 1978, Jürgling 1975, LeBlanc et al. 1972a, and Trass 1973); 10-35 ppb (Peterson et al. 1992); present at 29.6-33.3 ppb (Johnsen & Søchting 1973); present at 22.2-18.5 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992). Intermediate: 16 (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992, Ryan 1990, Sigal & Nash 1983). Intermediate to Tolerant: (LeBlanc & Sloover 1970). Tolerant: see notes (Hoffman 1974).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, occasionally on rock (including concrete). Found in a wide variety of lowland habitats, often in agricultural, urban, or riparian settings. Widespread in western North America.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Phaeophyscia sciastra</em></Typography>
    <img src={images['./pacificLichenPictures/Phaeophyscia_sciastra_picture.jpeg']} alt={`./pacificLichenPictures/Phaeophyscia_sciastra_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock or mosses over rock. Common in outcrop and talus areas in dry, continental climates, associated with both siliceous and calcareous rock. Range extends from Alaska to California and Arizona; mostly east of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia adscendens</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_adscendens_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_adscendens_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physcia_adscendens_graph.jpeg']} alt={`./pacificLichenPictures/Physcia_adscendens_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 18.5-29.6/absent at 33.3 ppb (Wetmore 1983 based on Deruelle 1977 & 1978, Jürgling 1975, LeBlanc et al. 1972a, Trass 1973); present at 29.6-33.3 ppb (Johnsen & Søchting 1973) ; present at 25.9 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Peterson et al. 1992); (Perkins & Millar 1987a). Sensitive to Intermediate: (LeBlanc et al. 1971).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark (especially angiosperms but also occasionally on conifers), rarely on rock.Low to mid elevation forests and open shrubby areas, common in agricultural, urban, and suburban areas; partial shade to full sun. Widespread; common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia aipolia</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_aipolia_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_aipolia_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physcia_aipolia_graph.jpeg']} alt={`./pacificLichenPictures/Physcia_aipolia_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 14.8-13 ppb (Hawksworth and Rose 1970), present at 9.6-18.5/ absent at 24.1 ppb (Wetmore 1983 based on Jürgling 1975, LeBlanc 1969, LeBlanc et al. 1972a, Trass 1973)</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992); (Perkins & Millar 1987a). Sensitive to Intermediate: 20 (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, usually on hardwoods. Very common west of the Cascade Range crest, occasional east of the Cascade crest; often in urban and agricultural settings, but also common on hardwoods in the mountains. Widespread; throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia americana</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_americana_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_americana_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mainly on hardwood bark, occasionally on limestone. A species of the eastern US with disjunct populations in California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia biziana</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_biziana_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_biziana_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, wood, or rock of exposed to partially shaded sites, mostly at lower elevations. Range is widespread, British Columbia to Alberta, south to California and southern Rocky Mountains; throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia caesia</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_caesia_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_caesia_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: 10-35 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock, rarely on bark or wood. Exposed to sheltered rocks in a wide variety of habitats; alpine to sea level, including on rocks in the ocean spray zone. Widespread; fairly common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia dimidiata</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_dimidiata_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_dimidiata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark of trees of the arid interior west.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia dubia</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_dubia_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_dubia_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: present at concentrations &gt;30 ppb (Ryan and Rhoades 1992); present from 34 to 41 ppb (Wetmore 1983 based on Deruelle 1978 and Johnsen & Søchting 1973).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Widespread; common east of the Cascade crest on rock or mosses over rock.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia leptalea</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: present from 34 to 41 ppb (Hawskworth & Rose 1970).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Widespread; common east of the Cascade crest on rock or mosses over rock.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia stellaris</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_stellaris_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_stellaris_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physcia_stellaris_graph.jpeg']} alt={`./pacificLichenPictures/Physcia_stellaris_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 10-21 ppb, absent above 25 ppb (Wetmore 1993 based on LeBlanc 1969, LeBlanc et al. 1972a, Showman 1975).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: ? (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Commonly on hardwoods. Range is widespread. PNW: Infrequent east of the cascades, in the Columbia River Gorge NSA, in the southern Willamette Valley and in the foothills of SW OR, all at low elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physcia tenella</em></Typography>
    <img src={images['./pacificLichenPictures/Physcia_tenella_picture.jpeg']} alt={`./pacificLichenPictures/Physcia_tenella_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physcia_tenella_graph.jpeg']} alt={`./pacificLichenPictures/Physcia_tenella_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 22.2/absent at 25.9 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992); (Perkins & Millar 1987a).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: &gt; 65 ppb (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood, occasionally on rock. Occasional at low to mid elevations, most often on hardwoods and shrubs in open to semi-open habitats. Widespread, throughout the PNW especially along the Columbia River, in the Puget trough, in the Willamette, Rogue and Medord Valleys; infrequent at low elevations in the east Cades, Selkirk Mtns and Wallowas; rare in the Coast Ranges & Olympics.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physconia americana</em></Typography>
    <img src={images['./pacificLichenPictures/Physconia_americana_picture.jpeg']} alt={`./pacificLichenPictures/Physconia_americana_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderately broad N requirement, peak detection frequency occurs at 3.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ryan 1990)</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. PNW occasional west of the Cascade crest in broad agricultural valleys and southern Cascades; common along the Columbia River east of Hood River to the Tri Cities. Rare elsewhere in eastern OR and WA and in western WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physconia enteroxantha</em></Typography>
    <img src={images['./pacificLichenPictures/Physconia_enteroxantha_picture.jpeg']} alt={`./pacificLichenPictures/Physconia_enteroxantha_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physconia_enteroxantha_graph.jpeg']} alt={`./pacificLichenPictures/Physconia_enteroxantha_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or mosses over rock. In a wide variety of habitats at low elevations, but often in somewhat nutrient-enriched sites, especially in broad agricultural valleys; common on both sides of the Cascades. Widespread; throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{ fontSize:20,fontWeight: 'bold', m: 1 }}> <em>Physconia isidiigera</em></Typography>
    <img src={images['./pacificLichenPictures/Physconia_isidiigera_picture.jpeg']} alt={`./pacificLichenPictures/Physconia_isidiigera_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate to high N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 5-35 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to &gt;65 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or mosses over rock. Range is widespread; occasional east of the Cascade crest in dry habitats; common along the Columbia River from Portland to Spokane and in the Willamette, Rogue, Medord and Kalmath Lake valleys.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Physconia perisidiosa</em></Typography>
    <img src={images['./pacificLichenPictures/Physconia_perisidiosa_picture.jpeg']} alt={`./pacificLichenPictures/Physconia_perisidiosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Physconia_perisidiosa_graph.jpeg']} alt={`./pacificLichenPictures/Physconia_perisidiosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 5-23 ppb/ absent above 26 ppm (Wetmore 1983 based on Hawksworth & Rose 1973 and LeBlanc et al. 1972a).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark (usually hardwood trees and shrubs), mosses over rock, rock, or thin soil over rock.In a wide variety of habitats, including steppe, alpine tundra, riparian forests, agricultural valleys, and rock outcrop areas; low to high elevations; full sun to sheltered. PNW: Widespread, most common in broad agricultural valleys and the Columbia River from Portland to the Tri Cities; absent from the Coast Ranges and Olympics.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Platismatia glauca</em></Typography>
    <img src={images['./pacificLichenPictures/Platismatia_glauca_picture.jpeg']} alt={`./pacificLichenPictures/Platismatia_glauca_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Platismatia_glauca_graph.jpeg']} alt={`./pacificLichenPictures/Platismatia_glauca_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a broad N requirement, peak detection frequency occurs at 3.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 19.2-28.9 ppb (Wetmore 1983 based on LeBlanc et al. 1974 and Trass 1973); present at 22 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood (especially conifers), less often on rock. Moist forests, low elevations to subalpine, with broad tolerances to shade and moisture. Alaska to California, inland to Montana and Colorado; one of the most common epiphytic lichens of the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Platismatia herrei</em></Typography>
    <img src={images['./pacificLichenPictures/Platismatia_herrei_picture.jpeg']} alt={`./pacificLichenPictures/Platismatia_herrei_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Platismatia_herrei_graph.jpeg']} alt={`./pacificLichenPictures/Platismatia_herrei_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a broad N requirement, peak detection frequency occurs at 2.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist conifer forests, from low elevations to subalpine.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Platismatia lacunosa</em></Typography>
    <img src={images['./pacificLichenPictures/Platismatia_lacunosa_picture.jpeg']} alt={`./pacificLichenPictures/Platismatia_lacunosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Platismatia_lacunosa_graph.jpeg']} alt={`./pacificLichenPictures/Platismatia_lacunosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, rarely on mossy rocks. PNW: common in moist forests in the Coast Range and Olympics; rare in the western Cascades. Alaska to California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Platismatia stenophylla</em></Typography>
    <img src={images['./pacificLichenPictures/Platismatia_stenophylla_picture.jpeg']} alt={`./pacificLichenPictures/Platismatia_stenophylla_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Platismatia_stenophylla_graph.jpeg']} alt={`./pacificLichenPictures/Platismatia_stenophylla_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Moist conifer forests, low elevations to subalpine. PNW: Abundant from southern OR to central WA in the western Cascades and Coast Range.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Polychidium contortum</em></Typography>
    <img src={images['./pacificLichenPictures/Polychidium_contortum_picture.jpeg']} alt={`./pacificLichenPictures/Polychidium_contortum_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Polychidium_contortum_graph.jpeg']} alt={`./pacificLichenPictures/Polychidium_contortum_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. PNW: Occasional in western OR and WA, most frequent in OR central Coast Range.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudephebe minuscula</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudephebe_minuscula_picture.jpeg']} alt={`./pacificLichenPictures/Pseudephebe_minuscula_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 15-70 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock or gravelly soil; mostly at exposed arctic-alpine to subalpine sites. Range is circumpolar to southern California and New Mexico.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudephebe pubescens</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudephebe_pubescens_picture.jpeg']} alt={`./pacificLichenPictures/Pseudephebe_pubescens_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 15-70 ppb. (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock or gravelly soil in low to high elevations; in exposed to somewhat sheltered rocky sites; occasional. Range is circumpolar south to California and Colorado; throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudocyphellaria anomala</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_anomala_picture.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_anomala_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_anomala_graph.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_anomala_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, most often on deciduous trees and shrubs, occasional on conifers; rarely on rock. Low- to mid-elevation moist forests, including riparian areas, Willamette Valley hardwood forests (including oak savannas and ash swamps), and sporadically in mountain conifer forests. Alaska to California, west of the Cascade Range crest, with rare inland disjuncts to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudocyphellaria anthraspsis</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_anthraspsis_picture.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_anthraspsis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_anthraspsis_graph.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_anthraspsis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992), (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, on conifers, deciduous trees, and shrubs; rarely on rock. Low- to mid-elevation moist forests, especially riparian areas; most frequent near the coast in partially open habitats. Alaska to California, with rare disjuncts inland to northern Idaho.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudocyphellaria crocata</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_crocata_picture.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_crocata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_crocata_graph.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_crocata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly on hardwood trees and shrubs. Low- to mid-elevation moist forests, usually in valley bottoms and foothills, often in riparian forests, ash swamps, and oak savanna. Alaska to California, west of the Cascade Range crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Pseudocyphellaria rainierensis</em></Typography>
    <img src={images['./pacificLichenPictures/Pseudocyphellaria_rainierensis_picture.jpeg']} alt={`./pacificLichenPictures/Pseudocyphellaria_rainierensis_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus is sensitive (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark or wood of conifers, often overgrowing moss mats. Moist old growth forests at low to mid elevations, usually dominated by Pseudotsuga and Tsuga heterophylla, usually in the lower to mid canopy; rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Punctelia perreticulata</em></Typography>
    <img src={images['./pacificLichenPictures/Punctelia_perreticulata_picture.jpeg']} alt={`./pacificLichenPictures/Punctelia_perreticulata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Punctelia_perreticulata_graph.jpeg']} alt={`./pacificLichenPictures/Punctelia_perreticulata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 22 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: &lt; 20 ppb (Peterson et al. 1992); (Perkins and Millar 1987a), (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, less often rock. All known locations for Oregon and Washington are from low-elevation urban, suburban, and agricultural areas. It seems likely that this species is expanding with the inadvertent assistance of humans. Common in eastern North America, Colorado, and California; uncommon in the Pacific Northwest west of the Cascades except in the western Columbia River Gorge; not yet known between the Cascades and Rocky Mountain crests.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Punctelia rudecta</em></Typography>
    <img src={images['./pacificLichenPictures/Punctelia_rudecta_picture.jpeg']} alt={`./pacificLichenPictures/Punctelia_rudecta_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 5-10 ppb/absent above 20 ppb (Wetmore 1983 based on LeBlanc et al. 1972a and Showman 1975).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and rock. Mostly eastern N America with rare disjuncts east of the Continental Divide in Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina dilacerata</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_dilacerata_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_dilacerata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_dilacerata_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_dilacerata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a moderate to high N requirement, peak detection frequency occurs at 4.8 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 13.6-20.8/absent at 20.8-31.2 ppb (LeBlanc et al. 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On hardwood trees and shrubs, also frequent on conifers Most common in riparian forests and shrubs at low elevations; east of the Cascade crest mainly in areas of strongest oceanic influence. Alaska to California, west of the Cascade Range crest, inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina farinacea</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_farinacea_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_farinacea_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_farinacea_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_farinacea_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a broad N requirement, peak detection frequency occurs at 5.7 kg N per ha per y (McCune and Geiser 2009). Least sensitive Ramalina to inorganic fertilizers (Purvis et al. 1992).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present at 22/absent at 26 ppb (Wetmore 1983 based on Jurgin 1975 and Trass 1973); the least sensitive Ramalina(Purvis et al. 1992); present at 22 ppb (Hawksworth and Rose 1970) Sensitivity increases with increasing humidity (Rao & LeBlanc 1966).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: ? (Peterson et al. 1992). Bleaching (Perkins & Millar 1987a).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, both conifers and hardwoods.West of the Cascade Range crest found in low to mid-elevation forests; also on trees in agricultural and urban areas; east of the Cascade crestcades mainly in low-elevation riparian habitats. Alaska to California, common west of the Cascade Range crest, uncommon to rare east of the Cascade crest, inland to western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina menziesii</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_menziesii_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_menziesii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_menziesii_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_menziesii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009). Notes: Netted regions have higher photosynthesis rates than strap-like regions. Large nets have higher photosynthesis rates than smaller nets (Ross & Nash 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On broad-leaved trees and shrubs, occasional on conifers. Fog zone along the coast and in the Willamette-Puget trough, especially along rivers and in forested wetlands, often thickly draping whole forests or individual trees. Pacific coast from southeastern Alaska to Baja, never east of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina pollinaria</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_pollinaria_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_pollinaria_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_pollinaria_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_pollinaria_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 13/ absent at 14.8 ppb(Hawksworth and Rose 1970). Sensitivity increases with increasing humidity (Rao & LeBlanc 1966).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood.Low-elevation swamps, often with Picea. Widespread but uncommon; in the PNW mainly between the Cascades and Rockies.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina roesleri</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_roesleri_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_roesleri_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_roesleri_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_roesleri_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of coastal Sitka spruce and pine forests at lower elevations, usually within a few kilometers of the coast; fairly common within this restricted habitat. Range is circumboreal, south along the coast to California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina subleptocarpha</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_subleptocarpha_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_subleptocarpha_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_subleptocarpha_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_subleptocarpha_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Valley bottoms, ash swamps, and riparian hardwood forests, occasionally onto foothills, fairly frequent in urban and agricultural areas. British Columbia to California, on the coast and in the Willamette-Puget trough.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Ramalina thrausta</em></Typography>
    <img src={images['./pacificLichenPictures/Ramalina_thrausta_picture.jpeg']} alt={`./pacificLichenPictures/Ramalina_thrausta_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Ramalina_thrausta_graph.jpeg']} alt={`./pacificLichenPictures/Ramalina_thrausta_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, often conifers. Sporadic in (1) low-elevation moist forests, especially riparian spruce or fir east of the Cascade crest, and (2) low-elevation old-growth Douglas fir in and west of the Cascade crest, and (3) conifer forests on the immediate coast. Range is in boreal North America, south to Oregon and western Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Rhizoplaca chrysoleuca</em></Typography>
    <img src={images['./pacificLichenPictures/Rhizoplaca_chrysoleuca_picture.jpeg']} alt={`./pacificLichenPictures/Rhizoplaca_chrysoleuca_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 5-15 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb; (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On siliceous rock of exposed to somewhat sheltered rock outcrops and talus, from low to high elevations in more continental climates. Range is widespread throughout the Pacific Northwest, but rare west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Rhizoplaca melanophthalma</em></Typography>
    <img src={images['./pacificLichenPictures/Rhizoplaca_melanophthalma_picture.jpeg']} alt={`./pacificLichenPictures/Rhizoplaca_melanophthalma_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 5-15 ppb (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed to sheltered rock, rarely on gravelly soil; at all elevations. Range is widespread, throughout the Pacific Northwest, but uncommon west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sphaerophorus tuckermanii</em></Typography>
    <img src={images['./pacificLichenPictures/Sphaerophorus_tuckermanii_picture.jpeg']} alt={`./pacificLichenPictures/Sphaerophorus_tuckermanii_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Sphaerophorus_tuckermanii_graph.jpeg']} alt={`./pacificLichenPictures/Sphaerophorus_tuckermanii_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. PNW: Abundant in OR and WA west of the Cascades crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sphaerophorus venerabilis</em></Typography>
    <img src={images['./pacificLichenPictures/Sphaerophorus_venerabilis_picture.jpeg']} alt={`./pacificLichenPictures/Sphaerophorus_venerabilis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Sphaerophorus_venerabilis_graph.jpeg']} alt={`./pacificLichenPictures/Sphaerophorus_venerabilis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. PNW: Abundant in OR and WA west of the Cascades crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Solorina crocea</em></Typography>
    <img src={images['./pacificLichenPictures/Solorina_crocea_picture.jpeg']} alt={`./pacificLichenPictures/Solorina_crocea_picture`} width="300" height="200"/>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On both calcareous and noncalcareous soil of subalpine to alpine habitats, often in seepage areas. Range is circumpolar south to California and New Mexico.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Stereocaulon vesuvianum</em></Typography>
    <img src={images['./pacificLichenPictures/Stereocaulon_vesuvianum_picture.jpeg']} alt={`./pacificLichenPictures/Stereocaulon_vesuvianum_picture`} width="300" height="200"/>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: to heavy metals (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On mossy noncalcareous rock, often on talus slopes and lava flows, often on cool, moist slopes or where sheltered by topography or trees. Range extends from the Arctic south along the Pacific coast to the central Oregon Cascades, rare inland to central British Columbia.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sticta fuliginosa</em></Typography>
    <img src={images['./pacificLichenPictures/Sticta_fuliginosa_picture.jpeg']} alt={`./pacificLichenPictures/Sticta_fuliginosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Sticta_fuliginosa_graph.jpeg']} alt={`./pacificLichenPictures/Sticta_fuliginosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a broad N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus very sensitive, &lt; 11.1 ppb (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Usually on bark or wood or hardwoods; occasionally on conifers, rarely on rock.Fairly common in warm, moist, low- to mid-elevation mountain conifer forests, and especially in valley and foothill hardwoods such as ash swamps and oak forests. Alaska to California, west of the Cascade Range crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sticta limbata</em></Typography>
    <img src={images['./pacificLichenPictures/Sticta_limbata_picture.jpeg']} alt={`./pacificLichenPictures/Sticta_limbata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Sticta_limbata_graph.jpeg']} alt={`./pacificLichenPictures/Sticta_limbata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: 5-15 ppb (Peterson et al. 1992); genus very sensitive, &lt; 11.1 ppb (Purvis et al. 1992); 'pure air' (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Acidic deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (Gilbert 1986).</Typography>
    <Typography><strong>Metals</strong></Typography>
    <Typography sx={{marginLeft:5}}>Reduced C-fixation (photosynthesis) with Zn solution (Brown & Beckett 1983).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, rarely rock.Fairly common in warm, moist, low-elevation forests, especially valley and foothill hardwoods such as ash swamps and oak forests. Sporadic in mountain conifer forests. Alaska to California, west of the Cascade Range crest, with rare inland disjuncts in British Columbia.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sticta weigelii</em></Typography>
    <img src={images['./pacificLichenPictures/Sticta_weigelii_picture.jpeg']} alt={`./pacificLichenPictures/Sticta_weigelii_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: genus very sensitive: &lt; 11.1 ppb (Purvis et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, wood, and moss mats on trees and shrubs; rarely on mossy rock.Cool, moist, old-growth conifer forests at middle elevations; uncommon. Alaska to California, west of the Cascade Range crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Sulcaria badia</em></Typography>
    <img src={images['./pacificLichenPictures/Sulcaria_badia_picture.jpeg']} alt={`./pacificLichenPictures/Sulcaria_badia_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Sulcaria_badia_graph.jpeg']} alt={`./pacificLichenPictures/Sulcaria_badia_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Hardwoods in well-lit to partly shaded conditions at low elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Teloschistes flavicans</em></Typography>
    <img src={images['./pacificLichenPictures/Teloschistes_flavicans_picture.jpeg']} alt={`./pacificLichenPictures/Teloschistes_flavicans_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to intermediate: absent at 24 ppb (Hawksworth & Rose 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood of coastal headland and cape forests (usually Picea sitchensis); rare. Sporadic along the West Coast, from northern Oregon to California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Tuckermannopsis chlorophylla</em></Typography>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_chlorophylla_picture.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_chlorophylla_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_chlorophylla_graph.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_chlorophylla_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 2.7 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide and acid deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 3.7-11.1 ppb (Trass 1973).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: ? (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, fallen logs, fences, roofs, rarely on rock. Within the PNW, this is one of the most versatile foliose lichens, being found quite frequently in a range of habitats matched by few plants or lichens. Its habitats range from extreme oceanic sites to dry interior forests in continental climates. It tolerates both full sun and deep shade. Range is circumpolar, subarctic south through Cascades and Rocky Mountains to California and Colorado; common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Tuckermannopsis orbata</em></Typography>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_orbata_picture.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_orbata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_orbata_graph.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_orbata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.4 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 19.2-28.9 ppb (LeBlanc et al. 1972a).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, mainly conifers but also on hardwoods. PNW: Frequent in forests throughout the region. British Columbia to California, inland to western Montana; rare east of the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Tuckermannopsis platyphylla</em></Typography>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_platyphylla_picture.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_platyphylla_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_platyphylla_graph.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_platyphylla_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>In the crowns of trees in low to high elevation moist forest, drier inland forests and open-grown trees to timberline. PNW: Widespread in forested mountains.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Tuckermannopsis sepincola</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present from 20-29/absent above 29 ppb (LeBlanc et al. 1972a and LeBlac et al. 1974.).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Generally on twigs of shrubs, especially in bogs; Alaska south to northern California and northwestern Montana.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Tuckermannopsis subalpina</em></Typography>
    <img src={images['./pacificLichenPictures/Tuckermannopsis_subalpina_picture.jpeg']} alt={`./pacificLichenPictures/Tuckermannopsis_subalpina_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Typically in semi-open to open subalpine forests, rarely to middle elevations in the mountains, mostly not in true alpine areas. PNW: northern OR and WA Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Umbilicaria cylindrica</em></Typography>
    <img src={images['./pacificLichenPictures/Umbilicaria_cylindrica_picture.jpeg']} alt={`./pacificLichenPictures/Umbilicaria_cylindrica_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: from 10 to &gt;30 ppb (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On noncalcareous rock of alpine to subalpine habitats from Alaska to Oregon, west of the Cascades; rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Umbilicaria polyphylla</em></Typography>
    <img src={images['./pacificLichenPictures/Umbilicaria_polyphylla_picture.jpeg']} alt={`./pacificLichenPictures/Umbilicaria_polyphylla_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: ? (Ryan and Rhodes 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On noncalcareous rock of exposed to shaded rock outcrops and talus, most common in moist forested parts of the Pacific Northwest. Range is widespread, common between the Cascade and Rocky Mountain crests, occasional west of the Cascade crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea cavernosa</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_cavernosa_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_cavernosa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_cavernosa_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_cavernosa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Pendent on trees and shrubs. PNW: Low elevation foothills adjacent to the Puget Trough, and the Willamette, Rogue and Medford valleys.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea cornuta</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_cornuta_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_cornuta_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_cornuta_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_cornuta_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. PNW: Common on the immediate coast and coastal forests, Puget trough and Willamette Valey, rare in west Cascades.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea filipendula</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_filipendula_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_filipendula_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_filipendula_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_filipendula_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 5-15 ppb (Trass 1973).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesic forests at low to mid elevations, often a dominant species in foothill and valley forests. PNW: widespread throughout forests of OR & WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea flavocardia</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. PNW: Common in forests of western Oregon and Washington.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea florida</em></Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present up to 11 ppb (Hawksworth & Rose 1970).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark. PNW: rare.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea fulvoreagens</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Widespread but uncommon in PNW; low to mid elevations both sides of the Cascades and Wallowas.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea glabrata</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_glabrata_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_glabrata_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Primarily an oligotroph, but with a broad N tolerance. Acidophyte (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Widespread west of the Cascades crest and Wallowas at low to mid elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea glabrescens</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_glabrescens_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_glabrescens_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a broad N tolerance, peak detection frequency occurs at 3.6 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Infrequent west of the Cascades crest at low to mid elevations. Also in the Wallowas and Selkirk Mountains.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea hirta</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_hirta_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_hirta_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_hirta_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_hirta_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: 12-32 ppb (Trass 1973).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. Range is widespread, throughout the Pacific Northwest but rare west of the Cascade crest; most common east of the Continental Divide.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea intermedia</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Acidophyte (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees in northwestern California.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea lapponica</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_lapponica_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_lapponica_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_lapponica_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_lapponica_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Mesotroph with a moderate N requirement, peak detection frequency occurs at 3.2 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood in a wide variety of forests at low to mid elevations; also in shrub steppe. PNW: common throughout OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea longissima</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_longissima_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_longissima_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_longissima_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_longissima_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>General</strong></Typography>
    <Typography sx={{marginLeft:5}}>Specific habitat demands and low dispersal ability make U.longissima very sensitive to environmental disturbances (Esseen 1981).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood. In Oregon and Washington usually on riparian trees, both conifers and hardwoods, at low elevations, but not in broad open valleys; most abundant in a narrow band transitional between the mountains and foothills. Alaska to California, west of the Cascade Range crest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea rubicunda</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_rubicunda_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_rubicunda_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_rubicunda_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_rubicunda_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark; forests of the immediate OR and WA coast.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea scabrata</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_scabrata_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_scabrata_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_scabrata_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_scabrata_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.3 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>One of the most common Usnea species in inland boreal forests, together with U. lapponica and U. substerilis, but in the PNW and British Columbia its range extends to the coast. Mainly on conifers, in open forests at lower to upper elevations.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea subfloridana</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_subfloridana_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_subfloridana_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_subfloridana_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_subfloridana_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present to 15 ppb (Hawksworth & Rose 1970).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On trees. Washington and western Oregon. Common.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea subgracilis</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_subgracilis_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_subgracilis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Usnea_subgracilis_graph.jpeg']} alt={`./pacificLichenPictures/Usnea_subgracilis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low N requirement, peak detection frequency occurs at 1.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark in forests of the immediate coast.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Usnea substerilis</em></Typography>
    <img src={images['./pacificLichenPictures/Usnea_substerilis_picture.jpeg']} alt={`./pacificLichenPictures/Usnea_substerilis_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Acidophyte (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>At low elevations on bark in forests of the immediate coast, Willamette Valley, Columbia River Gorge, Klamath Valley, Wallowas and Blue Mtns of Oregon; Selkirk Mtns, Kettle River Range, and Puget Trough of Washington .</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Vulpicida canadensis</em></Typography>
    <img src={images['./pacificLichenPictures/Vulpicida_canadensis_picture.jpeg']} alt={`./pacificLichenPictures/Vulpicida_canadensis_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Vulpicida_canadensis_graph.jpeg']} alt={`./pacificLichenPictures/Vulpicida_canadensis_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Oligotroph with a low to moderate N requirement, peak detection frequency occurs at 2.0 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at &lt; 20 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, especially frequent on Pinus and Larix, but also on shrubs and other conifers. Common, especially on twigs in conifer forests near water (floodplains, lakeshores, valley bottoms and riparian habitats), but occasionally in upland habitats. Found from British Columbia to California, inland to western Montana, mainly east of the Cascade crest, west of the Cascade crest in SW OR.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Vulpicida pinastri</em></Typography>
    <img src={images['./pacificLichenPictures/Vulpicida_pinastri_picture.jpeg']} alt={`./pacificLichenPictures/Vulpicida_pinastri_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: (Kuusinen et al. 1990).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On tree bases, shrubs and dead wood of mountain forests, generally at medium to high elevations, often in cold sites and more tolerant of snow burial than other epiphytic Cetraria-like species. Range is from Alaska to Oregon, east to Montana and south to New Mexico. Most frequent in continental mountain climates, rare in the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthomendoza fallax</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthomendoza_fallax_picture.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_fallax_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Xanthomendoza_fallax_graph.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_fallax_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present at 5.2/ absent at 5.2-10.4 ppb (LeBlanc et al 1972a).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: 18 (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Tolerant: &lt; 20 to &gt; 65 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark (especially Populus and other broad-leaved spp), occasionally on rock. Mostly open to somewhat sheltered, often nutrient-enriched sites. PNW: Most common in the Willamette and Medford valleys and along the Columbia River, and in forests bordering the Columbia Plateau, infrequent to rare elsewhere.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthomendoza fulva</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthomendoza_fulva_picture.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_fulva_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, especially of hardwoods. Common in low elevation dry forests of the PNW, notably se OR (Medford and Klamath Valleys), the Columbia River Gorge, the eastern OR and WA Cascades, and other mountain ranges of eastern OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthomendoza hasseana</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthomendoza_hasseana_picture.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_hasseana_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, especially of hardwoods. Common in low elevation dry forests of the PNW, notably se OR (Medford and Klamath Valleys), the Columbia River Gorge, the eastern OR and WA Cascades, and other mountain ranges of eastern OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthomendoza oregana</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthomendoza_oregana_picture.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_oregana_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark, especially of hardwoods. Widespread in low elevation forests throughout the PNW, notably the Puget Trough, Willamette Valley, Rogue Valley, the Columbia River Gorge, the eastern OR and WA Cascades, and other mountain ranges of eastern OR and WA.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoparmelia cumberlandia</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthomendoza_cumberlandia_picture.jpeg']} alt={`./pacificLichenPictures/Xanthomendoza_cumberlandia_picture`} width="300" height="200"/>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: present from 5-15 ppb (Ryan and Rhodes 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On exposed to somewhat sheltered rock, sometimes overgrowing moss or litter over rock. Mostly at low to mid elevations, in both forested and steppe regions. Range is widespread, common throughout the Pacific Northwest.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoria candelaria</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthoria_candelaria_picture.jpeg']} alt={`./pacificLichenPictures/Xanthoria_candelaria_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Xanthoria_candelaria_graph.jpeg']} alt={`./pacificLichenPictures/Xanthoria_candelaria_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 22.2/absent at 25.9 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive: &lt; 20 ppb (Peterson et al. 1992); (Ryan 1990).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock, also occasionally on bark. Sheltered rock faces in a wide range of macroclimates and elevations; on bark in both open and sheltered sites. Widespread, throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoria elegans</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthoria_elegans_picture.jpeg']} alt={`./pacificLichenPictures/Xanthoria_elegans_picture`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Genus is eutrophic.</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Tolerant: &lt; 16-50 ppb (Vick & Bevan 1976).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On rock, both calcareous and noncalcareous, occasionally overgrowing moss or litter over rock. Exposed to somewhat sheltered sites, often where nutrient enriched by bird or small mammal droppings. Widespread; throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoria parietina</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthoria_parietina_picture.jpeg']} alt={`./pacificLichenPictures/Xanthoria_parietina_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Xanthoria_parietina_graph.jpeg']} alt={`./pacificLichenPictures/Xanthoria_parietina_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate: present at 25.9/ absent at 25.9-33.3 ppb (Wetmore 1983 based on Deruelle 1977, Johnsen & Søchting 1973 & 1976, Jürgling 1975, Trass 1973, Vick & Bevan 1976), absent above 26 ppb (Hawksworth and Rose 1970).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: (Perkins & Millar 1987a). Intermediate to Tolerant: (Perkins & Millar 1987b).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood, rarely on rock (e.g. gravestones).Hardwood forests in low-elevation broad valleys; scattered on Populus and other hardwoods in riparian areas in agricultural and populated areas. West of the Cascade crest; so far known in the PNW only from the Willamette-Puget trough and along the Columbia River from Portland to the Dalles.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoria polycarpa</em></Typography>
    <img src={images['./pacificLichenPictures/Xanthoria_polycarpa_picture.jpeg']} alt={`./pacificLichenPictures/Xanthoria_polycarpa_picture`} width="300" height="200"/>
    <img src={images['./pacificLichenPictures/Xanthoria_polycarpa_graph.jpeg']} alt={`./pacificLichenPictures/Xanthoria_polycarpa_graph`} width="300" height="200"/>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Eutroph with a high N requirement, peak detection frequency occurs at 6.1 kg N per ha per y (McCune and Geiser 2009).</Typography>
    <Typography><strong>Sulfur dioxide</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: present at 5.2-20/absent at 24 ppb (Wetmore 1983 based on Hawksworth & Rose 1970, LeBlanc et al. 1972a, Trass 1973).</Typography>
    <Typography><strong>Fluorine</strong></Typography>
    <Typography sx={{marginLeft:5}}>Sensitive to Intermediate: 19 (LeBlanc et al. 1972b).</Typography>
    <Typography><strong>Ozone/PAN</strong></Typography>
    <Typography sx={{marginLeft:5}}>Intermediate to Tolerant: (Ryan 1990); &gt; 65 ppb (Peterson et al. 1992).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood; mostly on hardwoods but occasionally on conifers, often where nutrient enriched. In a wide range of habitats at low to middle elevations, but most common on hardwood twigs; also on sagebrush in steppe and in other dry open habitats. Widespread; common throughout the PNW.</Typography>

</Container>
<Divider variant="middle" sx={{  borderTop: 3 }} />
<Container>
    <Typography sx={{fontSize:20, fontWeight: 'bold', m: 1 }}> <em>Xanthoria tenax</em></Typography>
    <Typography><strong>Nitrogen deposition</strong></Typography>
    <Typography sx={{marginLeft:5}}>Nitrophile (Jovan 2008).</Typography>
    <Typography><strong>Habitat</strong></Typography>
    <Typography sx={{marginLeft:5}}>On bark and wood; known from California. Grows interspersed with Xanthoria polycarpa.</Typography>

</Container>
</Grid>

    )

}