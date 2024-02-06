import React from 'react'
import {useSelector} from "react-redux"
const SalesReport = () => {
let SalesRecords=useSelector(store => store.bookStock.salesRecord);


  return (
    <>
         <h1 className='bg-dark text-light text-center py-2 fw-semibold'>Sales Report</h1>
    <table className="table table-bordered">
        <thead>
          <tr>
            
            <th>Book Name</th>
            <th>Writer/Publication</th>
            <th>Class/Course</th>
            <th> Unit</th>
            <th>Sales Price/unit</th>
            <th>Total Price</th>
          </tr>
        </thead>

<tbody>
{SalesRecords.map((item,index)=>{
  return <tr key={ index}>
  <th></th>
<th>{item.name}</th>
      <th>{item.publication}</th>
            <th>{item.class}</th>
            <th> {item.SoldUnits}</th>
            
            <th>{item.SalesPrice}</th>
            <th>{item.SalesPrice}× {item.SoldUnits} = {item.SalesPrice * item.SoldUnits}</th>
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
</tr>

{/* <tr>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th>Total-Unit: {totalUnitCount}</th>
  <th></th>
  <th></th>
  <th>Total Purchase {totalPurchaseCount}</th>
</tr> */}

</tbody>


        </table>


    </>
  )
}

export default SalesReport
