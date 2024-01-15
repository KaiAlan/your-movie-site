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

  const data = await getMovieData();
  return (
    <main>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

export default Content