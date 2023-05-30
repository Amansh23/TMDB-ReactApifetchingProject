import React from 'react'
import Ajax from './Ajax'
import PopularMovies from './PopularMovies'
import LatestMovies from './LatestMovies'
import TrendingMovies from './TrendingMovies'
import Footer from './Footer'

const Home = () => {
  return (
    <>
     <Ajax/>
      <PopularMovies/>
      <LatestMovies/>
      <TrendingMovies/>
      <Footer/>
    </>
  )
}

export default Home