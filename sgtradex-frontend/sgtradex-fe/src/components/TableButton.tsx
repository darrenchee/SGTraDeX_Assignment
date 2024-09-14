import React from 'react';
import Button from '@mui/material/Button';
import { Vessel } from '../interfaces/Vessel';

export type Props = {
    id: number;
    name: string;
    imo: number;
    lat: number;
    lng: number;
    destination: string;
};

export default function TableButton(props: Props) {

    function handleOnClick() {
        console.log(props.id);
        console.log(props.name);
        console.log(props.imo);
        console.log(props.lat);
        console.log(props.lng);
        console.log(props.destination);
    }

    return (
        <Button variant="contained" onClick={handleOnClick}>TRACK</Button>
    )
}
