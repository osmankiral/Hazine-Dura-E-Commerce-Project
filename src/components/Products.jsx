import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rate, Select } from "antd";
import { CiHeart } from "react-icons/ci";

const Products = () => {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      setProduct(response.data);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

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
    <>
    <hr className="my-3 visible lg:invisible" />
      <div className="grid grid-cols-12 gap-0 md:gap-10">
        <div className="order-2 md:order-1 col-span-12 md:col-span-3 mx-3 xl:mx-0 p-3 border">
          <img src={product.img} className="mx-auto my-auto w-96 " />
        </div>
        <div className="order-1 md:order-2 col-span-12 md:col-span-6 mx-3 xl:mx-0 p-3 " >
          <h1 className="font-semibold text-2xl mb-5 mt-3">{product.name}</h1>
          <hr className="mb-3" />

          <Rate defaultValue={5} />
          <hr className="mt-3" />
          <p className="mt-3 font-semibold text-xl">
            {product.price} <span>TL</span>
          </p>
          <p className="text-xs mt-3">Fiyatlara KDV dahildir.</p>
          <hr className="mt-3" />
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
        </div>
        <div className="order-3 md:order-3 col-span-12 md:col-span-3 mx-3 xl:mx-0 border p-4 rounded-sm">
          <p className="font-semibold text-xl ">
            {product.price} <span>TL</span>
          </p>
          <p className="text-sm mt-3">
            500 Tl üzerine <b>ÜCRETSİZ</b> kargo teslimatı.
          </p>
          <div>
            <Select
              defaultValue="1"
              className="w-full mt-3"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4", disabled: false },
              ]}
            />
          </div>

          <h1 className="mt-3 mb-2">Kuponlar</h1>
          <div className="p-5 bg-orange-100 border border-orange-300 rounded-lg items-center ">
            <p className="font-semibold text-center">20 TL</p>
            <p className="text-center text-white bg-orange-500 mx-0 xl:mx-10 mt-3 py-1 rounded-lg cursor-pointer hover:bg-orange-600">Kazan</p>
          </div>
          <button className="w-full bg-orange-500 rounded-3xl mt-16 h-12 text-white hover:bg-orange-600">
            Sepete Ekle
          </button>

        </div>

      </div>
      <hr className='mt-10' />
      <div className="my-5 mx-3 md:mx-0">
      <h1 className="text-2xl mb-3">Benzer Ürünler</h1>
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
    </>
  );
};

export default Products;
