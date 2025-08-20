import React from "react";
import "../ProductItem/ProductItem.css";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductItemListView() {
  return (
    <div className="productItem rounded-md shadow-md overflow-hidden border-1 border-[rgba(0,0,0,0.2)] group flex items-center">
      <div className="imgWrapper w-[25%]  overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden ">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-large_default/mug-today-is-a-good-day.jpg"
              alt=""
              className="w-full"
            />

            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
              alt=""
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 rounded-md bg-primary text-white p-1 text-[12px] font-[500]">
          -10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] flex z-50 items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Tooltip title="Wishlist" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px]  !bg-white text-black !rounded-full hover:!bg-primary hover:text-white group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="View" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black !rounded-full hover:!bg-primary hover:text-white group ">
              <MdOutlineZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="Comapre" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black !rounded-full hover:!bg-primary hover:text-white group ">
              <BiGitCompare className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3 px-8 py-5 w-[75%]">
        <h6 className="text-[15px] !font-[400]">
          <Link className="link transition-all capitalize" to="/">
            soylent Green
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3 font-[500] text-[rgba(0,0,0,0.9)] mb-3">
          <Link className="link transition-all" to="/">
            Siril Georgette Pink Color Saree With Blouse piece
          </Link>
        </h3>
        <p className="text-[14px] mb-3 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <Rating
          name="size-small"
          defaultValue={4.5}
          precision={0.5}
          size="small"
          readOnly
        />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-primary  text-[15px] font-[600]">
            $58.00
          </span>
        </div>
        <div className="mt-3">
          <Button className="btn-org flex gap-2">
            <AiOutlineShoppingCart className="!text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemListView;
