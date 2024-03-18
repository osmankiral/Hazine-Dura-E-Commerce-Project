import axios from "axios";
import React from "react";
import { Button, Form, Input } from "antd";

const AdminCreateCategory = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios(
        `http://localhost:5000/api/categories`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(values),
        }
      );
      console.log(values);
      window.location.replace("http://localhost:5173/admin/categories");
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
          label="Kategori İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen kategori adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen kategori görsel linkini girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button className="bg-blue-500" type="primary" htmlType="submit">
          Kategori Ekle
        </Button>
      </Form>
    </div>
  );
};

export default AdminCreateCategory;
