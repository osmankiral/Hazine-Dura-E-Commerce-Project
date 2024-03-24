import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setBestSeller(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestSeller();
  }, []);

  const MAX_LENGTH = 18;
  return (
    <div className="my-5">
      <h1 className="text-2xl mb-2">En Çok Satanlar</h1>
      <div className="grid grid-cols-12 gap-5 bg-white justify-between">
        {bestSeller.slice(0, 6).map((product) => (
          <div
            key={product._id}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 w-46 h-84 p-3 border cursor-pointer"
          >
            <img className=" h-60 mx-auto " src={product.img} alt="" />
            <hr />
            <Link to={`product/${product._id}`} className="text-sm text-gray-700 p-1 hover:text-orange-500">{`${product.name.substring(
              0,
              MAX_LENGTH
            )}...`}</Link>
            <div className="flex mt-2 justify-between mx-3">
              <h1 className="text-orange-500 ">{product.price} TL</h1>
              <CiHeart size={24} className="hover:text-orange-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
