import Link from "next/link";
import Image from "next/image";
import { SingleMovieCard, MovieAllDetails } from "../lib/movieTypes";
import { getAllPopularMovies } from "../utils/getMovieDetails";


const Movie = (movies: SingleMovieCard) => {
return (
  <div className="flex flex-col items-center justify-center gap-2 p-6">
      <h1>{movies.title}</h1>
      <h2>{movies.release_date}</h2>
      <Link href={`/${movies.id}`}>
          <Image src = {`${process.env.IMAGE_PATH}${movies.poster_path}`} alt="MoviePoster" width={300} height={300} />
      </Link>
  </div>
)
}

async function getMovieData() {
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

  // console.log(res.json)
  return res.json()
}
const Content = async () => {

  const data = await getAllPopularMovies();
  // console.log(typeof(data))
  
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
  )
}

export default Content