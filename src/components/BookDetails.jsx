import React, { useState } from 'react'
import SingleBookDetails from './SingleBookDetails'
import {useSelector,useDispatch} from "react-redux"
import AddItemsForms from './AddItemsForms'
const BookDetails = () => {
let [addBookFormShow,SetAddBookFormShow]=useState(false)
    let dispatch=useDispatch()
    let booksDetails=useSelector(store => store.bookStock.bookdetails)

function hanldeAddItemDetails(){
SetAddBookFormShow(true)
}


  return (
    <div className=''>
       <button className='btn btn-dark my-3' onClick={hanldeAddItemDetails} >Add Items</button>
       {addBookFormShow ? (<AddItemsForms/>) : null 

    }
<div className='row d-flex justify-content-between'>
    
{booksDetails.map((item,index)=>{
    return  <SingleBookDetails item={item} key={index}/> 
})

}
</div>

    </div>
  )
}

export default BookDetails

