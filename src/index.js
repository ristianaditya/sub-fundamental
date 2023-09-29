import "./style.css"


const url = 'https://api.themoviedb.org/3/discover/movie/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2Q5NDA4ODIyZmUyMGZkYzU1OGRhOTI0ODAxNGVmMyIsInN1YiI6IjY1MTEzMjE3YTkxMTdmMDExYjIxMjdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tNsnkcXrrxlQGEgiYyqpcr2atS82O-mXocxx3bF3dPs'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

class MovieInfo extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create a container for our movie info
      const container = document.createElement('div');
  
      // Extract attributes from the element
      const title = this.getAttribute('title');
      const date = this.getAttribute('date');
      const rate = this.getAttribute('rate');
      const image = this.getAttribute('image');
  
      // Construct the inner HTML
      container.innerHTML = `
      <div class="movie-card">
          <img src="${image}" alt="${title} Poster">
          <div class="Title">${title}</div>
          <div class="date">${date}</div>
          <div class="rate">${rate}</div>
      </div>
      `;

      // Append the container to the shadow DOM
      shadow.appendChild(container);
    }


  }
  
  // Define the custom element
  customElements.define('movie-info', MovieInfo);

const contoh = document.createElement("movie-info")
document.body.appendChild(contoh);