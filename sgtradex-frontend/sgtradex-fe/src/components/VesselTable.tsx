import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import VesselRow from './VesselRow';
import { Vessel } from '../interfaces/Vessel';

interface VesselTableProps {
    vessels: Vessel[];
    onTrackClick: (imo: number) => void;
}

const VesselTable: React.FC<VesselTableProps> = ({ vessels, onTrackClick }) => {
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
                    {vessels.map((vessel) => (
                        <VesselRow key={vessel.imo} vessel={vessel} onTrackClick={onTrackClick} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VesselTable;
