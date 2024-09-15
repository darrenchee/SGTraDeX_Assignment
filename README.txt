ASSUMPTIONS:

1. IMO does not change, and as such, I am using it as the key/identifier for the vessels.
2. All data communication is done via websockets, API calls merely serve to relay messages/instructions.
3. All test data given in the email is all that was used.
4. Dummy data is populated at backend and passed to frontend on first connection to the websockets.

NOTE: Unable to implement 1 min timeout, sorry :-()

SETUP:
The project runs in a mono-repo style hierarchy, so having to change directories into the relevant front-/back-end folders is a must.

The project runs on a Node.js backend with express and a React frontend.

Backend packages:
1. cors
2. express
3. json
4. nodemon
5. socket.io

Frontend packages:
1. mui
2. socket.io-client
3. axios


Run `npm install` on both the frontend and backend servers prior to starting the applications to install relevant packages.
To start the backend server, run the command: `npm start`
To start the frontend interface, run the command: `npm start`