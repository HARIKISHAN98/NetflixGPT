import { createSlice } from "@reduxjs/toolkit";

const movieModalSlice = createSlice({
  name: "movieModal",
  initialState: {
    isOpen: false,
    movieID: null,

    // Data
    details: null,   // poster, title, overview, backdrop
    trailer: null,
    cast: [],
    similar: [],

    // UI State
    showTrailer: false,
    loading: false,
  },

  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.movieID = action.payload;
      state.showTrailer = false;
      state.loading = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.movieID = null;
      state.details = null;
      state.trailer = null;
      state.cast = [];
      state.similar = [];
      state.showTrailer = false;
      state.loading = false;
    },

    setModalData: (state, action) => {
      state.details = action.payload.details;
      state.trailer = action.payload.trailer;
      state.cast = action.payload.cast;
      state.similar = action.payload.similar;
      state.loading = false;
    },

    playTrailer: (state) => {
      state.showTrailer = true;
    },

    stopTrailer: (state) => {
      state.showTrailer = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  setModalData,
  playTrailer,
  stopTrailer,
  loading
} = movieModalSlice.actions;

export default movieModalSlice.reducer;
