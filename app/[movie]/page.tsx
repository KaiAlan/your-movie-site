import { getSingleMoviedata } from "../utils/getMovieDetails"
import Image from "next/image";


const page = async({params}:{params: {movie:string}}) => {

  const data = await getSingleMoviedata(params.movie);

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
      {data.id}
      {data.original_language}
      {data.overview}
      {data.popularity}
      {data.release_date.toString()}
      {data.title}
      {data.vote_average}
      {data.vote_count}
      <Image src = {`${process.env.IMAGE_PATH}${data.poster_path}`} alt="MoviePoster" width={300} height={300} />
      <Image src = {`${process.env.IMAGE_PATH}${data.backdrop_path}`} alt="Movie Backdrop" width={300} height={200} />
    </div>
  )
}

export default page