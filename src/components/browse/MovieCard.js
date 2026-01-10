import { IMG_CDN_URL } from "../../utils/constant"

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-[2/3] flex-shrink-0 cursor-pointer transform transition duration-300 hover:scale-105">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" className="w-full h-full rounded-lg object-cover "/>
    </div>
  )
}

export default MovieCard
