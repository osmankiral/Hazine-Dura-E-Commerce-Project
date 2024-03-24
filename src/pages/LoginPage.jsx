import React from "react";
import Header from "../components/Header";
import { Checkbox, Form, Input } from "antd";
import Login from "../components/AuthComponents/Login";
import Register from "../components/AuthComponents/Register";
import Footer from "../components/Footer";
const LoginPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-3 xl:mx-auto my-5 min-h-screen ">
        <Header />
        <div className="grid grid-cols-12 border p-3 gap-3 ">
          {/* Giriş Yap */}
          <Login/>

          {/* Kayıt Ol */}
          <Register/>
        </div>
      </div>
      <div className="bottom-0 w-full text-center">
      <Footer />
      </div>
      
    </>
  );
};

export default LoginPage;
