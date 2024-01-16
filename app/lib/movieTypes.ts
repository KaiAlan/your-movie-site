export type SingleMovieCard = {
    title: string;
    id: string;
    poster_path: string;
    release_date: string;
}

export type MovieAllDetails = {
    title: string;
    overview?: string | null;
    id: string;
    poster_path: string;
    release_date: Date;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    original_language: string;
    popularity: number;
}
