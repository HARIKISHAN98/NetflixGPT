import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  playTrailer,
  stopTrailer,
} from "../../utils/slices/movieModalSlice";
import { IMG_CDN_URL } from "../../utils/constant";
import MovieList from "../browse/MovieList";
import useFetchMovieModalData from "../../hooks/useFetchMovieModalData";
import CastCard from "./CastCard";
import MovieDetailShimmer from '../common/MovieDetailShimmer';

const MovieDetailModal = () => {
  const dispatch = useDispatch();
  const { isOpen, movieID, details, trailer, cast, similar, showTrailer, loading } =
    useSelector((store) => store.movieModal);

  useFetchMovieModalData(movieID);

  useEffect(() => {
    document.body.style.overflow = isOpen || showTrailer ? "hidden" : "auto";
  }, [isOpen, showTrailer]);

  if (loading) 
    return <MovieDetailShimmer />;

  if (!isOpen || !details) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto animate-[fadeIn_0.3s_ease-out,scaleIn_0.3s_ease-out]">
      {/* Close */}
      <button
        onClick={() => dispatch(closeModal())}
        className="fixed top-4 right-4 text-white text-3xl z-50"
      >
        ✕
      </button>

      {/* FULLSCREEN TRAILER MODE */}
      {showTrailer && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
          <button
            onClick={() => dispatch(stopTrailer())}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            ✕
          </button>

          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
            allow="autoplay; encrypted-media; fullscreen"
            title="Trailer"
            allowFullScreen
          />
        </div>
      )}

      {!showTrailer && (
        <>
          {/* HERO */}
          <div className="relative h-[50vh] sm:h-[70vh] mx-2 sm:mx-0 animate-[fadeIn_0.4s_ease-out]">
            <img
              src={IMG_CDN_URL + details.backdrop_path}
              className="w-full h-full object-cover"
              alt={details.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-6 sm:bottom-16 left-4 sm:left-12 right-4 flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-5xl">
              {/* Poster */}
              <img
                src={IMG_CDN_URL + details.poster_path}
                className="w-28 sm:w-40 md:w-48 rounded-xl shadow-2xl self-start"
                alt={details.title}
              />

              {/* Info */}
              <div className="text-white max-w-xl">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                  {details.title}
                </h1>

                <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                  {details.overview}
                </p>

                <button
                  onClick={() => dispatch(playTrailer())}
                  className="bg-white text-black px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition text-sm sm:text-base"
                >
                  ▶ Play Trailer
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-black pt-10 pb-14 animate-[fadeIn_0.4s_ease-out]">
            {/* CAST */}
            <h2 className="text-2xl font-semibold mb-3 mx-4 sm:mx-12 text-white">
              Cast
            </h2>

            <div className="flex gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12 no-scrollbar mb-10">
              {cast.map((actor) => (
                <CastCard
                  key={actor.id}
                  profilePath={actor.profile_path}
                  name={actor.name}
                  character={actor.character}
                />
              ))}
            </div>

            {/* SIMILAR */}
            <div className="mx-2 sm:mx-4 md:mx-0">
              <MovieList title="More Like This" movieData={similar} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailModal;
