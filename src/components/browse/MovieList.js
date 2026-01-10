import React from "react";
import MovieCard from "./MovieCard";
  
const MovieList = ({ title, movieData }) => {
  return (
    <div className="px-3 sm:px-6 md:px-12">
      <h2 className="text-lg sm:text-2xl md:text-3xl py-3 text-white">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
          {movieData?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
