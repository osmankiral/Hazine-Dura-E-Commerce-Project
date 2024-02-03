import React from 'react'
import Header from "../components/Header";
import BestSeller from '../components/BestSeller';
import Products from '../components/Products';
import Footer from "../components/Footer";
import Slider from '../components/Slider';


const Home = () => {
  return (
    <>
        <Header/>
        <Slider/>
        <BestSeller/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home