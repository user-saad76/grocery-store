import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter,Routes, Route } from "react-router";
import Shop from './Pages/Shop';
import Navbar from './components/Navbar';
import FreshMilk from './Pages/FreshMilk';
import Fruits from './Pages/Fruits';
import DetailPage from './Pages/DetailPage';
import { useEffect } from 'react';




function App() {

 const [products, setProducts] = useState([])
 console.log(products)
 const getProductFromAPI = async()=>{
   const res = await fetch('https://fakestoreapi.com/products');
   const data = await res.json()
   setProducts(data);
 }
 useEffect(()=>{
  getProductFromAPI();
 },[])

 

  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
       <Route path='/' element ={<Home/>}/>
       <Route path='/home' element ={<Home/>}/>
        <Route path='/shop' element ={<Shop/>}/>
        <Route path='/freshMilk' element ={<FreshMilk  products={products}/>}/>
         <Route path='/fruits' element ={<Fruits/>}/>
          <Route path='/product/:id' element ={<DetailPage/>}/>
    </Routes>
   
  
  </BrowserRouter>
   
    
     
   
  )
}

export default App
