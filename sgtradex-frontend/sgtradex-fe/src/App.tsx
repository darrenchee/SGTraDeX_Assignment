import React from 'react';
import './App.css';
import io from 'socket.io-client';
import { Vessel } from './interfaces/Vessel';
import axios from 'axios';
import VesselTable from './components/VesselTable';

const socket = io("http://localhost:5000");

function App() {

  const [vessels, setVessels] = React.useState<Vessel[]>([]);
  const [trackedVessels, setTrackedVessels] = React.useState<number[]>([]);
  const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null);
  const [hasVesselUpdated, setHasVesselUpdated] = React.useState<Map<number, boolean>>(new Map());

  function resetTimer(trackedVessels: number[]) {
    if (timer) clearTimeout(timer);

    const restartedTimer = setTimeout(() => {
      sendTrackedVessels(trackedVessels);
    }, 2 * 60 * 1000)

    setTimer(restartedTimer);
  }

  function sendTrackedVessels(trackedVessels: number[]) {
    axios.post("http://localhost:5000/api/track", {
      vessels: trackedVessels
    }).then(() => {
      console.log("success")
    })
  }

  function updateTrackedVessels(imo: number) {
    setTrackedVessels((prev) => {
      const updatedArray = prev.includes(imo)
        ? prev.filter(item => item !== imo)
        : [...prev, imo];
      resetTimer(updatedArray);

      setHasVesselUpdated((prevStatus) => {
        const updatedStatus = new Map(prevStatus);
        updatedStatus.set(imo, true);
        return updatedStatus;
      });

      return updatedArray;
    });
  }

  async function handleOnClick(imo: number) {
    setHasVesselUpdated((prevStatus) => {
      const updatedStatus = new Map(prevStatus);
      updatedStatus.set(imo, false);
      return updatedStatus;
    });

    updateTrackedVessels(imo);
  }

  function updateVessels(updatedVessels: Vessel[]) {
    setVessels([...updatedVessels]);
  }

  React.useEffect(() => {
    socket.on("update_vessels", (data) => {
      const { updatedVesselsData, updatedVesselImo } = data;
      updateVessels(updatedVesselsData);

      setHasVesselUpdated((prevStatus) => {
        const updatedStatus = new Map(prevStatus);
        if (updatedStatus.has(updatedVesselImo)) {
          updatedStatus.set(updatedVesselImo, true);
        }
        return updatedStatus;
      });

    })

    return () => {
      socket.off("update_vessels");
    };
  }, [socket]);

  React.useEffect(() => {
    socket.on("retrieve_data", (dummyData) => {
      setVessels(dummyData);
    });

    return () => {
      socket.off("retrieve_data");
    };
  }, []);

  return (
    <div className="center">
      <div className="center">
        <VesselTable vessels={vessels} onTrackClick={handleOnClick} />
      </div>    </div>
  );
}

export default App;
