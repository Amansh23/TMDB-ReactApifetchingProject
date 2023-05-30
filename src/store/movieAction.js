import axios from "axios"
import { loadmoviedetails } from "./movieSlice"

export const asynmovieAction = (id) => async(dispatch,getstate) =>{
  try {
      console.log(id)
      const {data}  = await axios.get(`https://api.themoviedb.org/3/movie/${Number(id)}?api_key=033790420909052895ac3ff9a247c9a2&language=en-US`)
      console.log(data)  
      dispatch(loadmoviedetails(data))

        console.log(id) 
  } catch (error) {
      console.log(error)
  }
}   