import React from 'react'
import { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { asynloadlatestAction } from '../store/latestAction'
import loader from '../store/loader.gif'

const Latestpage = () => {

    const dispatch = useDispatch()
    const { Images } =  useSelector((state)=> state.latestReducer)


    
 useEffect(() => {
    dispatch(asynloadlatestAction())
  }, [dispatch])

      
const imagepath = "https://image.tmdb.org/t/p/w500/";
let imagelist = [];
if (Images.length > 0) {
    imagelist = Images.map((image, index) => (
       <Link  style={{textDecoration:'none'}} to = {`/moviedetails/${image.id}`}>
          <div
            key={image.id}
            className='imageliststyleoflatestpagecomp'>
            <img
                src={imagepath + image.poster_path}
                className='imagelistimagestyleoflatestpagecomp'
                alt={image.download_url}
            />
            <div className='imagelistimagecontentstyleoflatestpagecomp'>
                <p>{image.original_title}</p>
            </div>
        </div>
       </Link>
    ));
}




  return (
   
    <div className='latestpagecompstyle' >
      <h1 className='latestpagecomph1style'>Latest Movies</h1>
         <div className="blockoflatestpagestyle">
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

export default Latestpage