import React, { useState } from "react";

import { Form, Input } from "antd";
import axios from "axios";
const Register = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const onFinish = async (values) => {
        try {
            const response = await axios(
              `${apiUrl}/api/auth/register`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                data: JSON.stringify(values),
              }
            );
          } catch (error) {
            console.log(error)
          }
      };
  return (
    <>
        <div className="col-span-12 md:col-span-6 border p-3  rounded-lg">
            <h1 className="font-bold text-xl mb-7 ">Kayıt Ol</h1>
            <Form
              name="basic"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
            >
              <Form.Item
                label="Kullanıcı Adı"
                name="username"
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
                label="E-Posta"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Lütfen e-postanızı giriniz.",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Şifre"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Lütfen şifrenizi giriniz.",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <button
                className="bg-orange-500 hover:bg-orange-400 px-6 py-2 text-white mt-3"
                htmltype="submit"
              >
                Kayıt Ol
              </button>
            </Form>
          </div>
    </>
  )
}

export default Register