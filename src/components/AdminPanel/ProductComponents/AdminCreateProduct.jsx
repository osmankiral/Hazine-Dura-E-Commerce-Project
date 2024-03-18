import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AdminCreateProduct = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onFinish = async (values) => {
    const imgLinks = values.img
      .split("\n")
      .map((link) => link.trim());

    try {
      const response = await axios(`http://localhost:5000/api/products`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ...values, 
          img: imgLinks,
        }),
      });
 
      window.location.replace("http://localhost:5173/admin/products");
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
          Ürün Ekle
        </Button>
      </Form>
    </div>
  );
};

export default AdminCreateProduct;
