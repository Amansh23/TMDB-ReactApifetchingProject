import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { asynmovieAction } from '../store/movieAction'

const Moviedetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { Images } = useSelector((state) => state.movieReducer) 
    console.log(Images)
    useEffect(() => {
       dispatch(asynmovieAction(id))
    }, [dispatch,id])
    
    const imagepath = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className='moviedetailstyle'>
         <div className='moviedetailsimagestyle'>
           <img className='moviedetailsimagestyleimg' src= {imagepath + Images.poster_path } alt="" />
         </div>
         <div className='moviedetailcontentstyle'>
          
            <h1 className='moviedetailcontenth1style'>{Images.original_title}</h1>
            <h3 className='moviedetailcontenth3style'> {Images.release_date}</h3>
            <p className='moviedetailcontentpstyle'>{Images.overview}</p>
            <h3 className='moviedetailcontentbottomstyle'> {Images.tagline}</h3>
            <h3 className='moviedetailcontentbottomstyle'> RunTime -  <span style={{color:"#032541"}}>{Images.runtime}</span></h3>
            <h3 className='moviedetailcontentbottomstyle'> Available Languages- <span style={{color:'#032541'}}>{Images.original_language}</span></h3>
            <h3 className='moviedetailcontentbottomstyle'> Status - <span style={{color:'#032541'}}>{Images.status}</span></h3>
            <h3 className='moviedetailcontentbottomstyle'> Making - <span style={{color:"#032541"}}> {Images.budget}</span> </h3>

         </div>
    </div>
    
  )
}

export default Moviedetails