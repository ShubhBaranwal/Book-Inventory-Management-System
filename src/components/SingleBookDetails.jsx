import React from 'react'

const SingleBookDetails = ({item}) => {

  
  
  return (
    <div className='col-xl-3 col-md-4 col-sm-5 col-5 card shadow-lg '>
      <h4>{item.name}</h4>
      <h5>{item.class}</h5>
      <h6>{item.publication}</h6>
      <h6>Purchase-Price {item.PurchasePrice}</h6>
      <h6> Sales-Price{item.SalesPrice}</h6>
    </div>
  )
}

export default SingleBookDetails
