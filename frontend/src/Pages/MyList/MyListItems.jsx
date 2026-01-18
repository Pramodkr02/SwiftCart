import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const MyListItems = (props) => {
  const item = props?.item;

  return (
    <div className="cartItem w-full p-3 flex  gap-4 pb-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[12%] rounded-md overflow-hidden">
        <Link to={`/product/${item?.productId}`} className="group">
          <img
            src={item?.image}
            alt={item?.productTitle}
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[88%] relative">
        <IoCloseSharp
          className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all"
          onClick={() => props.removeMyListItem(item?._id)}
        />
        <span className="text-[13px]">{item?.brand}</span>
        <h3 className="text-[15px] mb-1">
          <Link to={`/product/${item?.productId}`} className="link">
            {item?.productTitle}
          </Link>
        </h3>

        <div className="mt-3">
          <Rating
            name="size-small"
            value={item?.rating || 4.5}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="price text-black  text-[14px] font-[600]">
            ${item?.price}
          </span>

          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            ${item?.oldPrice}
          </span>

          <span className="price text-primary  text-[14px] font-[600]">
            {item?.discount}% OFF
          </span>
        </div>

        <Button className="btn-org btn-sm !mt-2">Add to cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
