import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const MyListItems = (props) => {
  return (
    <div className="cartItem w-full p-3 flex  gap-4 pb-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[12%] rounded-md overflow-hidden">
        <Link to="/product/5454" className="group">
          <img
            src="https://www.jiomart.com/images/product/original/rve5i9vivd/om-shantam-sarees-wine-woven-self-design-organza-soft-silk-jacquard-sarees-product-images-rve5i9vivd-0-202404152004.jpg?im=Resize=(330,410)"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[88%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
        <span className="text-[13px]">Sangria</span>
        <h3 className="text-[15px] mb-1">
          <Link className="link">A-Line Kurti with Sharee & Dupatta</Link>
        </h3>

        <div className="mt-3">
          <Rating
            name="size-small"
            defaultValue={4.5}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="price text-black  text-[14px] font-[600]">
            $58.00
          </span>

          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>

          <span className="price text-primary  text-[14px] font-[600]">
            55% OFF
          </span>
        </div>

        <Button className="btn-org btn-sm !mt-2">Add to cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
