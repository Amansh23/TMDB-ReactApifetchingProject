import React from 'react'
import { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asynloadimageAction } from '../store/imageAction'
import loader from '../store/loader.gif'

const TrendingMovies = () => {
    const dispatch = useDispatch()
    const { Images } =  useSelector((state)=> state.imageReducer)
    
    useEffect(() => {
       dispatch(asynloadimageAction())
    }, [dispatch])
    
  const imagepath = "https://image.tmdb.org/t/p/w500/";
      
    let imagelist = [];
    if (Images.length > 0) {
        imagelist = Images.map((image, index) => (
           <NavLink style={{textDecoration:"none"}} to = {`/moviedetails/${image.id}`}>
              <div
                key={index}
                className='imageliststyleoftrendingcomp'>
                <img
                 className='imagelistimagestyleoftrendingcomp'
                  src={imagepath + image.poster_path}
                  alt={image.download_url}
                />
                <div className='imagelistimagecontentstyleoftrendingcomp'>
                    <p>{image.original_title}</p>
                </div>
              </div>
           </NavLink>
        ));
    }

    
  return (
    <div className='trendingcompstyle'>
        <h1 className='trendingcomph1style'>Trending Movies</h1>
        <div className="blockoftrendingcomp">
         {Images.length > 0 ? (imagelist) :  <img
                        style={{width:'30vmax'}}
                        src={loader}
                        alt="Loading..."
                    />
                    }
        </div>
    </div>
  )
}

export default TrendingMovies