import { Button } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
      <h1 className="font-[700] text-[20px] text-gray-800">Products</h1>
      <Button className="btn-blue btn-sm !ml-auto flex !gap-2">
        <FaPlus className="text-white text-[18px]" />
        Add Product
      </Button>
    </div>
  );
};

export default Products;
