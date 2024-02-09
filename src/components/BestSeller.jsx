import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setBestSeller(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestSeller();
  }, []);
console.log(bestSeller[0]?.title)
const MAX_LENGTH = 30;
  return (
    <div className="my-5">
      <h1 className="text-2xl mb-2">Best Sellers</h1>
      <div className="grid grid-cols-12 gap-5 bg-white justify-between">
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[7]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[7]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[7]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>    
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[14]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[14]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[14]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>   
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[18]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[18]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[18]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>  
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[22]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[22]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[22]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[34]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[34]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[34]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>
          <div className="col-span-2 w-46 h-84 p-3 border cursor-pointer">
            <img
              className=" h-60 mx-auto"
              src={bestSeller[39]?.images}
              alt=""
            />
            <h1 className="text-sm text-gray-700 p-1">{`${bestSeller[39]?.title.substring(0, MAX_LENGTH)}...`}</h1>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{bestSeller[39]?.price} $</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>   
      </div>
      
    </div>
  );
};

export default BestSeller;
