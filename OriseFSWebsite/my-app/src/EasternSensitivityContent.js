import React, { useState, useEffect } from 'react';
import './App';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Divider,List, ListItem, ListItemText} from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';


export default function EasternSensitivityContent({hidden, onButtonClick}) {

    function createData(Scientific_Name, Detections, Sensitivity_Nitrogen_Deposition, Sensitivity_Acid_Deposition) {
        return {Scientific_Name, Detections, Sensitivity_Nitrogen_Deposition, Sensitivity_Acid_Deposition};
      }

    const rows = [
        createData('Ahtiana aurescens',	60,	'oligotroph', ''),
        createData('Anaptychia palmulata',	82,'',	 'tolerant'),
        createData('Bryoria capillaris',	16,	'oligotroph',	'sensitive'),
        createData('Bryoria furcellata',	178,	'oligotroph',	'intermediate'),
        createData('Bryoria fuscescens',	35,	'oligotroph',	'sensitive'),
        createData('Bryoria nadvornikiana',	38,	'oligotroph',	'sensitive'),
        createData('Bryoria trichodes',	49,	'oligotroph',	'sensitive'),
        createData('Bulbothrix scortella',	60,	'eutroph',	'tolerant'),
        createData('Candelaria concolor',	454,	'mesotroph',	'sensitive'), 
        createData('Candelaria fibrosa',	26,	'mesotroph',	'sensitive'),
        createData('Canoparmelia caroliniana',	234,	'eutroph',	'tolerant'),
        createData('Canoparmelia cryptochlorophaea',	16,	'eutroph',	'intermediate'),
        createData('Canoparmelia texana',	29, 	'eutroph', ''	 ),
        createData('Cetrelia chicitae',	36,	'oligotroph',	'sensitive'),
        createData('Cetrelia olivetorum',	88,	'oligotroph',	'sensitive'),
        createData('Cladonia caespiticia',	101,	'eutroph',	'tolerant'),
        createData('Cladonia cenotea',	13,	'oligotroph',	'sensitive'),
        createData('Cladonia chlorophaea',	200,	'oligotroph',	'sensitive'),
        createData('Cladonia cristatella',	79,	'oligotroph',	'sensitive'),
        createData('Cladonia cylindrica',	68,	'eutroph',	'tolerant'),
        createData('Cladonia didyma',	17,	'eutroph',	'tolerant'),
        createData('Cladonia floerkeana',	9,	'eutroph', ''	 ),
        createData('Cladonia grayi',	30,	'oligotroph', ''	 ),
        createData('Cladonia macilenta var. bacillaris',	166,	'eutroph'	,'tolerant'),
        createData('Cladonia ochrochlora',	572, '',	 	'tolerant'),
        createData('Cladonia pyxidata',	32,	'mesotroph',	'sensitive'),
        createData('Cladonia rei',	21,	'oligotroph', ''	 ),
        createData('Cladonia squamosa',	63,	'oligotroph',	'sensitive'),
        createData('Coccocarpia palmicola',	13,	'eutroph', ''	 ),
        createData('Collema nigrescens',	12,	'oligotroph',	'intermediate'),
        createData('Collema subflaccidum',	45,	'oligotroph',	'sensitive'),
        createData('Crespoa crozalsiana',	77,	'eutroph',	'tolerant'),
        createData('Evernia mesomorpha',	576,	'oligotroph',	'sensitive'),
        createData('Flavoparmelia baltimorensis',	22,	'eutroph',	'tolerant'),
        createData('Flavoparmelia caperata',	1398,	'eutroph',	'tolerant'),
        createData('Flavopunctelia flaventior',	96,	'mesotroph',	'sensitive'),
        createData('Flavopunctelia soredica',	71,	'mesotroph',	'sensitive' ),
        createData('Heterodermia albicans',	80,	'eutroph',	'tolerant'),
        createData('Heterodermia casarettiana',	26,	'eutroph',	'tolerant' ),
        createData('Heterodermia granulifera',	15,	'eutroph'	,'tolerant'),
        createData('Heterodermia hypoleuca',	12,	'eutroph',	'tolerant'),
        createData('Heterodermia obscurata',	255,	'eutroph'	,'tolerant'),
        createData('Heterodermia speciosa',	144,	'mesotroph',	'sensitive'),
        createData('Heterodermia squamulosa',	28,	'eutroph',	'tolerant'),
        createData('Hyperphyscia syncolla',	9, '',	 	'sensitive'),
        createData('Hypogymnia krogiae',	72,	'oligotroph',	'intermediate'),
        createData('Hypogymnia physodes',	742	,'oligotroph',	'intermediate'),
        createData('Hypogymnia tubulosa',	52,	'oligotroph',	'intermediate'),
        createData('Hypotrachyna croceopustulata',	9	,'eutroph',	'tolerant'),
        createData('Hypotrachyna horrescens',	124,	'eutroph',	'tolerant'),
        createData('Hypotrachyna livida',	227,	'eutroph',	'tolerant'),
        createData('Hypotrachyna minarum',	231,	'eutroph',	'tolerant' ),
        createData('Hypotrachyna osseoalba',	20,	'eutroph',	'intermediate'),
        createData('Hypotrachyna pustulifera',	23,	'eutroph', ''	  ),
        createData('Hypotrachyna revoluta',	13,	'oligotroph', ''	 ),
        createData('Hypotrachyna showmanii',	46,	'eutroph',	'tolerant' ),
        createData('Imshaugia aleurites',	176,	'oligotroph',	'sensitive'),
        createData('Imshaugia placorodia',	15,	'eutroph'	 , ''	 ),
        createData('Leptogium austroamericanum',	13,	'eutroph',	'tolerant'),
        createData('Leptogium cyanescens',	133,	'oligotroph',	'sensitive' ),
        createData('Leptogium saturninum',	18	,'oligotroph',	'sensitive'),
        createData('Lobaria pulmonaria',	193,	'oligotroph',	'sensitive' ),
        createData('Lobaria quercizans',	128,	'oligotroph',	'sensitive'),
        createData('Melanelixia fuliginosa',	44,	'eutroph',	'tolerant'),
        createData('Melanelixia subargentifera',	12,	'mesotroph',	'sensitive'),
        createData('Melanelixia subaurifera',	636,	'oligotroph',	'intermediate'),
        createData('Melanohalea exasperatula',	11,	'mesotroph', ''	 ),
        createData('Melanohalea halei',	44,	'oligotroph',	'tolerant'),
        createData('Melanohalea olivacea',	50,	'oligotroph',	'intermediate'),
        createData('Melanohalea septentrionalis',	148,	'oligotroph',	'sensitive'),
        createData('Menegazzia subsimilis',	34,	'oligotroph',	'sensitive'),
        createData('Myelochroa aurulenta',	620,	'eutroph',	'tolerant'),
        createData('Myelochroa galbina',	346,	'oligotroph',	'sensitive'),
        createData('Nephroma helveticum',	16,	'oligotroph',	'sensitive'),
        createData('Nephroma parile',	10,	'mesotroph',	'sensitive'),
        createData('Pannaria conoplea',	14,	'oligotroph',	'sensitive'),
        createData('Parmelia sulcata',	1169,	'oligotroph' ,	''),
        createData('Parmeliella triptophylla',	11,	'oligotroph',	'sensitive'),
        createData('Parmeliopsis ambigua',	47,	'oligotroph',	'intermediate'),
        createData('Parmeliopsis capitata',	44,	'oligotroph',	'intermediate'),
        createData('Parmeliopsis hyperopta',	26,	'oligotroph',	'sensitive'),
        createData('Parmotrema austrosinense',	11,	'eutroph',	''),
        createData('Parmotrema cetratum',	55,	'eutroph',	'tolerant'),
        createData('Parmotrema crinitum',	53,	'mesotroph',	'tolerant'),
        createData('Parmotrema dilatatum',	37,	'eutroph',	'tolerant'),
        createData('Parmotrema eurysacum',	47,	'eutroph',	''),
        createData('Parmotrema gardneri',	26,	'eutroph',	'tolerant'),
        createData('Parmotrema hypoleucinum',	11,	'eutroph',	'tolerant'),
        createData('Parmotrema hypotropum',	371,	'eutroph',	'tolerant'),
        createData('Parmotrema louisianae',	9,	'eutroph',	'tolerant'),
        createData('Parmotrema margaritatum',	89,	'eutroph',	'tolerant'),
        createData('Parmotrema mellissii', 10, '',	 	'intermediate'),
        createData('Parmotrema perforatum',	154,	'eutroph',	'tolerant'),
        createData('Parmotrema perlatum',	61,	'eutroph',	'tolerant'),
        createData('Parmotrema praesorediosum',	57,	'eutroph', 'intermediate'),
        createData('Parmotrema rampoddense',	37,	'eutroph',	'tolerant'),
        createData('Parmotrema reticulatum',	287,	'eutroph',	'tolerant'),
        createData('Parmotrema stuppeum',	35,	'eutroph',	'tolerant'),
        createData('Parmotrema subisidiosum',	68,	'eutroph',	'tolerant'),
        createData('Parmotrema submarginale',	120,	'eutroph',	'tolerant'),
        createData('Parmotrema subrigidum',	52,	'eutroph',	'intermediate'),
        createData('Parmotrema subtinctorium',	24,	'eutroph',	''),
        createData('Parmotrema tinctorum',	62,	'eutroph',	'intermediate'),
        createData('Parmotrema ultralucens',	24,	'eutroph',	'tolerant'),
        createData('Parmotrema xanthinum',	20,	'eutroph',	'intermediate'),
        createData('Phaeophyscia adiastola',	47,	'eutroph',	'tolerant'),
        createData('Phaeophyscia ciliata',	82,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia hirsuta',	12,	'mesotroph',	''),
        createData('Phaeophyscia hirtella',	32,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia hispidula',	14,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia pusilloides',	567,	'mesotroph',	''),
        createData('Phaeophyscia rubropulchra',	1209,	'eutroph',	'tolerant'),
        createData('Physcia adscendens',	104,	'mesotroph',	'sensitive'),
        createData('Physcia aipolia',	268,	'mesotroph',	'sensitive'),
        createData('Physcia americana',	226,	'eutroph',	'tolerant'),
        createData('Physcia crispa',	12,	'eutroph',	'tolerant'),
        createData('Physcia millegrana',	996,	'eutroph',	'tolerant'),
        createData('Physcia neogaea',	47,	'eutroph','tolerant'),
        createData('Physcia stellaris',	547,	'mesotroph',	'sensitive'),
        createData('Physciella chloantha',	65,	'' ,	'sensitive'),
        createData('Physciella melanchra',	10,	'mesotroph',	'sensitive'),
        createData('Physconia perisidiosa',	285,	'mesotroph',	'sensitive'),
        createData('Platismatia glauca',	103,	'oligotroph',	'intermediate'),
        createData('Platismatia tuckermanii',	212,	'oligotroph',	'sensitive'),
        createData('Polycauliona polycarpa',	136,	'mesotroph',	'sensitive'),
        createData('Pseudevernia cladonia',	12,	'eutroph',	'tolerant'),
        createData('Pseudevernia consocians',	60,	'eutroph'	 ,	''),
        createData('Pseudocyphellaria crocata',	15,	'oligotroph',	'intermediate'),
        createData('Myelochroa galbina',	346,	'oligotroph',	''),
        createData('Punctelia appalachensis',	15,	'eutroph',	'sensitive'),
        createData('Punctelia bolliana',	38,	'mesotroph',	'sensitive'),
        createData('Punctelia graminicola',	40,	'eutroph',	''),
        createData('Punctelia missouriensis',	73,	'eutroph',	'tolerant'),
        createData('Punctelia perreticulata',	499,	'eutroph',	'tolerant'),
        createData('Punctelia reddenda',	16,	'eutroph',	'tolerant'),
        createData('Punctelia rudecta',	1305,	'eutroph',	'tolerant'),
        createData('Pyxine sorediata',	329,	'oligotroph',	''),
        createData('Pyxine subcinerea',	160,	'eutroph',	''),
        createData('Ramalina americana',	336,	'oligotroph',	'sensitive'),
        createData('Ramalina dilacerata',	78,	'oligotroph',	'sensitive'),
        createData('Ramalina intermedia',	24,	'mesotroph',	'sensitive'),
        createData('Ramalina sinensis',	18,	'mesotroph',	'sensitive'),
        createData('Tuckermanella fendleri',	42,	'eutroph',	'tolerant'),
        createData('Tuckermannopsis americana',	152,	'oligotroph',	'sensitive'),
        createData('Tuckermannopsis ciliaris',	92,	'oligotroph',	'tolerant'),
        createData('Tuckermannopsis orbata',	197,	'oligotroph',	'intermediate'),
        createData('Tuckermannopsis sepincola',	11,	'mesotroph',	'intermediate'),
        createData('Usnea cavernosa',	19,	'mesotroph',	'sensitive'),
        createData('Usnea cornuta',	12,	'eutroph',	''),
        createData('Usnea filipendula',	68,	'oligotroph',	'sensitive'),
        createData('Usnea glabrescens',	23,	'mesotroph',	'sensitive'),
        createData('Usnea hirta',	246,	'oligotroph',	'intermediate'),
        createData('Usnea longissima',	18,	'oligotroph',	'sensitive'),
        createData('Usnea mirabilis',	31	,'eutroph',	'tolerant'),
        createData('Usnea mutabilis',	71,	'eutroph',	'tolerant'),
        createData('Usnea rubicunda',	70,	'eutroph',	'tolerant'),
        createData('Usnea strigosa',	323,	'eutroph',	'tolerant'),
        createData('Usnea subfloridana',	259,	'oligotroph',	'sensitive'),
        createData('Usnea subfusca',	12,	'eutroph',	''),
        createData('Usnea subscabrosa',	22,	'eutroph',	'tolerant'),
        createData('Usnea trichodea',	18,	'oligotroph',	'intermediate'),
        createData('Usnocetraria oakesiana',	460,	'oligotroph',	''),
        createData('Vulpicida pinastri',	131,	'oligotroph',	'sensitive'),
        createData('Xanthomendoza fallax',	97,	'mesotroph',	'sensitive')


    ];


    return(
        <Grid hidden={hidden}>
            <Typography variant="h4" sx={{fontWeight: 'bold', marginBottom:5}}>Air Pollution Sensitivity Ratings for Macrolichens in the Eastern US</Typography>
            <Typography> Nitrogen- (fertilizing) and sulfur- (acidifying) containing air pollutants are two pollutants of widespread ecological concern in the United States. When pollutants in the air are deposited to vegetation and soils, whether dissolved in precipitation or dry deposited in particulate form, this is called .atmospheric deposition.. Some lichens are highly sensitive to small changes in nutrient nitrogen availability or to the small changes in acidity (pH), and some prefer a higher nutrient nitrogen environment or can tolerate more acidity than others. As total deposition increases, depending if the pollutants are nitrogen or sulfur containing, or both, it shifts the composition of species present to favor more nutrient nitrogen-loving and/or more acidity-tolerant species. After a certain point, the overall number of species starts to decline and in very high deposition areas, it becomes increasingly difficult to find any lichens at all. Also as deposition increases, the dominant, ecologically important species tend to be displaced by weedy species that do not replace those roles. For example, the beard or forage lichens are preferred as food and nesting materials for wildlife, and cyanolichens are associated with high diversity and abundance of invertebrates. These groups of species tend to be the most sensitive to both nitrogen and sulfur containing air pollutants. Variation in lichen sensitivities to these pollutants is then used to monitor deposition through lichen community surveys.

                    The ratings below are based on national scale surveys by the US Forest Service. See * below for methods.</Typography>       
        <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Nitrogen Requirement: O = oligotroph, M = mesotroph, E = eutroph</Typography>
        <Typography> <strong>Oligotrophs</strong> are most abundant under fertilizing nitrogen deposition regimes averaging 0.5 to 4.2 kg N/ha/yr and are increasingly difficult to find as deposition increases above 4.2. <strong>Mesotrophs</strong> prefer a moderate nutrient regime, 4.2 to 8.0 kg N/ha/yr, and are harder to find above 8.0 and below 4.2. <strong>Eutrophs</strong> tolerate and are often enhanced by N deposition loads above 8.0 kg N/ha/yr. Highest mean annual nitrogen deposition at lichen survey sites from 2000-2012 was about 17 kg/ha/yr in the eastern US, relatively few sites received &lt; 3.5 kg ha/yr.</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Tolerance to acidity: S = sensitive, I = intermediate, T = tolerant</Typography>
        <Typography> <strong>Sensitive (S)</strong> lichens are most abundant under acid deposition regimes averaging 0.5 to 4.2 kg N/ha/yr and are increasingly difficult to find as deposition increases above 4.2. <strong>Intermediate (I)</strong> lichens are most frequently found where S deposition ranges between 4.2 to 8.0 kg S/ha/yr, and are harder to find above 8.0 kg. <strong>Tolerant (T)</strong> lichens can be unaffected by S deposition at or above 8.0 kg S/ha/yr. Highest mean annual sulfur deposition at lichen survey sites from 1993-2012 was about 32 kg/ha/yr in the eastern US, relatively few sites received &lt; 3 kg/ha/yr.</Typography>
        <Typography>Taxonomy follows the 19th North American Checklist.</Typography>
        <Typography sx={{fontWeight: 'bold', marginTop: 5}} > * Brief Methods Summary</Typography>
        <List>
            <ListItem>
                <ListItemText>
                    <strong>1.</strong> Eastern US ratings are based on 2156 systematic surveys across public and private forests east of the Mississippi River following the US Forest Service Forest Inventory & Analysis lichen communities indicator protocol. States not surveyed: MS, TN, KY, FL. Does include northern MN.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>2.</strong> Deposition measure: Community Multi-Scale Air Quality (CMAQ) 5.0.1 modelled estimates for total N and S deposition for the continental US from 2000-2012 at a 12 km grid scale with bi-directional NH3 air-surface exchange using the Massad formulation. Alaska deposition estimates were based on on-site deposition measurements and calibrated lichen element concentrations (Root et al. 2013 Forest Ecol. & Mngmt, 306:1-8).
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>3.</strong> 3-year rolling mean deposition was calculated for each survey site, including survey year and previous 2 years.
               </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>4.</strong> Survey sites were assigned to deposition increments of 0.5 kg/ha/yr, requiring a minimum of 35 sites per increment. To incorporate the high end of the deposition gradients, with fewer plots, the increment length was increased up to 1.5 kg.
               </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>5.</strong> Number of detections per deposition increment was plotted for each species occurring in the eastern US.
               </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>6.</strong> Splines were fit for each species using the function .smooth.spline. with a flexibility setting (.spar.) equal to 0.5 in the software R (v. 3.1.1 R Development Core Team 2014). 
               </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>7.</strong>  The deposition associated with peak detection frequency along the spline was recorded.
               </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <strong>8.</strong>  Sensitivity ratings were assigned as above based on deposition at peak detection frequency after filtering out rare species and species with ambiguous response curves.
               </ListItemText>
            </ListItem>
        </List>
        <Typography variant="h5" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Table: Eastern US Sensitivity Ratings</Typography>

        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right"> <strong>Scientific Name</strong> </TableCell>
                        <TableCell align="right"> <strong>No. of Detections</strong></TableCell>
                        <TableCell align="right"><strong>Sensitivity to Nutrient Nitrogen Deposition</strong></TableCell>
                        <TableCell align="right"><strong>Sensitivity to Acid Deposition</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) =>(

                        <TableRow
                        key={row.Scientific_Name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{row.Scientific_Name}</TableCell>
                            <TableCell align="right">{row.Detections}</TableCell>
                            <TableCell align="right">{row.Sensitivity_Nitrogen_Deposition}</TableCell>
                            <TableCell align="right">{row.Sensitivity_Acid_Deposition}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
)

}