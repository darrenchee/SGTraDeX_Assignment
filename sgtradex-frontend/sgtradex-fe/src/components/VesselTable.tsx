import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableButton from './TableButton';

const dummyData = [
    {
        "id": 1,
        "name": "ONE HAWK",
        "imo": 9741413,
        "lat": 1.272643,
        "lng": 103.773867,
        "destination": "PILOT EAST BOARD GRD C"
    },
    {
        "id": 2,
        "name": "MAERSK SHEKOU",
        "imo": 9466984,
        "lat": 1.283172,
        "lng": 103.761346,
        "destination": "PILOT EAST BOARD GRD A"
    },
    {
        "id": 3,
        "name": "MSC BUSAN",
        "imo": 9289087,
        "lat": 1.273077,
        "lng": 103.762411,
        "destination": "SELAT PAUH PETRO ANCH"
    },
    {
        "id": 4,
        "name": "PHAR LAP",
        "imo": 9590694,
        "lat": 1.276677,
        "lng": 103.965579,
        "destination": "PILOT EAST BOARD GRD B"
    }
]


export default function VesselTable() {
    return (
        <TableContainer sx={{ width: "50vw" }} component={Paper}>
            <Table sx={{ width: "50vw" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">IMO</TableCell>
                        <TableCell align="left">LAT</TableCell>
                        <TableCell align="left">LNG</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dummyData.map((data) => (
                        <TableRow
                            key={data.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{data.id}</TableCell>
                            <TableCell align="left">{data.name}</TableCell>
                            <TableCell align="left">{data.imo}</TableCell>
                            <TableCell align="left">{data.lat}</TableCell>
                            <TableCell align="left">{data.lng}</TableCell>
                            <TableCell align="left">{data.destination}</TableCell>
                            <TableCell align="left">
                                <TableButton id={data.id}
                                    name={data.name}
                                    imo={data.imo}
                                    lat={data.lat}
                                    lng={data.lng}  // Changed from lng to lang
                                    destination={data.destination}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
