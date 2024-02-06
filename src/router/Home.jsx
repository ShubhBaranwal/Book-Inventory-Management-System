import React, { useState } from 'react'
import SalesReport from '../components/SalesReport'
import PurchaseReport from '../components/PurchaseReport'
import StockRecords from '../components/StockRecords'
import BookDetails from '../components/BookDetails'
const Home = () => {
    let [activeBtn,setActiveBtn]=useState(3);
    function handleActiveButton(btnId){
        setActiveBtn(btnId)
    }

    
  return (
    <div className='row'>
      <div className="col-12 col-xl-2 col-md-2 col-sm-12 bg-primary flex-column d-flex">
           <button onClick={()=>handleActiveButton(1)} className='btn btn-danger btn-lg my-2'>Sales Report</button>
           <button onClick={()=>handleActiveButton(2)} className='btn btn-danger btn-lg my-2'>Purchase Report</button>
           <button onClick={()=>handleActiveButton(3)} className='btn btn-danger btn-lg my-2'>Stock</button>
           <button onClick={()=>handleActiveButton(4)} className='btn btn-danger btn-lg my-2'>Add Items Details</button>
      </div>
      <div className="col-xl-10 col-md-10 col-sm-12 col-12">
            {activeBtn === 1 && <SalesReport/>}
            {activeBtn === 2 && <PurchaseReport/>}
            {activeBtn=== 3 && <StockRecords/>}
            {activeBtn=== 4 && <BookDetails/>}
      </div>
    </div>
  )
}

export default Home
