import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import React, { createContext, useEffect, useState } from "react";
import LoginPage from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";

import SideCart from "./components/SideCart/SideCart";
import CartPage from "./Pages/Cart/Cart";
import Verify from "./Pages/Verify";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Pages/ForgotPassword";
import CheckoutPage from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/MyList/MyList";
import Orders from "./Pages/Orders";
import { fetchDataFromApi } from "./utils/api";

const MyContext = createContext();

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);
      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res) => {
        console.log(res);
        setUserData(res.data);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const values = {
    setOpenCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    setUserData,
    userData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/product-listing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route path={"/login"} exact={true} element={<LoginPage />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/checkout"} exact={true} element={<CheckoutPage />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPassword />}
            />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-orders"} exact={true} element={<Orders />} />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetail />}
            />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      {/* cart panel */}
      <SideCart
        openCartPanel={openCartPanel}
        toggleCartPanel={toggleCartPanel}
      />
    </>
  );
}

export default App;
export { MyContext };
