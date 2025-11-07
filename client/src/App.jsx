import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter,Routes, Route } from "react-router";
import Shop from './Pages/Shop';
import Navbar from './components/Navbar';
import FreshMilk from './Pages/FreshMilk';
import Fruits from './Pages/Fruits';
import { products } from './Data/data';
import DetailPage from './Pages/DetailPage';




function App() {
 

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
