import axios from "axios"
import { loadimage } from "./imageSlice"

export const asynloadimageAction = () => async (dispatch) =>{
  try {
      const {data}  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=033790420909052895ac3ff9a247c9a2&language=en-US&page=1`)
      dispatch(loadimage(data.results))
  } catch (error) {
    console.log(error)
  }
}   