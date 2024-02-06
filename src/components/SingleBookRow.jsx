import React from 'react'

const SingleBookRow = ({item}) => {
 
   
  return (
    <tr>
            <td>{item.name}</td>
            <td>{item.publication}</td>
            <td>{item.class}</td>
            <td>{item.TotalUnit}</td>
            <td>{item.PurchasePrice} × {item.TotalUnit} = {item.PurchasePrice * item.TotalUnit}</td>
            <td>{item.SalesPrice} × {item.TotalUnit} = {item.SalesPrice * item.TotalUnit}</td>
            </tr>
  )
}

export default SingleBookRow
