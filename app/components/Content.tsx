"use client";
import Link from "next/link";
import Image from "next/image";
import { SingleMovieCard, MovieAllDetails } from "../lib/movieTypes";
import { getAllPopularMovies } from "../utils/getMovieDetails";
import { Skeleton } from "@/@components/ui/skeleton";

import { useQuery } from "@tanstack/react-query";

const Movie = (movie: SingleMovieCard) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
      <h1>{movie.title}</h1>
      <h2>{movie.release_date}</h2>
      <Link href={`/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="MoviePoster"
          width={300}
          height={300}
        />
      </Link>
    </div>
  );
};

const Content = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie"],
    queryFn: getAllPopularMovies,
  });

  if (isLoading) {
    // return <Skeleton className="w-2/5 h-2/5 rounded-full" />;
    return <div><Skeleton className="w-2/5 h- 3/5" /></div>
  }
  if (error) {
    return <div className="font-bold text-white m-2">{error.message}</div>;
  }

  console.log(data);

  return (
    <main>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.results.map((movie: MovieAllDetails) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date.toString()}
          />
        ))}
      </div>
    </main>
  );
};

export default Content;
