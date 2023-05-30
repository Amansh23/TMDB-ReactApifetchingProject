import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Images : []
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
   loadimage: (state,action) =>{
       state.Images = (action.payload)   
   }
  },
})

// Action creators are generated for each case reducer function
export const { loadimage } = imageSlice.actions

export default imageSlice.reducer