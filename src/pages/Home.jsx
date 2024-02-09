import React from 'react'
import Header from "../components/Header";
import BestSeller from '../components/BestSeller';
import Products from '../components/Products';
import Footer from "../components/Footer";
import Slider from '../components/Slider';
import Categories from '../components/Categories';


const Home = () => {
  return (
    <>
        <Header/>
        <Slider/>
        <BestSeller/>
        <Categories/>
        <Products/>
    </>
  )
}

export default Home