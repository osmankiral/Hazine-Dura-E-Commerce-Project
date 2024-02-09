import React, { useEffect, useState } from "react";
import LogoComp from "./HeaderComponents/LogoComp";
import SearchComp from "./HeaderComponents/SearchComp";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";

const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  
  return (
    <div>
      <div className="grid grid-cols-12 justify-between gap-16">
        <div className="col-span-3">
          <LogoComp />
        </div>
        <div className="col-span-6 my-auto  ">
          <SearchComp />
        </div>
        <div className="col-span-3 my-auto flex gap-5 right-0">
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiUser size={28} />
            <h1 className="text-sm my-auto">Login</h1>
          </div>
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiHeart size={28} />
            <h1 className="text-sm my-auto">Favorites</h1>
          </div>
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiShoppingCart size={30} />
            <h1 className="text-sm my-auto">Cart</h1>
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-1"/>
      {/* <div className="grid grid-cols-12">
        <a href="" className="mx-auto text-md hover:text-orange-500 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 duration-200 cursor-pointer active" >Elektronik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Giyim</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Kozmetik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Elektronik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Giyim</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Kozmetik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Elektronik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Giyim</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Kozmetik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Elektronik</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Giyim</a>
        <a href="" className="mx-auto text-md hover:text-orange-500" >Kozmetik</a>
      </div>
      <hr className="my-4"/> */}
      <div className="mb-5">
      <header className=" bg-white border-b items-center justify-between hidden lg:block">
        <nav className="nav text-md mx-auto">
          <ul className="flex items-center justify-center">
            {categories?.map((category)=>(
              <li key={category.id} className="p-3 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer active">
              <a >{category?.name[0].toUpperCase()+ category?.name.slice(1)}</a>
            </li>
            ))}
          </ul>
        </nav>
      </header>
      </div>
    </div>
    
  );
};

export default Header;
