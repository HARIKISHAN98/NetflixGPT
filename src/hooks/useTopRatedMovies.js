import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    //Fetch Data from TMDB API and store in Redux store
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    }, [topRatedMovies]);
}

export default useTopRatedMovies;
