import "./style.css"

const fetch = require('node-fetch');

class MovieInfo extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a container for our movie info
        const container = document.createElement('div');
        container.setAttribute('class', 'movie-list');

        // Append the container to the shadow DOM
        shadow.appendChild(container);

        // Fetch and display movie data
        this.fetchAndDisplayMovies(container);
    }

    // Define a method to fetch and display movies
    fetchAndDisplayMovies(container) {
        // Make a request to the TMDb API to fetch top-rated movies
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer YOUR_API_TOKEN' // Replace with your actual API token
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                // Loop through the movie results and create a card for each movie
                data.results.forEach(movie => {
                    const movieCard = document.createElement('div');
                    movieCard.setAttribute('class', 'movie-card');
                    movieCard.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                        <div class="Title">${movie.title}</div>
                        <div class="date">${movie.release_date}</div>
                        <div class="rate">${movie.vote_average}</div>
                    `;
                    container.appendChild(movieCard);
                });
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }
}

// Define the custom element
customElements.define('movie-info', MovieInfo);