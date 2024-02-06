import React from 'react'
import {useSelector} from "react-redux"
const PurchaseReport = () => {
let purchaseRecord=useSelector(store => store.bookStock.purchaseRecord)
let bookDetailStore=useSelector(store => store.bookStock.bookdetails);




const totalUnitCount = purchaseRecord.reduce((total, book) => total + book.TotalUnit, 0);
const totalPurchaseCount = purchaseRecord.reduce((total, book) => total + book.TotalUnit*book.PurchasePrice, 0);
  return (
    <>
    <h1 className='bg-dark text-light text-center py-2 fw-semibold'>Purchase Report</h1>
    <table className="table table-bordered">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Writer/Publication</th>
            <th>Class/Course</th>
            <th> Unit</th>
            <th>Purchase Price/unit</th>
            <th>Sales Price/unit</th>
            <th>Total Price</th>
          </tr>
        </thead>

<tbody>
{purchaseRecord.map((item,index)=>{
  return <tr key={ index}>
  
<th>{item.name}</th>
      <th>{item.publication}</th>
            <th>{item.class}</th>
            <th> {item.TotalUnit}</th>
            <th>{item.PurchasePrice}</th>
            <th>{item.SalesPrice}</th>
            <th>{item.PurchasePrice}× {item.TotalUnit} = {item.PurchasePrice * item.TotalUnit}</th>
</tr>
 
})

}

<tr>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
</tr>

<tr>
  <th></th>
  <th></th>
  <th></th>
  <th>Total-Unit: {totalUnitCount}</th>
  <th></th>
  <th></th>
  <th>Total Purchase {totalPurchaseCount}</th>
</tr>

</tbody>


        </table>

     
     </>
  )
}

export default PurchaseReport
