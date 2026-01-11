import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
import movieModalReducer from './movieModalSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt : gptReducer,
    config : configReducer,
    movieModal : movieModalReducer
  }
});

export default appStore;
