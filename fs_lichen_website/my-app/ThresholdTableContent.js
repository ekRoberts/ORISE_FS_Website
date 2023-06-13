import React, { useState, useEffect } from 'react';
import './App';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Divider} from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';


export default function ThresholdTableContent({hidden, onButtonClick}) {

    function createData(Element, Alectoria_sarmentosa,	Bryoria_fremontii,	Hypogymnia_apinnata_enteromorpha, Hypogymnia_inactiva, Hypogymnia_imshaugii, Letharia_vulpina, Lobaria_oregana, Platismatia_glauca,	Sphaerophorus_globosus,	shrubby_Usnea) {
        return {Element, Alectoria_sarmentosa, Bryoria_fremontii, Hypogymnia_apinnata_enteromorpha, Hypogymnia_inactiva, Hypogymnia_imshaugii, Letharia_vulpina, Lobaria_oregana, Platismatia_glauca,	Sphaerophorus_globosus,	shrubby_Usnea };
      }

    const rows = [
        createData("No. of records",391,95,	83,	88,	56,	159,89,	250,73,	40),
        createData("Ash%", 2.9,	3.6,	10.5,	6.8,	8.9	,2.6,	3.7	, 'NA'	,3.7,	2.9),
        createData("TotS%", 0.06,0.11,0.09,0.12,0.09,0.08,0.15,0.07,0.07,0.08),
        createData("TKN%", 0.65,1.61,0.76,0.81,0.99,1.03,2.36,0.59,0.56,0.75),
        createData("Al", 170,695,2101,2166,1772,614,865,1514,579,499),
        createData("B", 4.9,34.2,9.2,5.3,13.9,3.5,5.1,3.6,5.1,3.7),
        createData('Ba', 32,31,143.2,85.3,153,52.1,14.4,68.1,23.8,30.1),
        createData('Be', 0.04,0.04,0.08,0.08,0.06,0.04,0.04,0.05,0.04,0.04),
        createData('Ca', 9857,4222,27346,18107,27766,7325,1243,3507,1857,8202), 
        createData('Cd',0.4,0.6,0.8,0.4,0.5,0.4,0.8,0.5,0.2,0.3),
        createData('Co', 0.4, 0.3, 0.5, 0.3, 0.9, 0.4, 0.3, 0.3, 0.3, 0.4),
        createData('Cr'	,1.8,2.9,3.7,5,4.5,2.1,1.9,3,3.7,4.1),
        createData('Cu', 10.2,23.3,39.1,47.2,33.8,14.9,10.7,27.8,23.1,25.6),
        createData('Fe',139,581,1655,2286,1746,472,622,1459,552,272),
        createData('K',2583,4718,3767,3701,3790,3243,9967,2454,2256,3674),
        createData('Li',0.4,0.4,0.8,1.7,0.8,0.4,0.9,0.8,0.7,0.5),
        createData('Mg',602,816,2109,1283,1459,833,684,813,716,2280),
        createData('Mn',490.5,678.9,858.5,745.9,1104.2,408.5,448.4,803.7,466.9,572),
        createData('Mo',0.2,0.4,1.1,1,0.6,0.3,0.4,0.8,0.4,0.4),
        createData('Na'	,230.4,	117.8,	561.6,	334.2,	295,	134,	263.7,	266.2,	387.9,	934),
        createData('Ni',	2.4,	3.6,	6.6,	6.8,	6,	2.7,	2.6,	4.4,	3.6,	7.1),
        createData('P',	1054,	1938,	1739,	1560,	1564,	1147,	3821,	1145,	940,	1174),
        createData('Pb',	6.1,	3.3,	23.8,	16.6,	12.8,	7,	3.6,	10,	3.2,	13.3),
        createData('Rb',	53,	53,	53,	53,	53,	53,	57,	53,	53,	53),
        createData('Si',	320,	607,	1168,	1130,	939,	728,	984,	1043,	750,	620),
        createData('Sr',	27.4,	38,	99.6,	103,	126,	31.7,	10.4,	41.7,	14.8,	31.4),
        createData('Ti',	15.4,	62.4,	216.5,	141.6,	140.9,	56,	84.7,	124.3,	35.9,	40.6),
        createData('V',	0.8,	1.4,	6.8,	6.1,	3.5,	1.5,	3,	4.6,	4.5,	1.5),
        createData('Zn',	44.5,	56.1,	62.7,	66.8,	62.9,	43.6,	73.8,	49.6,	34.5,	65.8)

    ];


    return(
        <Grid hidden={hidden}>
            <Typography variant="h4" sx={{fontWeight: 'bold', marginBottom:5}}>Provisional Element Analysis Thresholds</Typography>
            <Typography>Provisional Element Analysis Thresholds: 97.5 % quantiles for element concentrations in lichens from background sites in Oregon, Washington and Alaska National Forests. Values above these concentrations are considered elevated; values at or below these concentrations are considered within background range. Concentration units are parts per million dry weight unless otherwise noted</Typography>
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>  </TableCell>
                        <TableCell align="right"> Alectoria sarmentosa </TableCell>
                        <TableCell align="right"> Bryoria fremontii</TableCell>
                        <TableCell align="right">Hypogymnia apinnata/enteromorpha</TableCell>
                        <TableCell align="right">Hypogymnia inactiva</TableCell>
                        <TableCell align="right">Hypogymnia imshaugii</TableCell>
                        <TableCell align="right">Letharia vulpina</TableCell>
                        <TableCell align="right">Lobaria oregana</TableCell>
                        <TableCell align="right">Platismatia glauca</TableCell>
                        <TableCell align="right">Sphaerophorus globosus</TableCell>
                        <TableCell align="right">shrubby Usnea</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) =>(

                        <TableRow
                        key={row.Element}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="th" scope="row">
                                    {row.Element}
                            </TableCell>
                            <TableCell align="right">{row.Alectoria_sarmentosa}</TableCell>
                            <TableCell align="right">{row.Bryoria_fremontii}</TableCell>
                            <TableCell align="right">{row.Hypogymnia_apinnata_enteromorpha}</TableCell>
                            <TableCell align="right">{row.Hypogymnia_inactiva}</TableCell>
                            <TableCell align="right">{row.Hypogymnia_imshaugii}</TableCell>
                            <TableCell align="right">{row.Letharia_vulpina}</TableCell>
                            <TableCell align="right">{row.Lobaria_oregana}</TableCell>
                            <TableCell align="right">{row.Platismatia_glauca}</TableCell>
                            <TableCell align="right">{row.Sphaerophorus_globosus}</TableCell>
                            <TableCell align="right">{row.shrubby_Usnea}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
)

}