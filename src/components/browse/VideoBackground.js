import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { updatedTrailerMuteState } from "../../utils/slices/movieSlice";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movie?.movieTrailerVideo);
  const dispatch = useDispatch();
  const isTrailerMuted = useSelector(store => store.movie?.isTrailerMuted);
  useMovieTrailer(movieID);

  return (
    <div
      className="w-295:mt-0 w-295:-mb-6 w-433:-mt-0 w-433:-mb-8 w-564:-mt-1 w-564:-mb-10 sm:-mt-0 sm:-mb-10 md:-mt-8 md:-mb-16 lg:-mt-10 lg:-mb-20 xl:-mt-12 xl:-mb-28">
      
        <button
        onClick={() => dispatch(updatedTrailerMuteState())}
        className="absolute bottom-6 right-6 z-30 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
      >
        {isTrailerMuted ? "🔇" : "🔊"}
      </button>

      <iframe
        key={isTrailerMuted ? "muted" : "unmuted"}   // force reload
        className="w-full h-full object-cover aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer?.key + `?autoplay=1&mute=${isTrailerMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailer?.key}`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
