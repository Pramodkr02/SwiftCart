import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegImages } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { RiProductHuntLine } from "react-icons/ri";
import { Collapse } from "react-collapse";
import { MyContext } from "../../App";

const SideBar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const context = useContext(MyContext);

  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  return (
    <div className="sidebar fixed top-0 left-0 bg-[rgb(255,255,255)] w-[16%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
      <div className="py-2 w-full">
        <Link to="/">
          <img
            src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            alt=""
            className="w-[110px]"
          />
        </Link>
      </div>

      <ul className="mt-4">
        <li>
          <Link to="/">
            <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]">
              <RxDashboard className="text-[18px]" /> <span>Dashboard</span>
            </Button>
          </Link>
        </li>

        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]"
            onClick={() => isOpenSubMenu(1)}
          >
            <FaRegImages className="text-[18px]" /> <span>Home Slides</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 1 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className="w-full">
              <li>
                <Link to={"/homeSlide/list"}>
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                    <span>Home Banner List</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  onClick={() =>
                    context.setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add Home Silde",
                    })
                  }
                  className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3"
                >
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                  <span>Add Home Banner Slide</span>
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="/users">
            <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]">
              <FiUsers className="text-[18px]" /> <span>Users</span>
            </Button>
          </Link>
        </li>

        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]"
            onClick={() => isOpenSubMenu(3)}
          >
            <RiProductHuntLine className="text-[18px]" /> <span>Products</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 3 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className="w-full">
              <li>
                <Link to="/products">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                    <span>Product List</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  onClick={() =>
                    context.setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add Product",
                    })
                  }
                  className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3"
                >
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                  <span>Product Upload</span>
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]"
            onClick={() => isOpenSubMenu(4)}
          >
            <TbCategory className="text-[18px]" /> <span>Category</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 4 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 4 ? true : false}>
            <ul className="w-full">
              <li>
                <Link to="/category/list">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                    <span>Category List</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  onClick={() =>
                    context.setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add New Category",
                    })
                  }
                  className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3"
                >
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                  <span>Add a Category</span>
                </Button>
              </li>
              <li>
                <Link to="/subCategory/list">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                    <span>Sub Category List</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  onClick={() =>
                    context.setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add New Sub Category",
                    })
                  }
                  className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex !gap-3"
                >
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
                  <span>Add a Sub Category</span>
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="/orders">
            <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]">
              <IoBagCheckOutline className="text-[19px]" /> <span>Order</span>
            </Button>
          </Link>
        </li>

        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]">
            <IoMdLogOut className="text-[18px]" /> <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
