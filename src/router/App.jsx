import React from 'react'
import Header from '../components/Header'
import {Outlet} from "react-router-dom"
import FetchItem from '../components/FetchItem'
const App = () => {
  return (
    <div className='container-fluid bg-light'>
      <Header/>
      <FetchItem/>
      <Outlet/>
    </div>
  )
}

export default App
