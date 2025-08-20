import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProducutItem from "../../components/ProductItem/ProductItem";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItemListView from "../../components/ProductItemListView/ProductItemListView";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [ItemView, setIsOpenView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="link transition"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>

        <div className="bg-white p-2 mt-4">
          <div className="container flex gap-3">
            {" "}
            <div className="sideBarWrapper w-[20%] h-full bg-white">
              <SideBar />
            </div>
            <div className="rigtContent py-3 w-[80%]">
              <div className="w-full bg-[#f1f1f1] mb-4 rounded-md flex items-center p-1">
                <div className="col1 flex items-center itemViewActions">
                  <Button
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full text- !text-black ${
                      ItemView === "list" && "active"
                    }`}
                    onClick={() => setIsOpenView("list")}
                  >
                    <FiMenu className="text-[rgba(0,0,0,0.9)] text-[20px]" />
                  </Button>
                  <Button
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full text- !text-black ${
                      ItemView === "grid" && "active"
                    }`}
                    onClick={() => setIsOpenView("grid")}
                  >
                    <IoGrid className="text-[rgba(0,0,0,0.9)] text-[20px]" />
                  </Button>
                  <span className="pl-3 text-[14px] font-[500] text- !text-black">
                    There are 27 products.
                  </span>
                </div>

                <div className="col2 flex items-center justify-end ml-auto gap-3 pr-4">
                  <span className="pl-3 text-[14px] font-[500] text- !text-black">
                    Sort By:
                  </span>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-[12px] !text-[#000] !capitalize !border-3 !border-[#000] "
                  >
                    Relevence
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Sales, highest to lowest
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] !text-[#000] !capitalize"
                    >
                      Relavence
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] !text-[#000] !capitalize"
                    >
                      Name,A to Z
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] !text-[#000] !capitalize"
                    >
                      Name,Z to A
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] !text-[#000] !capitalize"
                    >
                      Price,low to high
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] !text-[#000] !capitalize"
                    >
                      Price,high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div
                className={`grid ${
                  ItemView === "grid"
                    ? "grid-cols-4 md:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-1"
                } gap-4`}
              >
                {ItemView === "grid" ? (
                  <>
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                    <ProducutItem />
                  </>
                ) : (
                  <>
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                  </>
                )}
              </div>
              <div className="flex items-center justify-center mt-10">
                <Pagination count={10} showFirstButton showLastButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
