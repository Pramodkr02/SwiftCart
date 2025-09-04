import React, { useState } from "react";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button, MenuItem, Select } from "@mui/material";

const AddSubCategory = () => {
  const [categoryFilterVal, setCategoryFilterVal] = useState("");

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form action="" className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="flex gap-4 mb-6">
            <div className="col w-[20%]">
              <h4 className="font-[600] uppercase text-[13px] mb-2">
                Category by
              </h4>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categoryFilterVal}
                onChange={handleChangeCatFilter}
                label="Category"
                className="w-full"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Man</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kid's</MenuItem>
              </Select>
            </div>

            <div className="col w-[20%]">
              <h4 className="font-[600] uppercase text-[13px] mb-2">
                Category by
              </h4>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categoryFilterVal}
                onChange={handleChangeCatFilter}
                label="Category"
                className="w-full"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Man</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kid's</MenuItem>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-2 mt-2">
            <div className="uploadBoxWrraper relative">
              <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                <IoMdClose className="text-white text-[17px]" />
              </span>
              <div className="uploadBox rounded-md  overflow-hidden border border-[rgba(0,0,0,0.2)] h-[170px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex  justify-center items-center relative">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  alt={"image"}
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/w/z/7/28-esr2-rishi-traders-original-imahex6rke5rrvxc.jpeg?q=70&crop=false"
                />
              </div>
            </div>

            <UploadBox multiple={true} />
            <br />
          </div>
        </div>

        <br />
        <br />
        <Button type="submit" className="btn-blue btn-lg flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          <span>Publish and View</span>
        </Button>
      </form>
    </section>
  );
};

export default AddSubCategory;
