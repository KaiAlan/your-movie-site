import Link from "next/link"
import Image from "next/image"

type PostProps = {
    title: string;
    id: string;
    poster_path: string;
    release_date: string;
  }

const Movie = (movies: PostProps) => {
    // console.log(movies.id)
    let imagePath = 
   ` https://api.themoviedb.org/3/movie/${movies.id}/images`
//    console.log(imagePath)
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
        <h1>{movies.title}</h1>
        <h2>{movies.release_date}</h2>
        <Link href={`/${movies.id}`}>
            <Image src={imagePath} alt="MoviePoster" width={300} height={300} />
            {/* <div className="h-64 w-48 xl:h-80 lg:w-64"></div> */}
        </Link>
    </div>
  )
}

export default Movie