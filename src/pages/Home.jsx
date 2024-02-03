import React from 'react'
import Header from "../components/Header";
import BestSeller from '../components/BestSeller';
import Products from '../components/Products';
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
        <Header/>
        <BestSeller/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home