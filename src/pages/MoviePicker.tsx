import { useState } from 'react'
import { getRandomMovie } from '../services/tmdb'

// Type definition for a movie object from TMDB
// This is TypeScript, it tells exactly what a movie looks like
interface Movie {
    id: number
    title: string
    overview: string        // movie description
    poster_path: string     // just the path, we build the full URL below
    vote_average: number    // rating out of 10
    release_date: string
}

function MoviePicker() {
    // movie holds the current random movie, null means none picked yet
    const [movie, setMovie] = useState<Movie | null>(null)

    // loading state so we can show a spinner while fetching
    const [loading, setLoading] = useState(false)

    // called when user clicks the button
    const handleGetMovie = async () => {
        setLoading(true)
        const randomMovie = await getRandomMovie()
        console.log(randomMovie)  // add this line
        setMovie(randomMovie)
        setLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">What should we watch?</h1>

            {/* Button to get a random movie */}
            <button
                onClick={handleGetMovie}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg mb-8"
            >
                {loading ? 'Finding a movie...' : 'Pick a random movie'}
            </button>

            {/* Only show movie card if we have a movie */}
            {movie && (
                <div className="flex flex-col items-center max-w-md bg-gray-800 rounded-xl p-6">
                    {/* Movie poster */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-64 rounded-lg mb-4"

                        //handle error if image is not found
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/500x750?text=No+Poster'
                            e.currentTarget.onerror = null // prevents infinite loop
                        }}



                    />
                    <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                    <p className="text-yellow-400 mb-2">⭐ {movie.vote_average ? Number(movie.vote_average).toFixed(1) : 'N/A'}/10</p>
                    <p className="text-gray-400 text-center">{movie.overview}</p>
                </div>
            )}
        </div>
    )
}

export default MoviePicker