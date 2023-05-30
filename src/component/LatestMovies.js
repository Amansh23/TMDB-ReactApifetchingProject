import React from 'react'
import { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asynloadlatestAction } from '../store/latestAction'
import loader from '../store/loader.gif'


const LatestMovies = () => {
const dispatch = useDispatch()
const { Images } =  useSelector((state)=> state.latestReducer)

useEffect(() => {
   dispatch(asynloadlatestAction())
}, [dispatch])

const imagepath = "https://image.tmdb.org/t/p/w500/";
let imagelist = [];
if (Images.length > 0) {
    imagelist = Images.map((image, index) => (
       <NavLink style={{textDecoration:'none',marginRight:"20px"}} to = {`/moviedetails/${image.id}`}>
            <div
            key={index}
            className='imageliststyleoflatestcomp'>
            <img
                src={imagepath + image.poster_path}
                className='imagelistimagestyleoflatestcomp'
                alt={image.download_url}
            />
            <div className='imagelistimagecontentstyleoflatestcomp'>
                <p>{image.original_title}</p>
            </div>
        </div>
       </NavLink>
    ));
}




  return (
    <div 
    className='latestcompstyle'>
        <h1 className='latestcomph1style'>Latest Movies</h1>
        <div className="blockoflatestmovies">
            { Images.length > 0 ? (imagelist) :  <img
                        style={{width:'30vmax'}}
                        src={loader}
                        alt="Loading..."
                    /> }
        </div>
    </div>
  )
}

export default LatestMovies