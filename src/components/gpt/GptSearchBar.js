import lan from "../../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useGptMovieSearch from "../../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const { gptMovieNames, isLoading } = useSelector((store) => store.gpt);
  const searchWithGpt = useGptMovieSearch();
  const onSearch = () => {
    const query = searchText.current.value.trim();
    searchWithGpt(query);
  };

  return (
    <>
      <div className="w-295:pt-[20%] pt-[15%] md:pt-[10%] flex justify-center px-4">
        <form
          className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 bg-black flex flex-row gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lan[language].gptinputplaceholder}
            className="flex-1 p-3 rounded-lg w-295:text-sm"
          />
          <button
            className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-700 whitespace-nowrap"
            onClick={onSearch}
          >
            {lan[language].search}
          </button>
        </form>
      </div>

      {!gptMovieNames &&!isLoading && <div className="mt-16 py-8 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col items-center text-center relative bg-black/80 rounded-2xl shadow-2xl">
        {/* Cinematic Text */}
        <p className="text-white text-lg sm:text-xl font-light opacity-90">
          Ready for a cinematic adventure?
        </p>
        <p className="text-sm sm:text-base text-gray-300 mt-3">
          What kind of movie are you in the mood for today?
        </p>

        {/* Pooh Thinking Card */}
        <div className="mt-6 backdrop-blur-md p-4">
          <img
            src="https://media1.tenor.com/m/eomT2hRxUYIAAAAC/pooh-think.gif"
            alt="Thinking"
            className="w-40 sm:w-44 md:w-48 rounded-lg"
          />
        </div>
      </div>}
    </>
  );
};

export default GptSearchBar;
