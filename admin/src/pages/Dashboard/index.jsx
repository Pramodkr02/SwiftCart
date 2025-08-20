import React, { useState, PureComponent } from "react";
import DashboardBoxes from "../../components/DashboardBoxes/index";
import Shop1 from "../../../public/shop-illustration (1).webp";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Badge from "../../components/Badge";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const [categoryFilterVal, setCategoryFilterVal] = useState("");

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
      <div className="w-full py-2 px-5 p-5 border border-[rgba(0,0,0,0.1)] items-center flex gap-8 mb-5 justify-between rounded-md bg-[#cce7e77a]">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning, <br /> Pramod
          </h1>
          <p className="mb-6 font-medium">
            Here's What happening on your store today. See the stastics at once.
          </p>
          <Button className="btn-blue !capitalize !flex !items-center !gap-2">
            <FaPlus className="text-[18px]" /> Add Product
          </Button>
        </div>
        <img src={Shop1} alt="" className=" w-[250px] " />
      </div>
      <DashboardBoxes />

      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Products{" "}
            <span className="font-[500] text-[14px] opacity-75">
              (Tailwind CSS Table)
            </span>
          </h2>
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

          <div className="col w-[50%] flex items-center gap-3 justify-end">
            <Button className="btn !bg-green-500 !text-white btn-sm !flex !items-center !gap-2">
              <BiExport className="text-[20px] font-[500]" />
              <span>Export</span>
            </Button>
            <Button className="btn !bg-blue-500 !text-white btn-sm !flex !items-center !gap-2">
              <IoMdAdd className="text-[20px] font-[500]" />
              Add Product
            </Button>
          </div>
        </div>
        <div class="relative overflow-x-auto sm:rounded-lg pb-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" class="pl-6 py-3">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" class="px-0 mr-0 mx-0 pr-0 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  category
                </th>
                <th scope="col" class="px-6 py-3">
                  sub category
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <td class="px-0 mr-0 py-4 pr-0 w-[300px]">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                        <Link to="/product/2547">
                          Here are some examples of customizing the component.
                          You can learn
                        </Link>
                      </h3>

                      <span className="text-[12px]">Peter Land</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Electronics</span>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Women</span>
                </td>
                <td class="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                      $581.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $254.00
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 ">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">256</span> Sale
                  </p>
                  <ProgressBar value={50} type="warning" />
                </td>

                <td class="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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
              <tr class="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <td class="px-0 mr-0 py-4 pr-0 w-[300px]">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                        <Link to="/product/2547">
                          Here are some examples of customizing the component.
                          You can learn
                        </Link>
                      </h3>

                      <span className="text-[12px]">Peter Land</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Electronics</span>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Women</span>
                </td>
                <td class="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                      $581.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $254.00
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 ">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">256</span> Sale
                  </p>
                  <ProgressBar value={50} type="warning" />
                </td>

                <td class="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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
              <tr class="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <td class="px-0 mr-0 py-4 pr-0 w-[300px]">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                        <Link to="/product/2547">
                          Here are some examples of customizing the component.
                          You can learn
                        </Link>
                      </h3>

                      <span className="text-[12px]">Peter Land</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Electronics</span>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Women</span>
                </td>
                <td class="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                      $581.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $254.00
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 ">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">256</span> Sale
                  </p>
                  <ProgressBar value={50} type="warning" />
                </td>

                <td class="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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
              <tr class="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <td class="px-0 mr-0 py-4 pr-0 w-[300px]">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                        <Link to="/product/2547">
                          Here are some examples of customizing the component.
                          You can learn
                        </Link>
                      </h3>

                      <span className="text-[12px]">Peter Land</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Electronics</span>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Women</span>
                </td>
                <td class="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                      $581.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $254.00
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 ">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">256</span> Sale
                  </p>
                  <ProgressBar value={50} type="warning" />
                </td>

                <td class="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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
              <tr class="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <td class="px-0 mr-0 py-4 pr-0 w-[300px]">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/2547">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvpxwbpx4f/try-this-mens-round-neck-regular-fit-half-sleeves-tshirt-product-images-rvpxwbpx4f-0-202303091003.jpg?im=Resize=(600,750)"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                        <Link to="/product/2547">
                          Here are some examples of customizing the component.
                          You can learn
                        </Link>
                      </h3>

                      <span className="text-[12px]">Peter Land</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Electronics</span>
                </td>
                <td class="px-6 py-4">
                  <span className="font-[500]">Women</span>
                </td>
                <td class="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                      $581.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $254.00
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 ">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">256</span> Sale
                  </p>
                  <ProgressBar value={50} type="warning" />
                </td>

                <td class="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <BiEditAlt className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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

      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg pb-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" class="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" class="px-6 py-3">
                  order Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Pin Code
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderProduct(0)}
                  >
                    <FaAngleDown
                      className={`text-[16px] text-[rgba(0,0,0,0.7)] ${
                        isOpenOrderProduct === 0 ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </th>
                <td class="px-6 py-4 ">
                  <span className="!text-[#ff5252]">
                    htklhkjsdhjkdbjkgbcjkbxgbjbejb
                  </span>
                </td>
                <td class="px-6 py-4">
                  {" "}
                  <span>htklhkjsdhjkdbjkgbcj</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span>Pramod kumar</span>
                </td>
                <td class="px-6 py-4">
                  <span>+91 875541982</span>
                </td>
                <td class="px-6 py-4">
                  <span className="block w-[400px]">
                    H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                    medical ph. +91-55558454
                  </span>
                </td>
                <td class="px-6 py-4">110053</td>
                <td class="px-6 py-4">3800</td>
                <td class="px-6 py-4">pramodjnv985@gmail.com</td>
                <td class="px-6 py-4">
                  <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
                </td>
                <td class="px-6 py-4">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">20-05-2005</td>
              </tr>
              {isOpenOrderProduct === 0 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div class="relative max-w-[1050px] overflow-hidden">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Imgae
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#ff5252]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#ff5252]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-[#f1f1f1]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderProduct(1)}
                  >
                    <FaAngleDown
                      className={`text-[16px] text-[rgba(0,0,0,0.7)] ${
                        isOpenOrderProduct === 1 ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </th>
                <td class="px-6 py-4 ">
                  <span className="!text-[#ff5252]">
                    htklhkjsdhjkdbjkgbcjkbxgbjbejb
                  </span>
                </td>
                <td class="px-6 py-4">
                  {" "}
                  <span>htklhkjsdhjkdbjkgbcj</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span>Pramod kumar</span>
                </td>
                <td class="px-6 py-4">
                  <span>+91 875541982</span>
                </td>
                <td class="px-6 py-4">
                  <span className="block w-[400px]">
                    H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                    medical ph. +91-55558454
                  </span>
                </td>
                <td class="px-6 py-4">110053</td>
                <td class="px-6 py-4">3800</td>
                <td class="px-6 py-4">pramodjnv985@gmail.com</td>
                <td class="px-6 py-4">
                  <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
                </td>
                <td class="px-6 py-4">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">20-05-2005</td>
              </tr>
              {isOpenOrderProduct === 3 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div class="relative max-w-[1050px] overflow-hidden">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Imgae
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#ff5252]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#ff5252]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-[#f1f1f1]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderProduct(2)}
                  >
                    <FaAngleDown
                      className={`text-[16px] text-[rgba(0,0,0,0.7)] ${
                        isOpenOrderProduct === 3 ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </th>
                <td class="px-6 py-4 ">
                  <span className="!text-[#ff5252]">
                    htklhkjsdhjkdbjkgbcjkbxgbjbejb
                  </span>
                </td>
                <td class="px-6 py-4">
                  {" "}
                  <span>htklhkjsdhjkdbjkgbcj</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span>Pramod kumar</span>
                </td>
                <td class="px-6 py-4">
                  <span>+91 875541982</span>
                </td>
                <td class="px-6 py-4">
                  <span className="block w-[400px]">
                    H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                    medical ph. +91-55558454
                  </span>
                </td>
                <td class="px-6 py-4">110053</td>
                <td class="px-6 py-4">3800</td>
                <td class="px-6 py-4">pramodjnv985@gmail.com</td>
                <td class="px-6 py-4">
                  <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
                </td>
                <td class="px-6 py-4">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">20-05-2005</td>
              </tr>
              {isOpenOrderProduct === 2 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div class="relative max-w-[1050px] overflow-hidden">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Imgae
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#3872fa]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr class="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 ">
                              <span className="!text-[#ff5252]">
                                htklhkjsdhjkdbjkgbc
                              </span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="whitespace-nowrap">
                                Banarsi Sree in Cultral India
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                                alt=""
                                className="w-[40px] h-[40px] rounded-md object-cover"
                              />
                            </td>
                            <td class="px-6 py-4">
                              <span>3</span>
                            </td>
                            <td class="px-6 py-4">
                              <span>1300</span>
                            </td>
                            <td class="px-6 py-4">
                              <span className="">1300</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-[#f1f1f1]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
