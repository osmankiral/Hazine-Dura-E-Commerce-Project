import { Button, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





const AdminAllProducts = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => <img src={imgSrc[0]} alt="Image" width={70} className="border" />,
    },
    {
      title: "Ürün Adı",
      dataIndex: "name",
      key: "name",
      render: (text) => <h1 className="text-md font-semibold">{text}</h1>,
    },
    {
      title: "Kategori Adı",
      dataIndex: "categoryName",
      key: "categoryName",
      render: (text) => <h1 className="text-md ">{text}</h1>,
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => <h1 className="text-md ">{text.toFixed(0)} TL</h1>,
    },
    {
      title: "İşlemler",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button className="bg-blue-500" type="primary" onClick={()=> navigate(`/admin/products/update/${record._id}`)}>
            Düzenle
          </Button>
          <Popconfirm
            title="Kategoriyi Sil"
            description="Kategoriyi silmek istediğinizden emin misiniz?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteProduct(record._id)}
          >
            <Button type="primary" danger>
              Sil
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/products/${productId}`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const [products, setProducts] = useState([]);

   const fetchData = async () => {
     try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        fetch("http://localhost:5000/api/categories"),
        fetch("http://localhost:5000/api/products")
      ])
      const [categoriesData, productsData] = await Promise.all([
        categoriesResponse.json(),
        productsResponse.json(),
      ]);
      const productsWithCategories = productsData.map((product) => {
        const categoryId = product.category;
        const category = categoriesData.find(
          (item) => item._id === categoryId
        );

        return {
          ...product,
          categoryName: category ? category.name : "",
        };
      });

      setProducts(productsWithCategories);
     } catch (error) {
       console.log(error);
     }
   };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table className="pr-10" dataSource={products} columns={columns} />
    </div>
  );
};

export default AdminAllProducts;
