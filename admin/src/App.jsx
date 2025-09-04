import React, { createContext, useContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import UserContextProvider from "./ContextAPI/UserContextProvider";
import toast, { Toaster } from "react-hot-toast";
import Verify from "./pages/Verify";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import Profile from "./pages/Profile";
import ProductCart from "./pages/Products/ProductCart";
import HomeSliderBanners from "./pages/HomeSliderBanners";
import CategoryList from "./pages/Category";
import SubCategoryList from "./pages/Category/subCatList";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    opne: false,
    model: "",
  });

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");

  //   if (token !== undefined && token !== null && token !== "") {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [isLogin]);

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

      fetchDataFromApi(`/api/user/user-details`).then((res) => {
        setUserData(res?.data);
        if (res?.response?.data?.message === "You have not login") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");

          openAlertBox("error", "Your session is closed please log in again");
        }
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const values = {
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <Dashboard />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/products",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <Products />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/category/list",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <CategoryList />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/subCategory/list",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <SubCategoryList />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/profile",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <Profile />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/homeSlide/list",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <HomeSliderBanners />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/orders",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <Orders />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/users",
      element: (
        <div className="main">
          <Header />
          <div className="containetMain flex">
            <div className="sidebarWrapper w-[16%]">
              <SideBar />
            </div>
            <div className="containentRight py-4 px-4 w-[84%]">
              <Users />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <div className="main">
          <Header />
          <Register />
        </div>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },
  ]);

  return (
    <>
      <UserContextProvider>
        <MyContext.Provider value={values}>
          <RouterProvider router={router} />

          <ProductCart />
        </MyContext.Provider>
      </UserContextProvider>
      <Toaster />
    </>
  );
};

export default App;
