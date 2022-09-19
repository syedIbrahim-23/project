import React from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/product'/>
      <Route path='/team'/>
      <Route path='/contact'/>
    </Routes>
  )
}

export default App