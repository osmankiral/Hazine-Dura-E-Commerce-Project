import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
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
      <div>
        <h1 className="text-2xl mb-2">Categories</h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {categories?.map((category) => (
          <div className="col-span-3 text-center  hover:text-orange-500 cursor-pointer hover:border-orange-500 hover:scale-105 duration-500 ">
            <img src={category?.image} className="hover:scale-105 duration-500 rounded-t-md"/>
            <h1 className="px-auto text-2xl border">{category?.name[0].toUpperCase()+ category?.name.slice(1)}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
