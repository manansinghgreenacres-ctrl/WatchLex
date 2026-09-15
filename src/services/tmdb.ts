// Service file for all TMDB API calls
// TMDB (The Movie Database) is our source for movie data

const API_KEY = import.meta.env.VITE_TMDB_API_KEY  // pulls key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'     // base URL for all TMDB endpoints

/**
 * Fetches a random popular movie from TMDB
 * Picks a random page from the popular movies list,
 * then picks a random movie from that page
 */
export const getRandomMovie = async () => {
    // TMDB returns 20 movies per page, we pick a random page (1-100)
    const randomPage = Math.floor(Math.random() * 500) + 1

    // fetch all movies from that random page, sorted by vote count greater than 300
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${randomPage}&vote_count.gte=5`
    )

    // convert response to JSON so we can work with it
    const data = await response.json()

    // data.results is the array of 20 movies from that page
    const movies = data.results

    // pick one random movie from the array
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    return randomMovie
}