import React from 'react'

import CategoryHeader from '../components/CategoryHeader'
import HeroCarousel from '../components/HeroCarousel'
import ProductCategories from '../components/ProductCategories'
import PaymentDetails from '../components/PaymentDetails'
import Footer from '../components/Footer'
//import Navbar from '../components/Navbar'


function Home() {
    return(
        <>     
     <CategoryHeader/>
     <HeroCarousel/>
     <ProductCategories/>
     <PaymentDetails/>
     <Footer/>
        </>
    )
}
export default Home