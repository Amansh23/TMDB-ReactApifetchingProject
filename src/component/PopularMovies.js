import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { asynloadimageAction } from '../store/imageAction'
import loader from '../store/loader.gif'

const PopularMovies = () => {
const dispatch = useDispatch()
const { Images } =  useSelector((state)=> state.imageReducer)

useEffect(() => {
   dispatch(asynloadimageAction())
}, [dispatch])

const imagepath = "https://image.tmdb.org/t/p/w500/";
let imagelist = [];
if (Images.length > 0) {
    imagelist = Images.map((image, index) => (
       <Link  style={{textDecoration:'none'}} to = {`/moviedetails/${image.id}`}>
          <div
            key={image.id}
            className='imageliststyleofpopularcomp'>
             <img
                className='imagelistimagestyleofpopularcomp'
                src={imagepath + image.poster_path}
                alt={image.download_url}
             />
             <div className='imagelistimagecontentstyleofpopularcomp'>
                <p>{image.original_title}</p>
             </div>
          </div>
       </Link>
    ));
}


  return (
    <div className='popularcompstyle'>  
       <h1 className='popularcomph1style'>Popular Movies</h1>  
       <div className = "blockofpopularcomp">
            { Images.length > 0 ? 
                (imagelist) : <img
                      style={{width:'30vmax'}}
                      src={loader}
                      alt="Loading..."
                    /> 
            }
       </div>
    </div>
  )
}

export default PopularMovies