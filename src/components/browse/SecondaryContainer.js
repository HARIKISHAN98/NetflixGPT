import usePopularMovies from "../../hooks/usePopularMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movieData = useSelector((state) => state.movie);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    movieData.nowPlayingMovies && (
      <div className="pb-10 bg-black">
        <div className="relative z-20">
          <div className="-mt-2 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-36">
          <MovieList
            title="Now Playing"
            movieData={movieData.nowPlayingMovies}
          />
          </div>
          <MovieList title="Popular" movieData={movieData.popularMovies} />
          <MovieList title="Top Rated" movieData={movieData.topRatedMovies} />
          <MovieList title="Upcoming" movieData={movieData.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
