
import { MovieAllDetails } from "../lib/movieTypes";

export async function getSingleMoviedata (movieId: string): Promise<MovieAllDetails> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN_AUTH}`
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);

    if (!res.ok) {
        throw new Error('Not able to fetch movie details')
    }

    const data = await res.json();

    return data;
}

export async function getAllPopularMovies() {

    await new Promise((resolve) => setTimeout(resolve, 2000))
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

    const data = await res.json();

    return data;
}
