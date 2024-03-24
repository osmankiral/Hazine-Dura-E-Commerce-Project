import React from "react";

import {  Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate= useNavigate()
 const apiUrl = import.meta.env.VITE_API_BASE_URL
    const onFinish = async (values) => {
        try {
            const response = await axios(
              `${apiUrl}/api/auth/login`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                data: JSON.stringify(values),
              }
            );
            const localS = response.data
            await localStorage.setItem("user", JSON.stringify(localS))

            if(localS.role === "admin"){
                navigate("/admin")
            }else{
                navigate("/")
            }
            
          } catch (error) {
            console.log(error)
          }
      };
  return (
    <>
      <div className="col-span-12 md:col-span-6 border p-3  rounded-lg">
        <h1 className="font-bold text-xl mb-7 ">Giriş Yap</h1>
        <Form
          name="basics"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Kullanıcı adı veya e-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Lütfen Kullanıcı adı veya şifrenizi giriniz.",
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
            Giriş Yap
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
