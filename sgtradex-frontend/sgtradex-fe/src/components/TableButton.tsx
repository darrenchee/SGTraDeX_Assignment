import React from 'react';
import Button from '@mui/material/Button';

export type Props = {
    id: number;
    name: string;
    imo: number;
    lat: number;
    lng: number;
    destination: string;
    updateTrackedVessels: (imo: number) => void;
};

export default function TableButton(props: Props) {

    function handleOnClick() {
        console.log(props.id);
        console.log(props.name);
        console.log(props.imo);
        console.log(props.lat);
        console.log(props.lng);
        console.log(props.destination);
        props.updateTrackedVessels(props.imo);
    }

    return (
        <Button variant="contained" onClick={handleOnClick}>TRACK</Button>
    )
}
