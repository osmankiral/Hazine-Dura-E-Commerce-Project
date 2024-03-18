import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const AdminUpdateCategory = () => {
  const params = useParams();
  const [form] = Form.useForm();
  const categoryId = params.id;
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const response = await axios(
        `http://localhost:5000/api/categories/${categoryId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify(values),
          }
      );
      navigate("/admin/categories")
      
    } catch (error) {}
  };

  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/categories/${categoryId}`
        );
        const data = response.data;
        if (data) {
          form.setFieldsValue({
            name: data.name,
            img: data.img,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCategory();
  }, []);

  return (
    <div>
      <Form
        form={form}
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
          Güncelle
        </Button>
      </Form>
    </div>
  );
};

export default AdminUpdateCategory;
