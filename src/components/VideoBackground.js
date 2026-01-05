import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movie?.movieTrailerVideo);
  useMovieTrailer(movieID);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
