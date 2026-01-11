import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
    user : null,
    IsSignIn : true,
    ValidData : "",
    },
    reducers: {
        addUser : (state, action) => {
            state.user = action.payload;
        },
        removeUser : (state) => {
            state.user = null;
        },
        toggleSignIn : (state) => {
            state.IsSignIn = !state.IsSignIn;
        },
        setValidData : (state, action) => {
            state.ValidData = action.payload;
        }
    }
}); 

export const {addUser, removeUser, toggleSignIn, setValidData} = userSlice.actions;
export default userSlice.reducer;
