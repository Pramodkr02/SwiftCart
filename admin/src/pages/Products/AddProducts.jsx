import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Rating } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AddProducts = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productRams, setProductRams] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productRating, setProductRating] = useState(2);

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  const handleChangeProductRating = (event) => {
    setProductRating(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form action="" className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-3">Product Name</h3>
              <input
                type="text"
                className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Description
                </h3>
                <textarea className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productCat}
                  label="Category"
                  onChange={handleChangeProductCat}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Electronics</MenuItem>
                  <MenuItem value={30}>Home & Kitchen</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Sub Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productSubCat}
                  label="Sub Category"
                  onChange={handleChangeProductSubCat}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                  <MenuItem value={30}>Kids</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Price</h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Old Price
                </h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Is Featured ?</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productFeatured}
                  label="Category"
                  onChange={handleChangeProductFeatured}
                >
                  <MenuItem value={10}>True</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Stock</h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Brand</h3>
                <input
                  type="text"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Discount
                </h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product RAMS</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productRams}
                  label="RAM"
                  onChange={handleChangeProductRams}
                >
                  <MenuItem value={"4GB"}>4GB</MenuItem>
                  <MenuItem value={"8GB"}>8GB</MenuItem>
                  <MenuItem value={"16GB"}>16GB</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Weight</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productWeight}
                  label="Weight"
                  onChange={handleChangeProductWeight}
                >
                  <MenuItem value={"2KG"}>2KG</MenuItem>
                  <MenuItem value={"3KG"}>3KG</MenuItem>
                  <MenuItem value={"4KG"}>4KG</MenuItem>
                  <MenuItem value={"5KG"}>5KG</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Size</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productSize}
                  label="Size"
                  onChange={handleChangeProductSize}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Rating</h3>
                <Rating
                  name="product-rating"
                  value={productRating}
                  onChange={handleChangeProductRating}
                  defaultValue={2}
                  precision={0.5}
                />
              </div>
            </div>
          </div>

          <div className="col w-full p-5 px-0">
            <h3 className="text-[18px] font-[700] mb-3">Media & Images</h3>

            <div className="grid grid-cols-7 gap-2">
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
            </div>
          </div>
        </div>
        <hr />
        <br />
        <Button type="submit" className="btn-blue btn-lg flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          <span>Publish and View</span>
        </Button>
      </form>
    </section>
  );
};

export default AddProducts;
