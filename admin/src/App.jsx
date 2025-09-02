import React, { createContext, useState } from "react";
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

export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);

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
      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res) => {
        console.log(res);
        setUserData(res.data);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const values = { openAlertBox, isLogin, setIsLogin, userData, setUserData };

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
        </MyContext.Provider>
      </UserContextProvider>

      <Toaster />
    </>
  );
};

export default App;
