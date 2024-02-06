import React, { useRef, useState } from 'react'
import { fetchBookAction } from '../Store/fetchBookSlice';
import {useDispatch,useSelector} from "react-redux"
const PurchaseBookForm = () => {
let dispatch=useDispatch()
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


    let PurchasePrice=useRef();
let totalUnit =useRef();
let book_name =useRef();
let publication_name =useRef();
let courseName=useRef()
let supplier=useRef()
let SalesPrice=useRef()
let totalPricePurchase=useRef()


function handleSubmitPurchaseForm(){
  
let purchaseData={
    TotalUnit:Number(totalUnit.current.value),
    name:book_name.current.value,
    publication:publication_name.current.value,
    class:courseName.current.value,
  
}
dispatch(fetchBookAction.addNewStock(purchaseData))


}

function handleActiveDescription(id){
 
setActiveName(id)

}


  return (
    <>
    <h1>Purchase Book</h1>
    <form className='row'>
    
       <div className="col-10 d-flex flex-column m-auto">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' onFocus={()=>handleActiveDescription(1)} ref={book_name} className='w-75 mb-3'/>
    
{activeName == 1 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemName.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>book_name.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   
          <label htmlFor="name">Publication/Writer</label>
          <input type="text" id='publication' ref={publication_name} onFocus={()=>handleActiveDescription(2)} className='w-75 mb-3'/>
          {activeName == 2 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemPublication.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>publication_name.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   

          <label htmlFor="name">Class/Course</label>
          <input type="text" id='class' onFocus={()=>handleActiveDescription(3)} ref={courseName} className='w-75 mb-3'/>

          {activeName == 3 && ( <div className="d-flex flex-column w-50 showBooksName px-3 ">
  <div className="btn btn-close" onClick={()=>setActiveName(false)}>*</div>
     {itemClass.map((item,index)=>{
      return <li className='btn btn-dark btn-lg ' onClick={()=>courseName.current.value=item }  key={index}>{item}</li>
     })

     }    
    </div>)

}   

<label htmlFor="" >Total Unit</label>
<input type="number" id='class' ref={totalUnit} className='w-25 mb-3 me-5'/>
          
          
                    
       </div>
    </form>
<button className='btn btn-danger col-10' onClick={handleSubmitPurchaseForm}>SUBMIT</button>
    </>
    
  )
}

export default PurchaseBookForm
