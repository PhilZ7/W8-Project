const express = require('express');
const app = express();
const cors = require('cors');

const movies = require('./db.json')
const { getMovies, deleteMovies, createMovies, updateMovies } = require ('./controller');

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ENDPOINTS

app.get('/api/movies', getMovies);
app.delete('/api/movies/:movieId', deleteMovies);
app.post('/api/movies', createMovies);
app.put('/api/movies/:movieId', updateMovies);


const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => {
    console.log(`Movie server up on ${SERVER_PORT}`)
});