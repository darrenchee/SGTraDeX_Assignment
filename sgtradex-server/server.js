const express = require('express')
const http = require('http')
const { Server } = require('socket.io');
const cors = require('cors');
let dummyData = require('./db.json')

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["POST"]
    }
});

io.on('connection', (socket) => {
    socket.emit("retrieve_data", dummyData);
});

app.post("/api/track", (req, res) => {
    const date = new Date();
    console.log(req.body, date);
    res.status(200).send('ok');
})

app.post("/api/updated-vessel-information", (req, res) => {
    console.log("Received request body for /api/updated-vessel-information:", req.body);
    const updatedVessel = req.body;
    dummyData = dummyData.map(vessel => vessel.imo !== updatedVessel.imo ? vessel : {
        ...vessel,
        ...updatedVessel
    });
    io.emit("update_vessels", { updatedData: dummyData, updatedVesselImo: updatedVessel.imo });
    res.status(200).send('ok');
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});