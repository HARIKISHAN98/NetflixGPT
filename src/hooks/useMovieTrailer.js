import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailerVideo } from "../utils/slices/movieSlice";

const useMovieTrailer = (movieID) => {
  //fetch the trailer video && updating the store with trailer video data
  const dispatch = useDispatch();
  const movieTrailerVideo = useSelector(store => store.movie.movieTrailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    
    const fliterData = jsonData.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = fliterData.length ? fliterData[0] : jsonData.results[0];
    dispatch(addMovieTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailerVideo && getMovieVideos();
  }, [movieTrailerVideo]);
};

export default useMovieTrailer;
