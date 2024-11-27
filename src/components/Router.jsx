import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Layout from "../pages/Layout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cartpage from "../pages/Cartpage";
import Addproduct from "../pages/Addproduct";
import Singleproduct from "./Singleproduct";
import Shops from "../pages/Shops";
import { useState } from "react";

export default function Router() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cartpage cart={cart} setCart={setCart}/>
            </Layout>
          }
        />
        <Route
          path="Addproduct"
          element={
            <Layout>
              <Addproduct />
            </Layout>
          }
        />
        <Route
          path="Singleproduct"
          element={
            <Layout>
              <Singleproduct />
            </Layout>
          }
        />
        <Route
          path="Shops"
          element={
            <Layout>
              <Shops />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
