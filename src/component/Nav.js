import React from 'react'
import { NavLink } from 'react-router-dom'





const Nav = () => {

  return (
    <div className='navbar'>
      <div className='nav1'>      
        <NavLink className='nav1navlinktmdb' to='/'>T M D B</NavLink>
        <div className='block'></div>
        <NavLink className='nav1navlinklatestmovie' to="/Latestpage">Latest Movies</NavLink>
        <NavLink className='nav1navlinkpopularmovie' to='/popularpage'>Popular Movies</NavLink>
      </div>

      <div className='nav2'>
        <NavLink className='nav2eyeicon'>👀</NavLink>
        <NavLink className='nav2loginstyle'>Login</NavLink>
        <NavLink className='nav2jointmdbstyle'>Join TMBD</NavLink>
        <NavLink className='nav2iconstyle'><i class="ri-search-line"></i></NavLink>
      </div>

    </div>
  )
}

export default Nav