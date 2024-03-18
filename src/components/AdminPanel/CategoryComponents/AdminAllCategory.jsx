import { Button, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:5000/api/categories";




const AdminAllCategory = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: "Kategori Görseli",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => <img src={imgSrc} alt="Image" width={70} />,
    },
    {
      title: "Kategori Adı",
      dataIndex: "name",
      key: "name",
      render: (text) => <h1 className="text-md font-semibold">{text}</h1>,
    },
    {
      title: "İşlemler",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button className="bg-blue-500" type="primary" onClick={()=> navigate(`/admin/categories/update/${record._id}`)}>
            Düzenle
          </Button>
          <Popconfirm
            title="Kategoriyi Sil"
            description="Kategoriyi silmek istediğinizden emin misiniz?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCategory(record._id)}
          >
            <Button type="primary" danger>
              Sil
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/${categoryId}`
      );
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const [categories, setCategories] = useState([]);

   const fetchCategories = async () => {
     try {
       const response = await axios.get(apiUrl);
       setCategories(response.data);
     } catch (error) {
       console.log(error);
     }
   };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Table className="pr-10" dataSource={categories} columns={columns} />
    </div>
  );
};

export default AdminAllCategory;
