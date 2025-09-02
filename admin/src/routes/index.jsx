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

export default router;
