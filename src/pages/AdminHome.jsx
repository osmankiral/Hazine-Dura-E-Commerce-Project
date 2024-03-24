import { Button } from "antd";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import {
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  BarcodeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Sider, Header, Content } = Layout;
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.role : null;
};
const AdminHome = () => {
  function getSectionFromURL() {
    const url = window.location.pathname;
    const parts = url.split("/");
    return parts[parts.length - 1];
  }

  const section = getSectionFromURL();

  const sea = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const userRole = getUserRole();
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/",
      children: [
        {
          key: "3",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "6",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Kullanıcı Listesi",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },
    {
      key: "12",
      icon: <ShoppingCartOutlined />,
      label: "Siparişler",
      onClick: () => {
        navigate(`/admin/orders`);
      },
    },
    {
      key: "13",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        navigate(`/`);
      },
    },
  ];

  if (userRole === "admin") {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width={200} theme="dark">
            <Header className=" text-white border-r  font-bold text-md text-center">
              KIRAL V1.0
            </Header>
            <Menu
              mode="vertical"
              style={{ height: "100%" }}
              items={menuItems}
            />
          </Sider>
          <Layout>
            <Header>
              <div>
                <h1 className=" text-white font-bold text-xl items-center py-4 ">
                  Admin Paneli
                </h1>
              </div>
            </Header>
            <Content>
              <div className="pt-3 pl-12">
                {section === "admin" ? <div><h1>Hoşgeldin {sea.username}</h1></div> : <Outlet />}
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  } else {
    return (window.location.href = "/");
  }
};

export default AdminHome;
