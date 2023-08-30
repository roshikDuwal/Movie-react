import React from 'react'
import Home from "./Component/Home"
import SingleMovie from "./Component/SingleMovie"
import Error from "./Error"
import {Routes,Route } from 'react-router-dom'
import Movies from './Component/Movies'
import Search from "./Component/Search"

const App = () => {
  return (
    <>
      <Home/>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>  
    </>
  )
}

export default App