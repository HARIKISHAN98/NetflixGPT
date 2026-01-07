import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showgptSearchPage: false
    },
    reducers : {
        toggleGptSearchPage : (state) => {
            state.showgptSearchPage = !state.showgptSearchPage;
        }
    }
});

export const { toggleGptSearchPage } = gptSlice.actions;
export default gptSlice.reducer;
