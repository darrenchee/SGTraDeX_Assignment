import React from 'react';
import './App.css';
import io from 'socket.io-client';
import VesselTable from './components/VesselTable';

const socket = io("http://localhost:5000");

function App() {

  function test() {
    socket.emit("send_message", { test: 'test' });
  }

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.test)
    });
  }, [socket]);

  return (
    <div className="center">
      <button onClick={test}>click</button>
      <VesselTable />
    </div>
  );
}

export default App;
