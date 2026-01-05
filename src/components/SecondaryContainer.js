import usePopularMovies from "../hooks/usePopularMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movieData = useSelector((state) => state.movie);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()

  return movieData.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-72 relative z-20">
      <MovieList title="Now Playing" movieData={movieData.nowPlayingMovies} />
      <MovieList title="Popular" movieData={movieData.popularMovies} />
      <MovieList title="Top Rated" movieData={movieData.topRatedMovies} />
      <MovieList title="Upcoming" movieData={movieData.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
