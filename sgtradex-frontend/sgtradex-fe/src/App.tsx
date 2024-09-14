import React from 'react';
import './App.css';
import io from 'socket.io-client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableButton from './components/TableButton';
import { Vessel } from './interfaces/Vessel';

const socket = io("http://localhost:5000");

function App() {

  const [vessels, setVessels] = React.useState<Vessel[]>([]);
  const [trackedVessels, setTrackedVessels] = React.useState<number[]>([]);

  function updateTrackedVessels(imo: number) {
    if (trackedVessels.includes(imo)) {
      const updatedArray = trackedVessels.filter(item => item !== imo);
      setTrackedVessels([...updatedArray]);
    } else {
      setTrackedVessels([...trackedVessels, imo]);
    }
  }

  function updateVessels(updatedVessels: any) {
    setVessels([...updatedVessels]);
  }

  React.useEffect(() => {
    socket.on("update_vessels", (data) => {
      updateVessels(data);
    })
  }, [socket]);

  React.useEffect(() => {
    socket.on("retrieve_data", (dummyData) => {
      setVessels(dummyData);
    });
  }, []);

  return (
    <div className="center">
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
              <TableRow
                key={vessel.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{vessel.id}</TableCell>
                <TableCell align="left">{vessel.name}</TableCell>
                <TableCell align="left">{vessel.imo}</TableCell>
                <TableCell align="left">{vessel.lat}</TableCell>
                <TableCell align="left">{vessel.lng}</TableCell>
                <TableCell align="left">{vessel.destination}</TableCell>
                <TableCell align="left">
                  <TableButton
                    id={vessel.id}
                    name={vessel.name}
                    imo={vessel.imo}
                    lat={vessel.lat}
                    lng={vessel.lng}
                    destination={vessel.destination}
                    updateTrackedVessels={updateTrackedVessels}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
