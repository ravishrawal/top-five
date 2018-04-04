import cluster from 'cluster';  
import express from 'express';  
import os from 'os';
import path from 'path';
import bodyParser from 'body-parser';

import renderRouter from './routers/renderRouter';
import spotifyRouter from './routers/spotifyRouter';

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../../static')));

// parse req body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes for server rendering
app.get(['/r', '/r/*'], renderRouter);
app.get('/', (req, res) => res.redirect('/r'));

// Router for Spotify API
app.get(['/spotify', '/spotify/*'], spotifyRouter)

// All workers use this port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// if (cluster.isMaster) { 
//     const numCPUs = os.cpus().length; 
//     for (let i = 0; i < numCPUs; i++) {
//         // Create a worker
//         cluster.fork();
//     }
// } else {
//     // Set port to env or default
//     const PORT = process.env.PORT || 8080;

//     // Initalize server
//     const app = express();

//     // Serve images
//     app.use(express.static(path.join(__dirname, '../../static')));

//     // Routes for server rendering
//     app.get(['/r', '/r/*'], renderRouter);
//     app.get('/', (req, res) => res.redirect('/r'));

//     // Router for Spotify API
//     app.get('/spotify', spotifyRouter)

//     // All workers use this port
//     app.listen(PORT, () => console.log(`Worker #${cluster.worker.id} listening on port ${PORT}`));
// }