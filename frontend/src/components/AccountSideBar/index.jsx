import React from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[20px] ">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px]  rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://blog.zapr.in/hubfs/Imported_Blog_Media/md-1.jpg"
            alt=""
            className="w-full object-cover"
          />

          <div className="overlay absolute w-[100%] h-[100%] top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center  opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[#fff] text-[26px]" />
            <input
              type="file"
              className="absolute w-[100%] h-[100%] top-0 left-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <h3>Rajesh Sharma</h3>
        <h6 className="text-[14px] font-[500]">pramodjnv985@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 w-full">
              <FaRegUser className="text-[18px] " />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <FaRegHeart className="text-[18px] " />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <IoBagCheckOutline className="text-[18px] " />
              My Orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <IoMdLogOut className="text-[18px] " />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
