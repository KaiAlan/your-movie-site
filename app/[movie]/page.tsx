'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

export const dynamic = "force-dynamic"

type PostProps = {
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

const MovieDetails = () => {

  const param = useParams();

  const movieId = param.movie as string
  // console.log(movieId);

  const fetchUser = async (): Promise<PostProps> => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmQ3ZGYzNzU0MDk2MWFjNzFjNmY0MzFhYTRmYmU4NiIsInN1YiI6IjY0OTMwMjJjYzI4MjNhMDBlMmU5NzQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n19VgdtxNG9df6JgSidMGjYkaG6SMtwNk-z_xzw8hLU'
      }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);

    if(!res.ok) {
      throw new Error('Not able to fetch movie details')
    }

    return res.json()
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUser(),
  });

  if (isLoading) {
    return <div className="font-bold text-white m-2">loading...</div>;
  }
  if (error) {
    return <div className="font-bold text-white m-2">{error.message}</div>;
  }


  // console.log(movieData)
  // console.log(`${process.env.IMAGE_PATH}${data?.poster_path}`)
  // `https://image.tmdb.org/t/p/w500/`

  return(
    <div>YO
      <div className="flex flex-col items-center justify-center gap-2 p-6">
        {data?.id}
        {/* <Image src = {`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="MoviePoster" width={300} height={300} /> */}
        <Image src = {`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt="MoviePoster" width={1000} height={800} />
    </div>
    </div>
  )
}

export default MovieDetails





  //  const getMovieDetails = async(movie: string) => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmQ3ZGYzNzU0MDk2MWFjNzFjNmY0MzFhYTRmYmU4NiIsInN1YiI6IjY0OTMwMjJjYzI4MjNhMDBlMmU5NzQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n19VgdtxNG9df6JgSidMGjYkaG6SMtwNk-z_xzw8hLU'
  //     }
  //   };
    
  //   const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options);
    
  //   if(!res.ok) {
  //     throw new Error('Not able to fetch movie details')
  //   }
  //   const data = await res.json();
  //   return data;
  // }