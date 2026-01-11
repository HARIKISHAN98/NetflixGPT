import { IMG_CDN_URL } from "../../utils/constant";

const CastCard = ({ profilePath, name, character }) => {
  return  profilePath && 
    <div className="relative w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-800">
      <img
        src={IMG_CDN_URL + profilePath}
        alt={name}
        className="w-full h-[160px] sm:h-[190px] md:h-[220px] lg:h-[240px] object-cover"
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-2 py-2">
        <p className="text-white text-xs sm:text-sm font-semibold leading-tight truncate">
          {name}
        </p>
        <p className="text-gray-300 text-[10px] sm:text-xs truncate">
          {character}
        </p>
      </div>
    </div>
  };
export default CastCard;
