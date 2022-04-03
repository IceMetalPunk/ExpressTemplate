/* Template for Heroku-based SSL Express Server

TODO: Run `node initFork.js` after forking and cloning! */

import dotenv from 'dotenv';
import express from 'express';
import startup from './startup.js'

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

startup(app, PORT)
.then(({ secure, server }) => {
    console.log(`Listening on HTTP${secure ? 'S' : ''} on port ${PORT}...`);
})
.catch(env => {
    console.log(`Failed to listen on port ${PORT} because enironment is ${env}`);
});
app.use(express.static('public'));

// TODO: Change to real endpoints
app.get('/test', (req, res) => res.send('Yes, it works!'));