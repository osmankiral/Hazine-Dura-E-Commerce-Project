import React, { useEffect, useState } from "react";
import LogoComp from "./HeaderComponents/LogoComp";
import SearchComp from "./HeaderComponents/SearchComp";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

import axios from "axios";
import {
  CloseOutlined,
  HeartOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  WindowsFilled,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // localStorage'dan veriyi al
    const storedData = localStorage.getItem("user");

    // localStorage'da veri varsa, state'e ata
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const hamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setData(null);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-3">
            <LogoComp />
          </div>
          <div className="col-span-5 my-auto ">
            <SearchComp />
          </div>
          <div className="col-span-4 my-auto grid grid-cols-12 right-0 ">
            <div className="col-span-3"></div>
            {data ? (
              <Link
                to="/"
                onClick={clearLocalStorage}
                className="flex cursor-pointer hover:text-orange-500 col-span-3 mx-auto"
              >
                <CiLogout size={28} />
                <h1 className="text-sm my-auto">Çıkış</h1>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex cursor-pointer hover:text-orange-500 col-span-3 mx-auto"
              >
                <CiUser size={28} />
                <h1 className="text-sm my-auto">Giriş</h1>
              </Link>
            )}

            <Link className="flex cursor-pointer hover:text-orange-500 col-span-3 mx-auto">
              <CiHeart size={28} />
              <h1 className="text-sm my-auto">Favoriler</h1>
            </Link>
            <Link className="flex cursor-pointer hover:text-orange-500 col-span-3 mx-auto">
              <CiShoppingCart size={30} />
              <h1 className="text-sm my-auto">Sepet</h1>
            </Link>
          </div>
        </div>
        <hr className="mt-4 mb-1" />

        <div className="mb-5">
          <header className=" bg-white border-b items-center justify-between hidden lg:block">
            <nav className="nav text-md mx-auto">
              <ul className="flex items-center justify-center">
                {categories?.map((category) => (
                  <li
                    key={category._id}
                    className="p-3 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer active"
                  >
                    <a>
                      {category?.name[0].toUpperCase() +
                        category?.name.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div className="block lg:hidden mb-5">
        <div className="px-3 flex justify-between">
          <button onClick={hamburgerMenu}>
            {isOpen ? (
              <CloseOutlined style={{ fontSize: "32px" }} />
            ) : (
              <MenuOutlined style={{ fontSize: "32px" }} />
            )}
          </button>
          <div>
            {data ? (
              <Link onClick={clearLocalStorage} to="/">
                <LogoutOutlined className="mr-5" style={{ fontSize: "32px" }} />
              </Link>
            ) : (
              <Link to="/login">
                <LoginOutlined className="mr-5" style={{ fontSize: "32px" }} />
              </Link>
            )}

            <Link>
              <HeartOutlined className="mr-5" style={{ fontSize: "32px" }} />
            </Link>
            <Link>
              <ShoppingCartOutlined style={{ fontSize: "32px" }} />
            </Link>
          </div>
        </div>
        {isOpen ? (
          <div className="text-center mt-5 pt-3 border-t grid grid-cols-12 min-h-screen">
            <Link
              onClick={hamburgerMenu}
              to="/"
              className="col-span-12 mb-2 border-b pb-2 font-semibold text-xl"
            >
              ANASAYFA
            </Link>
            <button className="col-span-12 mb-2 border-b pb-2 font-semibold text-xl">
              KATEGORİLER
            </button>
            {categories?.map((category) => (
              <Link
                key={category._id}
                className="col-span-12 mb-2 border-b py-2 text-lg"
              >
                {category?.name[0].toUpperCase() + category?.name.slice(1)}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
