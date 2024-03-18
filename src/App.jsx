import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";
import AdminAllCategory from "./components/AdminPanel/CategoryComponents/AdminAllCategory";
import AdminCreateCategory from "./components/AdminPanel/CategoryComponents/AdminCreateCategory";
import AdminAllProducts from "./components/AdminPanel/ProductComponents/AdminAllProducts";
import AdminCreateProduct from "./components/AdminPanel/ProductComponents/AdminCreateProduct";
import AdminUserList from "./components/AdminPanel/UserList/AdminUserList";
import AdminUpdateCategory from "./components/AdminPanel/CategoryComponents/AdminUpdateCategory";
import AdminUpdateProducts from "./components/AdminPanel/ProductComponents/AdminUpdateProducts";

function App() {
  return (
    <>
      <BrowserRouter className="font-abc">
        <Routes>
          <Route
            path="/"
            element={
              <div className="font-abc mt-5">
                <Home />
              </div>
            }
          />
          <Route path="/admin" element={<AdminHome />} >
            <Route path="/admin/categories" element={<AdminAllCategory />} />
            <Route path="/admin/categories/create" element={<AdminCreateCategory />} />
            <Route path="/admin/categories/update/:id" element={<AdminUpdateCategory />} />
            <Route path="/admin/products" element={<AdminAllProducts />} />
            <Route path="/admin/products/create" element={<AdminCreateProduct />} />
            <Route path="/admin/products/update/:id" element={<AdminUpdateProducts />} />
            <Route path="/admin/users" element={<AdminUserList />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
