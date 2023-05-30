import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Images : []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   loadmoviedetails: (state,action) =>{
     console.log(action)
       state.Images = (action.payload)   
   }
  },
})

// Action creators are generated for each case reducer function
export const { loadmoviedetails } = movieSlice.actions

export default movieSlice.reducer