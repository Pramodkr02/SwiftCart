import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [seclectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [seclectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
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

      <div className="info w-[90%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
        <span className="text-[13px]">Sangria</span>
        <h3 className="text-[15px] mb-1">
          <Link className="link">A-Line Kurti with Sharee & Dupatta</Link>
        </h3>

        <div
          className="flex items-center
       gap-4"
        >
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2 "
              onClick={handleClickSize}
            >
              Size: {seclectedSize} <FaAngleDown className="ml-1" />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2"
              onClick={handleClickQty}
            >
              Qty: {seclectedQty} <FaAngleDown className="ml-1" />
            </span>

            <Menu
              id="size-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
              <MenuItem onClick={() => handleCloseQty(11)}>11</MenuItem>
            </Menu>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default CartItems;
