import { Button } from "@mui/material";
import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobileNav bg-white p-1 px-3 w-full grid grid-cols-5 gap-5 fixed bottom-0 left-0 z-50 shadow-lg place-items-center">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "isActive" : "")}
      >
        <Button className="flex flex-col items-center justify-center !w-[50px] !h-[50px] !capitalize !text-gray-700">
          <IoHomeOutline size={18} />
          <span className="text-[12px]">Search</span>
        </Button>
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "isActive" : "")}
      >
        <Button className="flex flex-col items-center justify-center !w-[50px] !h-[50px] !capitalize !text-gray-700">
          <IoSearch size={18} />
          <span className="text-[12px]">Home</span>
        </Button>
      </NavLink>

      <NavLink
        to="/my-list"
        className={({ isActive }) => (isActive ? "isActive" : "")}
      >
        <Button className="flex flex-col items-center justify-center !w-[50px] !h-[50px] !capitalize !text-gray-700">
          <LuHeart size={18} />
          <span className="text-[12px]">Home</span>
        </Button>
      </NavLink>

      <NavLink
        to="/my-orders"
        className={({ isActive }) => (isActive ? "isActive" : "")}
      >
        <Button className="flex flex-col items-center justify-center !w-[50px] !h-[50px] !capitalize !text-gray-700">
          <BsBagCheck size={18} />
          <span className="text-[12px]">Home</span>
        </Button>
      </NavLink>

      <NavLink
        to="/my-account"
        className={({ isActive }) => (isActive ? "isActive" : "")}
      >
        <Button className="flex flex-col items-center justify-center !w-[50px] !h-[50px] !capitalize !text-gray-700">
          <FiUser size={18} />
          <span className="text-[12px]">Home</span>
        </Button>
      </NavLink>
    </div>
  );
};

export default MobileNav;
