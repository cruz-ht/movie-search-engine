

// GETTING ELEMENTS
const searchForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const moviesList = document.querySelector('#moviesList')
const loading = document.querySelector('#loading')
const error = document.querySelector('#errorMessage')

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

    searchForm.addEventListener('submit', (e) => {
    e.preventDefault()



    const search = searchInput.value

    // CLEARS PREVIOUS AND LOADS 
    loading.classList.remove('hidden')
    error.classList.add('hidden')
    moviesList.innerHTML = ''



    // BEGINS SEARCH
    fetch('/search?q=' + search).then((response) => {
        response.json().then((data) => {
            loading.classList.add('hidden')

            // Check if we got any movies back
            if (data.results && data.results.length > 0) {
    
                // Loop through each movie
                for (let i = 0; i < data.results.length; i++) {
                const movie = data.results[i]
        
                // Create a card container for movies
                const card = document.createElement('div')
                card.className = 'movie-card'
        
                // Get poster image for cards/movie
                let poster = 'https://via.placeholder.com/500x750'
                if (movie.poster_path) {
                poster = IMAGE_BASE + movie.poster_path
                }
        
                // Get year (or use N/A if no date)
                let year = 'N/A'
                if (movie.release_date) {
                year = movie.release_date.substring(0, 4)
                }
        
                //card HTML
                card.innerHTML = '<img src="' + poster + '" class="movie-poster">' +
                 '<h3>' + movie.title + '</h3>' +
                 '<p>' + year + '</p>'
        
                // Add card to the page
                moviesList.appendChild(card)
                }
    
            } else {
                // No movies found
                error.textContent = 'No movies found! Please try again.'
                error.classList.remove('hidden')
            }
        })
    })
})