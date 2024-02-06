import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './router/Home.jsx';
import {Provider} from "react-redux"
import bookStore from './Store/index.js';
import PurchaseBookForm from './router/PurchaseBookForm.jsx';
import SalesBookForm from './router/SalesBookForm.jsx';
 let router=createBrowserRouter([{
path:"/",
element:<App/>,
children:[
  {path:"/Home" , element:<Home/>},
  {path:"/Purchase" , element:<PurchaseBookForm/>},
  {path:"/Sales" , element:<SalesBookForm/>}
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={bookStore}>
    <RouterProvider router={router}>

</RouterProvider>
    </Provider>

    
  </React.StrictMode>,
)
