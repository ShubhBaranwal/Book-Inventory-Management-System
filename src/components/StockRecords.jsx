import React from 'react'
import {useSelector} from "react-redux"
import SingleBookRow from './SingleBookRow';

const StockRecords = () => {

  let bookStock=useSelector(store => store.bookStock.bookRecords);
  // let bookDetails=useSelector(store => store.bookStock.bookdetails);
  

  

  const totalUnitCount = bookStock.reduce((total, book) => total + book.TotalUnit, 0);
  const totalPurchaseCount = bookStock.reduce((total, book) => total + book.TotalUnit*book.PurchasePrice, 0);
  const totalSalesCount = bookStock.reduce((total, book) => total + book.TotalUnit*book.SalesPrice, 0);



   return(
    <>
    <h1 className='bg-secondary text-dark text-center'>Stock Records</h1> 
     <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Writer/Publication</th>
            <th>Class/Course</th>
            <th>Total Unit</th>
            <th>Purchase Price/per unit</th>
            <th>Sales Price/per unit</th>
          </tr>
        </thead>
        <tbody>
          {
            bookStock.map((item,index)=>{
              return <SingleBookRow item={item} key={index} />
            })
          }

          <tr>
          <th></th>
            <th></th>
            <th></th>
            <th>All Unit :- {totalUnitCount}</th>
            <th>All Purchase Price:- {totalPurchaseCount}</th>
            <th>All Sales Price :- {totalSalesCount}</th>
          </tr>
        </tbody>
      </table>        

    </>
  )
}

export default StockRecords
