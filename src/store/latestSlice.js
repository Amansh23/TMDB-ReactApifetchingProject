import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Images : []
}

export const latestSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {
   loadlatestdetails: (state,action) =>{
       state.Images = (action.payload)   
   }
  },
})

// Action creators are generated for each case reducer function
export const { loadlatestdetails } = latestSlice.actions

export default latestSlice.reducer