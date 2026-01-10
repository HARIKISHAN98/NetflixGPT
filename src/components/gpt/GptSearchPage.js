import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../../utils/constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-20">
        <img className="w-full h-full object-cover" src={BG_IMG} alt="bg-img" />
      </div>
      <div>
      <GptSearchBar />
      <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
