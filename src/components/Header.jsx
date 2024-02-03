import React from "react";
import LogoComp from "./HeaderComponents/LogoComp";
import SearchComp from "./HeaderComponents/SearchComp";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-12 justify-between">
        <div className="col-span-2">
          <LogoComp />
        </div>
        <div className="col-span-7 my-auto mx-10 ">
          <SearchComp />
        </div>
        <div className="col-span-3 my-auto flex gap-5">
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiUser size={28} />
            <h1 className="text-sm my-auto">Giriş</h1>
          </div>
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiHeart size={28} />
            <h1 className="text-sm my-auto">Favorilerim</h1>
          </div>
          <div className="flex cursor-pointer hover:text-orange-500 ">
            <CiShoppingCart size={30} />
            <h1 className="text-sm my-auto">Sepetim</h1>
          </div>
        </div>
      </div>
      <hr className="my-4"/>
      <div className="grid grid-cols-12">
        <a href="" className="mx-auto text-md hover:text-orange-500" >Elektronik</a>
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
      <hr className="my-4"/>
    </div>
  );
};

export default Header;
