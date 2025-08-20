import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Products from "./pages/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
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
        </>
      ),
    },
    {
      path: "/products",
      exact: true,
      element: (
        <>
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
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
