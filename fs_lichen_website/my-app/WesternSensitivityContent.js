import React, { useState, useEffect } from 'react';
import './App';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Divider,List, ListItem, ListItemText} from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';


export default function WesternSensitivityContent({hidden, onButtonClick}) {

    function createData(Scientific_Name, Detections, Sensitivity_Nitrogen_Deposition, Sensitivity_Acid_Deposition) {
        return {Scientific_Name, Detections, Sensitivity_Nitrogen_Deposition, Sensitivity_Acid_Deposition};
      }

    const rows = [
        createData('Ahtiana pallidula',	272,	'oligotroph',	'sensitive'),
        createData('Ahtiana sphaerosporella',	195,	'oligotroph',	'sensitive'),
        createData('Alectoria imshaugii',	978,	'oligotroph',	'sensitive'),
        createData('Alectoria lata',	12,	'eutroph',	'sensitive'),
        createData('Alectoria sarmentosa',	2445,	'oligotroph',	'sensitive'),
        createData('Alectoria vancouverensis',	84,	'oligotroph',	'sensitive'),
        createData('Anomalobaria anomala',	548,	'oligotroph',	'sensitive'),
        createData('Anomalobaria anthraspis',	424,	'oligotroph',	'sensitive'),
        createData('Bryocaulon pseudosatoanum',	49,	'oligotroph',	'sensitive'), 
        createData('Bryoria bicolor',	146,	'oligotroph',	'intermediate'),
        createData('Bryoria capillaris',	1177,	'oligotroph',	''),
        createData('Bryoria carlottae',	38,	'oligotroph',	'intermediate'),
        createData('Bryoria cervinula',	41,	'oligotroph',	'sensitive'),
        createData('Bryoria fremontii',	1095,	'oligotroph',	'sensitive'),
        createData('Bryoria friabilis',	332,	'oligotroph',	'sensitive'),
        createData('Bryoria furcellata',	30,	'oligotroph',	'sensitive'),
        createData('Bryoria fuscescens',	1483,	'oligotroph',	'sensitive'),
        createData('Bryoria glabra',	598,	'oligotroph',	''),
        createData('Bryoria implexa',	12,	'oligotroph',	'intermediate'),
        createData('Bryoria lanestris',	97,	'oligotroph',	''),
        createData('Bryoria nadvornikiana',	36,	'oligotroph',	'sensitive'),
        createData('Bryoria pseudocapillaris',	32,	'oligotroph',	'sensitive' ),
        createData('Bryoria pseudofuscescens',	862,	'oligotroph',	'sensitive'),
        createData('Bryoria simplicior',	195,	'oligotroph',	'sensitive'),
        createData('Bryoria spiralifera',	17,	'oligotroph',	'sensitive'),
        createData('Bryoria subcana',	16,	'oligotroph',	'sensitive'),
        createData('Bryoria tenuis',	103,	'oligotroph',	'sensitive'),
        createData('Bryoria trichodes',	468,	'oligotroph',	'tolerant'),
        createData('Bunodophoron melanocarpum',	25,	'oligotroph',	'sensitive' ),
        createData('Candelaria concolor',	868, 'eutroph',	'tolerant'),
        createData('Cavernularia hultenii',	615,	'oligotroph',	'intermediate'),
        createData('Cavernularia lophyrea',	265,	'oligotroph',	''),
        createData('Cetrelia cetrarioides',	127,	'eutroph',	'tolerant'),
        createData('Cladonia albonigra',	37,	'oligotroph',	'sensitive'),
        createData('Cladonia bellidiflora',	215,	'oligotroph',	'sensitive'),
        createData('Cladonia cariosa',	62,	'mesotroph',	'sensitive'),
        createData('Cladonia carneola',	164,	'oligotroph',	'' ),
        createData('Cladonia cenotea',	29,	'oligotroph',	'tolerant'),
        createData('Cladonia coccifera',	18,	'oligotroph',	'sensitive'),
        createData('Cladonia cornuta',	184,	'oligotroph',	'intermediate'),
        createData('Cladonia decorticata',	23,	'oligotroph',	'sensitive'),
        createData('Cladonia deformis',	35,	'oligotroph',	'sensitive'),
        createData('Cladonia fimbriata',	470,	'' ,	'tolerant'),
        createData('Cladonia grayi',	10,	'oligotroph'	 ,	''),
        createData('Cladonia macilenta var. bacillaris',	9,	'mesotroph',	'sensitive'),
        createData('Cladonia multiformis',	22,	'mesotroph',	'sensitive'),
        createData('Cladonia norvegica',	33,	'mesotroph',	'sensitive'),
        createData('Cladonia ochrochlora',	756,	'' ,	'tolerant'),
        createData('Cladonia pleurota',	42,	'oligotroph',	'sensitive'),
        createData('Cladonia pyxidata',	127,	'mesotroph',	'sensitive'),
        createData('Cladonia scabriuscula',	29,	'oligotroph',	'intermediate'),
        createData('Cladonia squamosa',	567,	'' 	,'sensitive'),
        createData('Cladonia straminea',	13,	'oligotroph',	'sensitive'),
        createData('Cladonia sulphurina',	97,	'oligotroph',	'sensitive'  ),
        createData('Cladonia transcendens',	568,	'eutroph',	'intermediate'),
        createData('Cladonia umbricola',	160,	'oligotroph',	'tolerant'),
        createData('Cladonia verruculosa',	53,	'mesotroph',	'sensitive'),
        createData('Collema furfuraceum',	148,	'eutroph',	'sensitive' ),
        createData('Collema nigrescens',	72,	'eutroph',	'intermediate'),
        createData('Collema subflaccidum',	9,	'mesotroph',	'sensitive'),
        createData('Dendriscocaulon intricatulum',	20,	'oligotroph',	'intermediate'),
        createData('Dendriscosticta wrightii',	12,	'oligotroph',	'sensitive'),
        createData('Enchylium conglomeratum',	13,	'oligotroph',	'sensitive'),
        createData('Erioderma sorediatum',	34,	'oligotroph',	'sensitive'),
        createData('Esslingeriana idahoensis',	580,	'oligotroph',	'sensitive'),
        createData('Evernia divaricata',	35,	'mesotroph'	,'sensitive'),
        createData('Evernia mesomorpha',	10,	'oligotroph',	'sensitive' ),
        createData('Evernia prunastri',	1217,	'eutroph',	'tolerant'),
        createData('Flavoparmelia caperata',	31,	'eutroph',	'intermediate'),
        createData('Flavopunctelia darrowi',	27,	'mesotroph',	'sensitive'),
        createData('Flavopunctelia flaventior',	146,	'eutroph',	'intermediate'),
        createData('Flavopunctelia praesignis',	46,	'mesotroph',	'sensitive'),
        createData('Flavopunctelia soredica',	431,	'mesotroph',	'sensitive'),
        createData('Fuscopannaria ahlneri',	22	,'oligotroph'	,'intermediate'),
        createData('Fuscopannaria laceratula',	52,	'oligotroph',	'sensitive'),
        createData('Fuscopannaria leucostictoides',	81,	'oligotroph',	'intermediate'),
        createData('Fuscopannaria mediterranea',	32, 'mesotroph',	'intermediate'),
        createData('Fuscopannaria pacifica',	101,	'oligotroph',	'intermediate'),
        createData('Fuscopannaria praetermissa',	26,	'oligotroph',	'sensitive'),
        createData('Heterodermia leucomela',	36,	'eutroph',	'intermediate'),
        createData('Heterodermia rugulosa',	34,	'mesotroph',	'sensitive'),
        createData('Hyperphyscia adglutinata',	39,	'mesotroph',	'sensitive'),
        createData('Hypogymnia apinnata',	1151,	'oligotroph',	'intermediate'),
        createData('Hypogymnia austerodes',	129,	'oligotroph', ''	 ),
        createData('Hypogymnia bitteri',	47,	'oligotroph',	'sensitive'),
        createData('Hypogymnia duplicata',	251,	'oligotroph',	'sensitive'),
        createData('Hypogymnia enteromorpha',	1734,	'mesotroph',	'sensitive'),
        createData('Hypogymnia farinacea',	11,	'mesotroph',	'sensitive'),
        createData('Hypogymnia heterophylla',	72,	'oligotroph',	'sensitive'),
        createData('Hypogymnia imshaugii',	2546,	'oligotroph',	'sensitive'),
        createData('Hypogymnia inactiva',	1456,	'mesotroph',	'sensitive'),
        createData('Hypogymnia occidentalis',	986,	'oligotroph',	'sensitive'),
        createData('Hypogymnia oceanica',	250,	'oligotroph',	'intermediate'),
        createData('Hypogymnia physodes',	2055,	'eutroph',	'tolerant'),
        createData('Hypogymnia rugosa',	180,	'oligotroph',	'' ),
        createData('Hypogymnia tubulosa',	1634,	'mesotroph'	 ,	''),
        createData('Hypogymnia vittata',	119,	'oligotroph'	 ,	''),
        createData('Hypogymnia wilfiana',	1067,	'oligotroph',	'sensitive'),
        createData('Hypotrachyna pulvinata',	11,	'mesotroph',	'sensitive'),
        createData('Hypotrachyna revoluta',	9,	'eutroph',	''),
        createData('Hypotrachyna sinuosa',	454,	'eutroph',	'sensitive'),
        createData('Imshaugia aleurites',	30	, '',	'tolerant'),
        createData('Imshaugia placorodia',	70,	'mesotroph',	'sensitive'),
        createData('Kaernefeltia californica',	44,	'oligotroph',	'intermediate'),
        createData('Kaernefeltia merrillii',	1116,	'oligotroph',	'sensitive'),
        createData('Lathagrium fuscovirens',	34,	'mesotroph',	'sensitive'),
        createData('Leioderma sorediatum',	10,	'oligotroph',	'sensitive'),
        createData('Leptochidium albociliatum',	22	,'mesotroph',	'intermediate'),
        createData('Leptogidium contortum',	105,	'oligotroph',	'sensitive'),
        createData('Leptogium arsenei',	13,	'mesotroph',	'sensitive'),
        createData('Leptogium brebissonii',	59,	'oligotroph',	'sensitive'),
        createData('Leptogium burnetiae',	25,	'oligotroph',	'intermediate'),
        createData('Leptogium cyanescens',	23	,'mesotroph',	'sensitive'),
        createData('Leptogium denticulatum',	17,	'mesotroph',	'sensitive'),
        createData('Leptogium milligranum',	11,	'mesotroph',	'sensitive'),
        createData('Leptogium pseudofurfuraceum',	121,	'mesotroph',	'sensitive'),
        createData('Leptogium saturninum',	101,	'mesotroph',	'sensitive'),
        createData('Leptogium teretiusculum',	9	,'eutroph',	'sensitive'),
        createData('Letharia columbiana',	1171,	'oligotroph',	'sensitive'),
        createData('Letharia vulpina',	2387,	'oligotroph',	'sensitive'),
        createData('Lobaria amplissima',	13,	'oligotroph',	'sensitive'),
        createData('Lobaria hallii',	84,	'oligotroph',	'intermediate'),
        createData('Lobaria linita',	217,	'oligotroph', ''	 ),
        createData('Lobaria oregana',	630,	'oligotroph',	'sensitive'),
        createData('Lobaria pulmonaria',	770,	'oligotroph',	'sensitive'),
        createData('Lobaria retigera',	14,	'oligotroph',	'sensitive'),
        createData('Lobaria scrobiculata',	275,	'oligotroph' ,	''),
        createData('Loxosporopsis corallifera',	86,	'' ,	'tolerant'),
        createData('Melanelixia fuliginosa',	205, 'eutroph',	'tolerant'),
        createData('Melanelixia glabra',	140,	'eutroph',	'tolerant'),
        createData('Melanelixia subargentifera',	79,	'eutroph',	''),
        createData('Melanelixia subaurifera',	302,	'eutroph',	'sensitive'),
        createData('Melanohalea elegantula',	1048,	'oligotroph',	'sensitive'),
        createData('Melanohalea exasperata',	64,	'mesotroph',	'intermediate'),
        createData('Melanohalea exasperatula',	1472,	'mesotroph',	'sensitive'),
        createData('Melanohalea olivacea',	10,	'oligotroph',	'sensitive'),
        createData('Melanohalea subolivacea',	1759,	'', 	'sensitive'),
        createData('Menegazzia subsimilis',	299,	'eutroph',	'sensitive'),
        createData('Montanelia disjuncta',	19,	'eutroph',	'intermediate'),
        createData('Montanelia panniformis',	17, ''	, 	'sensitive'),
        createData('Montanelia sorediata',	18,	'oligotroph',	'sensitive'),
        createData('Montanelia tominii',	29,	'mesotroph',	'intermediate'),
        createData('Nephroma arcticum',	24,	'oligotroph'	,	''),
        createData('Nephroma bellum',	301,	'oligotroph',	'tolerant'),
        createData('Nephroma helveticum',	443,	'oligotroph',	'sensitive'),
        createData('Nephroma isidiosum',	37,	'oligotroph',	'intermediate'),
        createData('Nephroma laevigatum',	148,	'oligotroph',	'sensitive'),
        createData('Nephroma occultum',	29,	'oligotroph',	'intermediate'),
        createData('Nephroma parile',	195,	'oligotroph',	'tolerant'),
        createData('Nephroma resupinatum',	324,	'mesotroph',	'sensitive'),
        createData('Niebla cephalota',	30,	'eutroph',	'intermediate'),
        createData('Nodobryoria abbreviata',	1289,	'oligotroph',	'sensitive'),
        createData('Nodobryoria oregana',	1267,	'oligotroph',	'sensitive'),
        createData('Parmelia pseudosulcata',	252,	'oligotroph',	'tolerant'),
        createData('Parmelia saxatilis',	318,	'', 	'sensitive'),
        createData('Parmelia squarrosa',	129,	'oligotroph',	''),
        createData('Parmelia sulcata',	2446,	'eutroph',	'tolerant'),
        createData('Parmeliella parvula',	11,	'oligotroph',	'sensitive'),
        createData('Parmeliella triptophylla',	29,	'oligotroph',	'intermediate'),
        createData('Parmelina coleae',	89,	'eutroph',	'sensitive'),
        createData('Parmeliopsis ambigua',	1371,	'oligotroph',	'sensitive'),
        createData('Parmeliopsis hyperopta',	1908,	'oligotroph',	'sensitive'),
        createData('Parmotrema arnoldii',	145,	'eutroph',	'sensitive'),
        createData('Parmotrema crinitum',	35,	'oligotroph',	'sensitive'),
        createData('Parmotrema perlatum',	131,	'eutroph',	'sensitive'),
        createData('Peltigera collina',	629,	'eutroph',	'intermediate'),
        createData('Phaeophyscia ciliata',	92,	'', 	'intermediate'),
        createData('Phaeophyscia decolor',	20,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia endococcina',	26,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia hirsuta',	362,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia hirtella',	9,	'oligotroph',	'sensitive'),
        createData('Phaeophyscia hispidula',	43,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia kairamoi',	15,	'oligotroph',	'sensitive'),
        createData('Phaeophyscia nigricans',	79,	'mesotroph',	'sensitive'),
        createData('Phaeophyscia orbicularis',	212,	'eutroph',	'intermediate'),
        createData('Phaeophyscia sciastra',	43,	'mesotroph',	'sensitive'),
        createData('Physcia adscendens',	1309,	'eutroph',	'tolerant'),
        createData('Physcia aipolia',	583,	'eutroph',	'sensitive'),
        createData('Physcia biziana',	631,	'eutroph',	'sensitive'),
        createData('Physcia caesia',	163,	'mesotroph',	'sensitive'),
        createData('Physcia dimidiata',	544,	'eutroph',	'intermediate'),
        createData('Physcia dubia',	196,	'mesotroph',	'sensitive'),
        createData('Physcia stellaris',	333,	'' 	,'sensitive'),
        createData('Physcia tenella',	330,	'eutroph',	'tolerant'),
        createData('Physcia tribacia',	18,	'mesotroph',	'sensitive'),
        createData('Physciella chloantha',	159,	'mesotroph',	'sensitive'),
        createData('Physciella melanchra',	25,	'eutroph',	'sensitive'),
        createData('Physciella nepalensis',	17,	'oligotroph',	'sensitive'),
        createData('Physconia americana',	213,	'eutroph',	'intermediate'),
        createData('Physconia elegantula',	33, 'mesotroph',	'sensitive'),
        createData('Physconia enteroxantha',	282,	'eutroph',	'intermediate'),
        createData('Physconia fallax',	26,	'eutroph',	'tolerant'),
        createData('Physconia grisea',	11,	'mesotroph',	'sensitive'),
        createData('Physconia muscigena',	46,	'mesotroph',	'sensitive'),
        createData('Physconia perisidiosa',	510,	'eutroph',	'intermediate'),
        createData('Placidium arboreum',	9,	'mesotroph',	'sensitive'),
        createData('Platismatia glauca',	2943,	'mesotroph',	'tolerant'),
        createData('Platismatia herrei',	1446,	'mesotroph',	'sensitive'),
        createData('Platismatia lacunosa',	210,	'oligotroph',	'sensitive'),
        createData('Platismatia norvegica',	598,	'oligotroph',	''),
        createData('Platismatia stenophylla',	1063,	'mesotroph',	'sensitive'),
        createData('Polycauliona candelaria',	276,	'' 	,'tolerant'),
        createData('Polycauliona polycarpa',	1735,	'eutroph',	'tolerant'),
        createData('Polycauliona tenax',	21,	'eutroph',	'intermediate'),
        createData('Polychidium muscicola',	29,	'oligotroph',	'sensitive'),
        createData('Protopannaria pezizoides',	63,	'oligotroph',	'sensitive'),
        createData('Pseudevernia intensa',	80,	'mesotroph',	'sensitive'),
        createData('Pseudocyphellaria crocata',	287,	'oligotroph',	'intermediate'),
        createData('Pseudocyphellaria mallota',	13,	'oligotroph',	'sensitive'),
        createData('Pseudocyphellaria rainierensis',	50	,'oligotroph',	'sensitive'),
        createData('Punctelia graminicola',	10,	'mesotroph',	'sensitive'),
        createData('Punctelia hypoleucites',	37,	'mesotroph',	'sensitive'),
        createData('Punctelia perreticulata',	92,	'eutroph',	'sensitive'),
        createData('Ramalina dilacerata',	269,	'mesotroph',	'sensitive'),
        createData('Ramalina farinacea',	1028,	'eutroph',	'tolerant'),
        createData('Ramalina leptocarpha',	24,	'eutroph'	,'intermediate'),
        createData('Ramalina menziesii',	98,	'mesotroph',	'intermediate'),
        createData('Ramalina obtusata',	9,	'' 	,'intermediate'),
        createData('Ramalina pollinaria',	37,	'mesotroph',	'intermediate'),
        createData('Ramalina roesleri',	154,	'oligotroph',	'intermediate'),
        createData('Ramalina sinensis',	57,	'mesotroph',	'sensitive'),
        createData('Ramalina subleptocarpha',	94,	'eutroph',	'tolerant'),
        createData('Ramalina thrausta',	72,	'oligotroph',	'sensitive'),
        createData('Rusavskia sorediata',	34,	'mesotroph',	'sensitive'),
        createData('Scytinium cellulosum',	13,	'mesotroph',	'sensitive'),
        createData('Scytinium gelatinosum',	19,	'eutroph'	,'sensitive'),
        createData('Scytinium lichenoides',	108,	'mesotroph',	'intermediate'),
        createData('Scytinium palmatum',	63,	'eutroph'	,'sensitive'),
        createData('Scytinium polycarpum',	94,	'eutroph',	'tolerant'),
        createData('Sphaerophorus globosus',	1457	, '',	'sensitive'),
        createData('Sticta beauvoisii',	90,	'oligotroph',	'sensitive'),
        createData('Sticta fuliginosa',339,	'mesotroph',	'sensitive'),
        createData('Sticta limbata',	235,	'eutroph',	'sensitive'),
        createData('Teloschistes chrysophthalmus',	10,	'eutroph',	'intermediate'),
        createData('Tuckermanella coralligera',	33	,'mesotroph',	'sensitive'),
        createData('Tuckermanella fendleri',	118,	'mesotroph',	'sensitive'),
        createData('Tuckermanella weberi',	11,	'mesotroph',	'sensitive'),
        createData('Tuckermannopsis chlorophylla',	2219,	'oligotroph',	''),
        createData('Tuckermannopsis orbata',	1525,	'mesotroph',	'sensitive'),
        createData('Tuckermannopsis platyphylla',	1511,	'oligotroph',	'sensitive'),
        createData('Tuckermannopsis sepincola',	13,	'oligotroph',	'sensitive'),
        createData('Tuckermannopsis subalpina',	86,	'mesotroph',	'sensitive'),
        createData('Usnea cavernosa',	68,	'mesotroph',	'sensitive'),
        createData('Usnea cornuta',	251,	'eutroph',	''),
        createData('Usnea filipendula',	947,	'mesotroph',	'sensitive'),
        createData('Usnea flavocardia',	428,	'eutroph',	'sensitive'),
        createData('Usnea fragilescens',	91,	'oligotroph',	'sensitive'),
        createData('Usnea glabrata',	286,	'eutroph',	'intermediate'),
        createData('Usnea glabrescens',	79,	'mesotroph',	'intermediate'),
        createData('Usnea hirta',	544,	'mesotroph',	'sensitive'),
        createData('Usnea intermedia',	31,	'mesotroph',	'sensitive'),
        createData('Usnea lapponica',	836,	'oligotroph',	'sensitive'),
        createData('Usnea longissima',	200,	'oligotroph',	'sensitive'),
        createData('Usnea pacificana',	129,	'mesotroph',	'sensitive'),
        createData('Usnea parvula',	13,	'oligotroph',	'sensitive'),
        createData('Usnea rubicunda',	31,	'oligotroph',	'sensitive'),
        createData('Usnea scabrata',	642,	'oligotroph',	'sensitive'),
        createData('Usnea silesiaca',	64,	'oligotroph',	'tolerant'),
        createData('Usnea subfloridana',	312,	'mesotroph',	'sensitive'),
        createData('Usnea subgracilis',	33,	'oligotroph',	'sensitive'),
        createData('Usnea substerilis',	130,	'eutroph',	'sensitive'),
        createData('Usnea wasmuthii',	18,	'eutroph',	''),
        createData('Vahliella leucophaea',	17,	'mesotroph',	'sensitive'),
        createData('Vahliella saubinetii',	32,	'mesotroph',	''),
        createData('Vulpicida canadensis',	755,	'oligotroph',	'sensitive'),
        createData('Vulpicida pinastri',	137,	'mesotroph',	'sensitive'),
        createData('Xanthomendoza fallax',	1441,	'eutroph',	''),
        createData('Xanthoria parietina',	38,	'eutroph',	'sensitive'),




    ];


    return(
        <Grid hidden={hidden}>
            <Typography variant="h4" sx={{fontWeight: 'bold', marginBottom:5}}>Air Pollution Sensitivity Ratings for Macrolichens in the Eastern US</Typography>
            <Typography> Nitrogen- (fertilizing) and sulfur- (acidifying) containing air pollutants are two pollutants of widespread ecological concern in the United States. When pollutants in the air are deposited to vegetation and soils, whether dissolved in precipitation or dry deposited in particulate form, this is called .atmospheric deposition.. Some lichens are highly sensitive to small changes in nutrient nitrogen availability or to the small changes in acidity (pH), and some prefer a higher nutrient nitrogen environment or can tolerate more acidity than others. As total deposition increases, depending if the pollutants are nitrogen or sulfur containing, or both, it shifts the composition of species present to favor more nutrient nitrogen-loving and/or more acidity-tolerant species. After a certain point, the overall number of species starts to decline and in very high deposition areas, it becomes increasingly difficult to find any lichens at all. Also as deposition increases, the dominant, ecologically important species tend to be displaced by weedy species that do not replace those roles. For example, the beard or forage lichens are preferred as food and nesting materials for wildlife, and cyanolichens are associated with high diversity and abundance of invertebrates. These groups of species tend to be the most sensitive to both nitrogen and sulfur containing air pollutants. Variation in lichen sensitivities to these pollutants is then used to monitor deposition through lichen community surveys.

                    The ratings below are based on national scale surveys by the US Forest Service. See * below for methods.</Typography>       
        <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Nitrogen Requirement: O = oligotroph, M = mesotroph, E = eutroph</Typography>
        <Typography> <strong>Oligotrophs</strong> are most abundant under fertilizing nitrogen deposition regimes averaging 0.5 to 4.2 kg N/ha/yr and are increasingly difficult to find as deposition increases above 4.2. <strong>Mesotrophs</strong> prefer a moderate nutrient regime, 4.2 to 8.0 kg N/ha/yr, and are harder to find above 8.0 and below 4.2. <strong>Eutrophs</strong> tolerate and are often enhanced by N deposition loads above 8.0 kg N/ha/yr. Highest mean annual nitrogen deposition at lichen survey sites from 2000-2012 was about 8 kg/ha/yr in the western US, relatively few sites received &lt; 0.7 kg ha/yr.</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Tolerance to acidity: S = sensitive, I = intermediate, T = tolerant</Typography>
        <Typography> <strong>Sensitive (S)</strong> lichens are most abundant under acid deposition regimes averaging 0.5 to 4.2 kg N/ha/yr and are increasingly difficult to find as deposition increases above 4.2. <strong>Intermediate (I)</strong> lichens are most frequently found where S deposition ranges between 4.2 to 8.0 kg S/ha/yr, and are harder to find above 8.0 kg. <strong>Tolerant (T)</strong> lichens can be unaffected by S deposition at or above 8.0 kg S/ha/yr. Highest mean annual sulfur deposition at lichen survey sites from 2000-2012 was about 3 kg/ha/yr in the western US, relatively few sites received &lt; 0.2 kg/ha/yr..</Typography>
        <Typography>Taxonomy follows the 19th North American Checklist.</Typography>
        <Typography sx={{fontWeight: 'bold', marginTop: 5}} > * Brief Methods Summary</Typography>
        <List>
            <ListItem>
                <ListItemText>
                    <strong>1.</strong> Western US ratings are based on 6699 surveys across the western US west of the Great Plains states, primarily following the US Forest Inventory & Analysis lichen communities indicator protocol. Includes southern AK, WA, OR, CA, ID, NV, AZ, NM, CO, UT, WY, MT.
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
                <strong>5.</strong> Number of detections per deposition increment was plotted for each species occurring in the western US.
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
        <Typography variant="h5" sx={{fontWeight: 'bold', marginBottom:5, marginTop:5}}> Table: Western US Sensitivity Ratings</Typography>

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