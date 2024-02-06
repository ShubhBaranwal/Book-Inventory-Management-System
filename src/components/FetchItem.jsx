import React from 'react'
import {useDispatch} from "react-redux"
import { fetchBookAction } from '../Store/fetchBookSlice'
const FetchItem = () => {
let dispatch=useDispatch()
  let bookStock=[
  ]

  let BookDetails=[
    {
      name:"Hindi",
      publication:"NCERT",
      class:"9th",
      PurchasePrice:120,
      SalesPrice:140,
  },
  {
      name:"Math",
      publication:"RD-Sharma",
      class:"10th",
      PurchasePrice:220,
      SalesPrice:260,
  },
  {
      name:"Computer",
      publication:"NCERT",
      class:"12th",
      PurchasePrice:150,
      SalesPrice:180,
  },
  {
    name:"Hindi",
    publication:"UP",
    class:"12th",
    PurchasePrice:150,
    SalesPrice:180,
},
{
  name:"Hindi",
  publication:"UP",
  class:"10th",
  TotalUnit:20,
  PurchasePrice:150,
  SalesPrice:180,
}
  ]

dispatch(fetchBookAction.addInitialBook(bookStock))


dispatch(fetchBookAction.addInitialBookDetails(BookDetails))
  


  
    return (
    <>
      
    </>
  )
}

export default FetchItem
