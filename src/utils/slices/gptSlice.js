import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showgptSearchPage: false,
        gptMovieResults : null,
        gptMovieNames : null,
        isLoading : false
    },
    reducers : {
        toggleGptSearchPage : (state) => {
            state.showgptSearchPage = !state.showgptSearchPage;
        },
        setIsLoading : (state, action) => {
            state.isLoading = action.payload;
        },
        addGptMovieResult : (state, action) => {
            state.gptMovieResults = action.payload.MovieResult;
            state.gptMovieNames = action.payload.moviesName;
            state.isLoading = false;
        }
    }
});

export const { toggleGptSearchPage, addGptMovieResult, setIsLoading } = gptSlice.actions;
export default gptSlice.reducer;
