import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
const AdminUpdateProducts = () => {
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const [form] = Form.useForm();
  const productsId = params.id;
const navigate = useNavigate()
  const [singleProduct, setSingleProduct] = useState([]);
  const fetchData = async () => {
    try {
     const [categoriesResponse, singleProductResponse] = await Promise.all([
       fetch("http://localhost:5000/api/categories"),
       fetch(`http://localhost:5000/api/products/${productsId}`)
     ])
     const [categoriesData, singleProductData] = await Promise.all([
       categoriesResponse.json(),
       singleProductResponse.json(),
     ]);
   

     setCategories(categoriesData);
     setSingleProduct(singleProductData)
     if(singleProductData){
        form.setFieldsValue({
            name: singleProductData.name,
            price: singleProductData.price,
            description: singleProductData.description,
            img: singleProductData.img.join("\n"),
            category: singleProductData.category
        })
     }
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
   fetchData();
 }, []);

  const onFinish = async (values) => {
    const imgLinks = values.img
      .split("\n")
      .map((link) => link.trim());

    try {
      const response = await axios(`http://localhost:5000/api/products/${productsId}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ...values, 
          img: imgLinks,
        }),
      });
 
 
      navigate("/admin/products")
    } catch (error) {}
  };

  return (
    <div>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        form={form}
      >
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen ürün adını giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen kategori seçiniz!",
            },
          ]}
        >
          <Select>
            {categories?.map((category) => (
              <Select.Option value={category?._id} key={category?._id}>
                {category?.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Fiyat"
          name="price"
          rules={[
            {
              required: true,
              message: "Lütfen ürün fiyatını giriniz!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ürün Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "En az 1 görsel linki giriniz!",
            },
          ]}
        >
          <Input.TextArea
            autoSize={{ minRows: 4 }}
            placeholder="Her bir görsel linkini yeni bir satıra yazınız."
          />
        </Form.Item>

        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen ürün açıklaması giriniz!",
            },
          ]}
        >
          <ReactQuill className="bg-white" theme="snow" />
        </Form.Item>

        <Button className="bg-blue-500" type="primary" htmlType="submit">
          Ürün Güncelle
        </Button>
      </Form>
    </div>
  );
};

export default AdminUpdateProducts;
