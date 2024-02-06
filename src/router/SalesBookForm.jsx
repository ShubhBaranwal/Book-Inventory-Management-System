import React, { useRef, useState } from 'react'

import { fetchBookAction } from '../Store/fetchBookSlice';
import {useDispatch,useSelector} from "react-redux"

const SalesBookForm = () => {

  const [selectedValue, setSelectedValue] = useState('');
let [activeName,setActiveName]=useState();
let itemDetailsStore=useSelector(store => store.bookStock.bookdetails)
function findUniqueDetails(valueji){
  
   let uniqueItem=itemDetailsStore.map((item)=>{
     return item[valueji]
  })
  return [...new Set(uniqueItem)] 
}

let itemName=findUniqueDetails("name");
let itemClass=findUniqueDetails("class");
let itemPublication=findUniqueDetails("publication");






  let bookName=useRef();
let bookPublication=useRef();
let bookCourse=useRef();
let totalUnit=useRef()  

let dispatch=useDispatch()
function handleSaleFormSubmit(){
let SalesData={
   
    TotalUnit:Number(totalUnit.current.value),
    name:bookName.current.value,
    publication:bookPublication.current.value,
    class:bookCourse.current.value,


}
dispatch(fetchBookAction.afterSalesStock(SalesData))
}



function handleActiveDescription(id){
 
  setActiveName(id)
  
  }

return (
    <>

      <h1 className='bg-danger text-light text-center py-2 w-75 m-auto'>Purchase Book</h1>
<form action="">
<div className="col-10 m-auto d-flex flex-column">
   
<label htmlFor="bookname" className='mt-3'>Book Name</label>
<input className='w-75 mb-2' onFocus={()=>handleActiveDescription(1)} ref={bookName} type="text" id='bookname' />

{activeName == 1 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemName.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>bookName.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   


<label htmlFor="course" className='mt-3'>Class/Course</label>
<input onFocus={()=>handleActiveDescription(3)} className='w-75 mb-2' type="text" ref={bookCourse} id='course' />

{activeName == 3 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemClass.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>bookCourse.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   


<label htmlFor="publication" className='mt-3'>Publication/Writer Name</label>
<input onFocus={()=>handleActiveDescription(2)} className='w-75 mb-2' type="text" id='publication' ref={bookPublication} />
{activeName == 2 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemPublication.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>bookPublication.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   
<label htmlFor="TotalUnit" className='mt-3'>Total Unit</label>
<input className='w-25 mb-2' type="text" id='TotalUnit' ref={totalUnit} />
</div>


</form>
<button className='w-75 btn btn-dark  btn-lg ms-5' onClick={handleSaleFormSubmit}>SUBMIT</button>
    </>
  )
}

export default SalesBookForm
