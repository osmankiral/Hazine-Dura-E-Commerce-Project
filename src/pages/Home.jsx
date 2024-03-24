import React from "react";
import Header from "../components/Header";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-3 xl:mx-auto">
      <Header />
        <Slider />
        <BestSeller />
        <Categories />
      </div>

      <Footer />
    </>
  );
};

export default Home;
