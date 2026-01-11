const ShimmerCard = () => {
  return (
    <div className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-[2/3] rounded-lg bg-gray-800/80 animate-pulse blur-[1px] flex-shrink-0" />
  );
};

const ShimmerRow = () => {
  return (
    <div className="px-3 sm:px-6 md:px-12 mb-8">
      {/* Title */}
      <div className="h-6 sm:h-7 w-40 sm:w-56 bg-gray-700/80 rounded mb-4 animate-pulse" />

      {/* Cards */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-hidden">
        {Array(10).fill("").map((_, i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  );
};

const GptMovieSuggestionShimmer = () => {
  return (
    <div className="flex justify-center bg-black/90 py-6 sm:py-10 m-4 rounded-xl animate-[fadeIn_0.3s_ease-out]">
      <div className="w-full max-w-[1600px]">
        <ShimmerRow />
        <ShimmerRow />
        <ShimmerRow />
      </div>
    </div>
  );
};

export default GptMovieSuggestionShimmer;
