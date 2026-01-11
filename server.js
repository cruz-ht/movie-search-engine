
// INITIALIZING DEPENDENCIES
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();


const app = express()



const port = process.env.PORT || 3000; //creating port point as well as a backup incase env doesn't wprk




// TMDB API
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';



//INDEX/PAGES ROUTES
app.get('', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// CSS/JS ROUTES

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles.css'))
})
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.js'))
})

// routing img icon
app.get('/img/:imageFile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', req.params.imageFile));
});

// routing fonts icons
app.get('/fonts/:fontFile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fonts', req.params.fontFile));
});

// API ROUTES

// Search 
app.get('/search', async (req, res) => {
    const query = req.query.q

    const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?query=${query}`,
        {
            headers: {
                'Authorization': `Bearer ${TMDB_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    )

    const data = await response.json();
    res.json(data)
})

// Get similar movies
app.get('/recommended/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    
    console.log(`retrieving similar movies like: ${movieId}`); // Debug log

    const response = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}/similar`,
        {
            headers: {
                'Authorization': `Bearer ${TMDB_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    );

    const data = await response.json();
    console.log('TMDB Response:', data);
    res.json(data);
});




app.listen(port, () => console.log(`Server is running on ${port}`))