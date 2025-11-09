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
useEffect(() => {
    fetch("http://localhost:7000/freshmilk") // your API URL
      .then(res => res.json())
      .then(data => setProducts(data.milk)) // <-- use data.milk
      .catch(err => console.log(err));
  }, []);

   

 

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
