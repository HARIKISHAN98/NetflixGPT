const ShimmerCard = () => {
  return (
    <div className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-[2/3] rounded-lg bg-gray-800 animate-pulse flex-shrink-0" />
  );
};

const ShimmerRow = () => {
  return (
    <div className="px-3 sm:px-6 md:px-12 mb-6">
      <div className="h-6 w-48 bg-gray-700 rounded mb-4 animate-pulse" />
      <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-hidden">
        {Array(8).fill("").map((_, i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex justify-center bg-black/80 py-8 m-4">
      <div className="w-full max-w-[1600px]">
        <ShimmerRow />
        <ShimmerRow />
        <ShimmerRow />
      </div>
    </div>
  );
};

export default Shimmer;
