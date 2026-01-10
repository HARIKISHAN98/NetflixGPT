import { addGptMovieResult, setIsLoading } from "../utils/slices/gptSlice";
import { useDispatch } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";

const searchMovieTMDB = async (movieName) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const data = await response.json();
  return data.results;
};
const useGptMovieSearch = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(store => store.gpt.isLoading);
  const searchWithGpt = async (query) => {
    if (!query) return;

    //Make an API call to GPT API and get the Movie Results
    const prompt = `Suggest 5 movies similar to: ${query}. Return only comma-separated names.`;
    dispatch(setIsLoading(true));

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [{ role: "user", content: prompt }],
    });
    if (!response.choices?.length) return;
    const movies = response.choices[0].message.content.split(", ");
    const data = movies.map((movie) => searchMovieTMDB(movie));
    const allMovieResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({ moviesName: movies, MovieResult: allMovieResults })
    );
  };
  return searchWithGpt;
};

export default useGptMovieSearch;
