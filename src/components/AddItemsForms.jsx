import React, { useRef} from 'react'
import {useDispatch} from "react-redux"
import { fetchBookAction } from '../Store/fetchBookSlice';
const AddItemsForms = () => {
let dispatch=useDispatch()
    let nameVal=useRef();
let classVal=useRef();
let publicationVal=useRef()
let purchasePriceVal=useRef()
let salesPriceVal=useRef()

function hanldeAddItemsForm(){
    
    let itemCreate={
        name:nameVal.current.value,
        publication:publicationVal.current.value,
        class:classVal.current.value,
        PurchasePrice:purchasePriceVal.current.value,
        SalesPrice:salesPriceVal.current.value,
      
    }

    
dispatch(fetchBookAction.addNewBooksDetails(itemCreate))
}


    return (
    <div className='d-flex flex-column col-5 '>

      <label htmlFor="name">Name</label>
      <input type="text"  ref={nameVal}  className='mb-3'/>
      <label htmlFor="name">Class</label>
      <input type="text"  className='mb-3' ref={classVal}/>
      <label htmlFor="name">Publication</label>
      <input type="text"  className='mb-3' ref={publicationVal}/>
      <label htmlFor="name">Purchase-Price</label>
      <input type="text"  className='mb-3' ref={purchasePriceVal}/>
      <label htmlFor="name">Sales-Price</label>
      <input type="text"  className='mb-3' ref={salesPriceVal}/>
      <button onClick={hanldeAddItemsForm} className='btn btn-danger btn-lg w-50 m-auto'>Add</button>
    </div>
  )
}

export default AddItemsForms
