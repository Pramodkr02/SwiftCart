import React, { useState } from "react";
import "./SideBar.css";
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpneCatfilter, setIsOpneCatFilter] = useState(true);
  const [isOpneAvailfilter, setIsOpneAvailfilter] = useState(true);
  const [isOpneSizefilter, setIsOpneSizefilter] = useState(true);

  return (
    <>
      <aside className="SideBar py-5">
        <div className="box">
          <h3 className="mb-0 text-[16px] font-[600] flex items-center !pr-5">
            Shop by catogory{" "}
            <Button
              onClick={() => setIsOpneCatFilter(!isOpneCatfilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            >
              {isOpneCatfilter ? (
                <FaAngleDown className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              ) : (
                <FaAngleRight className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              )}
            </Button>
          </h3>
          <Collapse isOpened={isOpneCatfilter}>
            <div className="scroll px-3 relative left-[-10px]">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Faishon"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Electronics"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Bags"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Footwear"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="groceries"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Beauty"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Wellness"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Jwellery"
                className="w-full"
              />
            </div>
          </Collapse>
        </div>
        <div className="box">
          <h3 className="mb-0 mt-1 text-[16px] font-[600] flex items-center !pr-5">
            Availability{" "}
            <Button
              onClick={() => setIsOpneAvailfilter(!isOpneAvailfilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            >
              {isOpneAvailfilter ? (
                <FaAngleDown className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              ) : (
                <FaAngleRight className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              )}
            </Button>
          </h3>
          <Collapse isOpened={isOpneAvailfilter}>
            <div className="scroll px-3 relative left-[-10px]">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Available (17)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="In Stock (17)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Not Available (17)"
                className="w-full"
              />
            </div>
          </Collapse>
        </div>
        <div className="box">
          <h3 className="mb-0 mt-1 text-[16px] font-[600] flex items-center !pr-5">
            Size{" "}
            <Button
              onClick={() => setIsOpneSizefilter(!isOpneSizefilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            >
              {isOpneSizefilter ? (
                <FaAngleDown className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              ) : (
                <FaAngleRight className="!text-[rgba(0,0,0,0.9)] font-[500] text-[18px]" />
              )}
            </Button>
          </h3>
          <Collapse isOpened={isOpneSizefilter}>
            <div className="scroll px-3 relative left-[-10px]">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Small (11)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Midium (07)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Large (18)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Extra Large (2)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="XL (13)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="XXL (15)"
                className="w-full"
              />
            </div>
          </Collapse>
        </div>
        <div className="box">
          <h3 className="mb-2 pb-2 text-[16px] font-[600] flex items-center !pt-5">
            Filter By Price
          </h3>
          <RangeSlider />
          <div className="priceRange flex pt-4 pb-2">
            <span className="text-[14px]">
              From: <strong className="text-dark">Rs: {100}</strong>
            </span>
            <span className="ml-auto text-[14px]">
              From: <strong className="text-dark">Rs: {5000}</strong>
            </span>
          </div>
        </div>
        <div className="box">
          <h3 className="mb-2 pb-2 text-[16px] font-[600] flex items-center !pt-5">
            Filter By Rating
          </h3>
          <div className="w-full">
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={3} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
