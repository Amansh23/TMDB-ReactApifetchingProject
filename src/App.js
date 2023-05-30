import React from 'react';
import Nav from './component/Nav';
import Moviedetails from './component/Moviedetails';
import './app.css'
import { Routes,Route} from 'react-router'
import Home from './component/Home';
import Popularpage from './component/Popularpage';
import Latestpage from './component/Latestpage';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/moviedetails/:id' element ={<Moviedetails/>}/>
      <Route path='/popularpage' element ={<Popularpage/>}/>
      <Route path='/Latestpage' element ={<Latestpage/>}/>
      </Routes>
    </div>
  )
}


export default App