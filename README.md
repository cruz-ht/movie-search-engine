# 🎬 Movie Finder

A web application that allows users to search for movies using The Movie Database (TMDB) API. Built with Node.js, Express, and vanilla JavaScript.

## Live Demo

**Deployed Application:** [Movie Finder Live](https://movie-search-engine-ctcwk9wpz-jessicas-projects-8696b1a4.vercel.app/)



## 📖 About

Movie Finder is a simple and intuitive application where users can search for movies by title. The app displays movie titles, and release years in an easy-to-browse grid layout.

## Features

- 🔍 Search for movies by title
- 🖼️ Display movie posters, titles, and release years
- ⚡ Real-time search results
- 📱 Responsive design
- 🎨 Clean and simple user interface
---

### Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **node-fetch** - HTTP request library
- **dotenv** - Environment variable management

### Frontend
- **HTML** - Structure
- **CSS3** - Styling
- **JavaScript** - Functionality

### API
- **TMDB API** - The Movie Database API (direct implementation, no wrapper libraries)



---
### 🎯 How It Works

1. **User searches** for a movie by typing in the search box
2. **Frontend** sends request to backend `/search` route
3. **Backend** makes direct API call to TMDB (no wrapper libraries)
4. **TMDB** returns movie data (title, poster, release date)
5. **Frontend** displays results in a grid layout



## License

This project is open source and available under the MIT License.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
---

Made with ❤️ using Node.js and TMDB API