import React from "react";
import "./ProductItem.css";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

function ProductItem(props) {
  return (
    <div className="productItem rounded-md shadow-md overflow-hidden border-1 border-[rgba(0,0,0,0.2)] group">
      <div className="imgWrapper w-[100%]  overflow-hidden rounded-md relative">
        <Link to={`/product/${props.id || 1}`}>
          <div className="img h-[250px] overflow-hidden ">
            <img
              src="https://www.jiomart.com/images/product/original/rvrzp8chyx/lorofy-women-black-net-saree-product-images-rvrzp8chyx-0-202206061625.jpg?im=Resize=(600,750)"
              alt=""
              className="w-full"
            />

            <img
              src="https://www.jiomart.com/images/product/original/rvrzp8chyx/lorofy-women-black-net-saree-product-images-rvrzp8chyx-2-202206061625.jpg?im=Resize=(600,750)"
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
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black !rounded-full hover:!bg-primary hover:text-white group ">
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
      <div className="info p-3 py-5">
        <h6 className="text-[13px] !font-[400]">
          <Link className="link transition-all capitalize" to={`/product/${props.id || 1}`}>
            soylent Green
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)] mb-1">
          <Link className="link transition-all" to={`/product/${props.id || 1}`}>
            Siril Georgette Pink Color Saree With Blouse piece
          </Link>
        </h3>

        <Rating
          name="size-small"
          defaultValue={4.5}
          precision={0.5}
          size="small"
          readOnly
        />

        <div className="flex items-center justify-between gap-4 pr-2">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-primary  text-[15px] font-[600]">
            $58.00
          </span>
        </div>
        <div className="add_to-cart flex items-center justify-center w-full mt-2">
          <Link className="w-full">
            <Button className="!w-full btn-bl btn-sm">Add To cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
