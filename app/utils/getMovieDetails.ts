import { MovieAllDetails } from "../lib/movieTypes";

export async function getSingleMoviedata (movieId: string): Promise<MovieAllDetails> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmQ3ZGYzNzU0MDk2MWFjNzFjNmY0MzFhYTRmYmU4NiIsInN1YiI6IjY0OTMwMjJjYzI4MjNhMDBlMmU5NzQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n19VgdtxNG9df6JgSidMGjYkaG6SMtwNk-z_xzw8hLU'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);

    if (!res.ok) {
        throw new Error('Not able to fetch movie details')
    }

    return res.json();
}

export async function getAllPopularMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN_AUTH}`
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options);
    if (!res.ok) {
        throw new Error('Faild to Fetch data');
    }

    return res.json()
}
