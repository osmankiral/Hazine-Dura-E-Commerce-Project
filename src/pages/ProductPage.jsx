import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'


const ProductPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-5 ">
    <Header/>
    <Products/>
    
    </div>
    <Footer/>
    </div>
  )
}

export default ProductPage