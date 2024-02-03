import React from "react";
import { IoSearch } from "react-icons/io5";


const SearchComp = () => {
  return (
    <div class="relative">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-5 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50
        focus:outline-none focus:border-orange-500"
        placeholder="Aradığınız ürünü giriniz..."
        required
      />
      
      <button
        type="submit"
        className="absolute end-2.5 bottom-2 rounded-lg px-2 py-2 focus:border-orange-500 focus:outline-none"
      >
        <IoSearch size={24} className="text-gray-400"/>
      </button>
    </div>
  );
};

export default SearchComp;
