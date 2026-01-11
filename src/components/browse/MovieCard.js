import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constant"
import { openModal } from "../../utils/slices/movieModalSlice";

const MovieCard = ({ posterPath, movieID }) => {
  const dispatch = useDispatch();
  if(!posterPath) return null;

  const handleClick = () => {
    dispatch(openModal(movieID));
  } 

  return (
    <div onClick={handleClick} className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-[2/3] flex-shrink-0 cursor-pointer transform transition duration-300 hover:scale-105">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" className="w-full h-full rounded-lg object-cover "/>
    </div>
  )
}

export default MovieCard
