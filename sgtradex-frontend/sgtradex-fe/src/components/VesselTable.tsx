import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function VesselTable() {
    return (
        <TableContainer sx={{width: "50vw"}} component={Paper}>
            <Table sx={{ width: "50vw" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">IMO</TableCell>
                        <TableCell align="left">LAT</TableCell>
                        <TableCell align="left">LANG</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                    <TableCell align="left">a</TableCell>
                </TableBody>
            </Table>
        </TableContainer>

    )
}
