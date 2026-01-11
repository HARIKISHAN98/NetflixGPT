import MovieList from "../browse/MovieList";
import { useSelector } from "react-redux";
import MovieDetailModal from "../modal/MovieDetailModal";
import GptMovieSuggestionShimmer from "../common/GptMovieSuggestionShimmer";
const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovieResults, isLoading } = useSelector(
    (store) => store.gpt
  );

  if (isLoading) return <GptMovieSuggestionShimmer />;

  if (!gptMovieNames) return;

  return (
    <>
      <div className="flex justify-center bg-black opacity-80 p-2 sm:py-4 m-4">
      <div className="w-full max-w-[1600px]">
      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movieData={gptMovieResults[index]}
        />
      ))}
    </div>
    </div>
    <MovieDetailModal/>
    </>
  );
};

export default GptMovieSuggestion;
