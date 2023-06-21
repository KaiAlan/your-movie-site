import Movie from "@/app/components/Movie";

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

async function getMovieData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
  if (!res.ok) {
    throw new Error('Faild to Fetch data');
  }
  return res.json()
}
const content = async () => {

  const data = await getMovieData();
  // console.log(data)
  return (
    <main>
        <div className="grid gap-12 grid-cols-fluid">
          {data.results.map((movie: PostProps) => (
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

export default content