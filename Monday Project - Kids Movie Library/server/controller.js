const movies = require ('./db.json')
let id = 7;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovies: (req, res) => {
        const { movieId } = req.params;

        const tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === parseInt(movieId);
        })

        if (tgtIndex === -1) {
            res.status(404).send('Movie not found!')
        } else {
            movies.splice(tgtIndex, 1);
            res.status(200).send(movies);
        }
    },
    createMovies: (req, res) => {
        const { movieName, imageURL, release } = req.body;

        const newMovie = {
            id,
            movieName,
            imageURL,
            release
        }

        movies.push(newMovie);
        id++;

        res.status(200).send(movies);

    },
    updateMovies: (req, res) => {
        let { movieId } = req.params;
        let { type } = req.body;

        let tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === parseInt(movieId);
        })

        let tgtMoviesObj = movies [tgtIndex];
        

        if (type === 'plus') {
            // console.log(tgtMovieObj);
            // console.log(tgtIndex);
            tgtMoviesObj.release += 1990;
            
        } else if (type === 'minus') {
            tgtMoviesObj.release -= 2001; 
        } else {
            res.status(400).send('Something went wrong.')
        }
        res.status(200).send(movies);
    }
}