import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Vessel } from '../interfaces/Vessel';

interface VesselRowProps {
    vessel: Vessel;
    onTrackClick: (imo: number) => void;
}

const VesselRow: React.FC<VesselRowProps> = ({ vessel, onTrackClick }) => {
    return (
        <TableRow key={vessel.imo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">{vessel.id}</TableCell>
            <TableCell align="left">{vessel.name}</TableCell>
            <TableCell align="left">{vessel.imo}</TableCell>
            <TableCell align="left">{vessel.lat}</TableCell>
            <TableCell align="left">{vessel.lng}</TableCell>
            <TableCell align="left">{vessel.destination}</TableCell>
            <TableCell align="left">
                <Button variant="contained" onClick={() => onTrackClick(vessel.imo)}>TRACK</Button>
            </TableCell>
        </TableRow>
    );
};

export default VesselRow;
