import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        movieTrailerVideo : null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailerVideo : (state, action) => {
            state.movieTrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;

