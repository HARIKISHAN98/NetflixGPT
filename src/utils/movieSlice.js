import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        movieTrailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMovieTrailerVideo : (state, action) => {
            state.movieTrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;

