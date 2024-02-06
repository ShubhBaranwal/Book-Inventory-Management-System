import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='row bg-danger'>
      <h1 className='text-center text-white'>Bookshop Management System</h1>
    </div>
    <div className='row d-flex justify-content-around header-btn my-3'>
        <Link to="/Home" className='btn btn-dark btn-lg col-xl-2 col-md-2 col-sm-3 col-3'>Home</Link>
        <Link to="/Sales"  className='btn btn-dark btn-lg col-xl-2 col-md-2 col-sm-3 col-3'>Sale</Link>
        <Link to="/Purchase" className='btn btn-dark btn-lg col-xl-2 col-md-2 col-sm-3 col-4'>Purchase</Link>
    </div>
    </>
  )
}

export default Header
