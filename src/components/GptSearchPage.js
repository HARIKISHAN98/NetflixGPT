import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute inset-0 w-full h-full object-cover -z-20 hidden sm:block">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
