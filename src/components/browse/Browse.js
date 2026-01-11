import Header from "../common/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "../gpt/GptSearchPage";
import { useSelector } from "react-redux";
import MovieDetailModal from "../modal/MovieDetailModal";

const Browse = () => {
  const showgptSearchPage = useSelector((store) => store.gpt.showgptSearchPage);
  useNowPlayingMovies();

  return (
    <div className="min-h-screen">
      <Header />
      {showgptSearchPage ? (
        <GptSearchPage />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
          <MovieDetailModal/>
        </div>
      )}
    </div>
  );
};

export default Browse;
