import axios from "axios"
import { loadlatestdetails } from "./latestSlice"

export const asynloadlatestAction = () => async (dispatch) =>{
  try {
      const {data}  = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=033790420909052895ac3ff9a247c9a2&language=en-US`)
        dispatch(loadlatestdetails(data.results))
  } catch (error) {
      console.log(error)
  }
}   