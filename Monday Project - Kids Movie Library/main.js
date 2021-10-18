const moviesContainer = document.querySelector('#movie-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/movies`

const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err)

const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
const createMovies = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
const deleteMovies = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)
const updateMovies = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(moviesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let movieName = document.querySelector('#movieName')
    let release = document.querySelector('#release')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        movieName: movieName.value,
        release: release.value, 
        imageURL: imageURL.value
    }

    createMovies(bodyObj)

    movieName.value = ''
    release.value = ''
    imageURL.value = ''
}

function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `<img alt='movie cover image' src=${movie.imageURL} class="movie-cover-image"/>
    <p id="movieName">${movie.movieName}</p>
    <div class="btns-container">
        
        <p id="release">Released:${movie.release}</p>
        
    </div>
    <button onclick="deleteMovies(${movie.id})">delete</button>
    `


    moviesContainer.appendChild(movieCard)
}

function displayMovies(arr) {
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMovieCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMovies()

// <button onclick="updateMovies(${movie.id}, 'minus')">-</button>
// <button onclick="updateMovies(${movie.id}, 'plus')">+</button>