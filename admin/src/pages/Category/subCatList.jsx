import { Button, Chip } from "@mui/material";
import React, { useContext, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import ProgressBar from "../../components/ProgressBar";
import { BiEditAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BiExport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import SearchBox from "../../components/SearchBox";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SubCategoryList = () => {
  const [categoryFilterVal, setCategoryFilterVal] = useState("");
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const context = useContext(MyContext);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  return (
    <>
      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Sub Cateroy List</h2>
          <div className="col w-[50%] flex items-center gap-3 justify-end">
            <Button className="btn !bg-green-500 !text-white btn-sm !flex !items-center !gap-2">
              <BiExport className="text-[20px] font-[500]" />
              <span>Export</span>
            </Button>
            <Button
              className="btn !bg-blue-500 !text-white btn-sm !flex !items-center !gap-2"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: true,
                  model: "Add New Sub Category",
                })
              }
            >
              <IoMdAdd className="text-[20px] font-[500]" />
              Add New Sub Category
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full pl-5 pr-5">
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

          <div className="col w-[20%] ml-auto">
            <SearchBox />
          </div>
        </div>
        <div className="relative overflow-x-auto sm:rounded-lg pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" className="pl-6 py-3 w-[150px]">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3 w-[300px]">
                  Image
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3 w-[180px]">
                  Category Name
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3 w-[500px]">
                  Sub Category Name
                </th>
                <th scope="col" className="px-0 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <td
                  scope="row"
                  className="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 mr-0 py-4 pr-0 w-[200px]">
                  <div className="flex items-center gap-4 w-[200px]">
                    <div className="img w-[80px] h-[80px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>

                <td
                  scope="row"
                  className=" py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="">
                    <Chip label="Fashion" />
                  </div>
                </td>

                <td
                  scope="row"
                  className="py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="flex items-center gap-3">
                    <Chip label="Men" color="primary" />
                    <Chip label="Women" color="primary" />
                    <Chip label="Kids" color="primary" />
                  </div>
                </td>

                <td className=" py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pb-4 bt-4 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default SubCategoryList;
