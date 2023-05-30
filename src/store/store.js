import { configureStore } from '@reduxjs/toolkit'
import imageReducer from "./imageSlice"
import movieReducer from './movieSlice'
import latestReducer from './latestSlice'
export const store = configureStore({
  reducer: {
      imageReducer,
      movieReducer,
      latestReducer
  },
})