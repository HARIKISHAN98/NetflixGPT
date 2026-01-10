import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/slices/movieSlice";

const usePopularMovies = () => {
  //Fetch Data from TMDB API and store in Redux store
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movie.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [popularMovies]);
};

export default usePopularMovies;
