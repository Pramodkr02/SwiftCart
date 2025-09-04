import { Button } from "@mui/material";
import React, { useContext, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import SearchBox from "../../components/SearchBox";
import { MyContext } from "../../App";
import { MdLocalPhone, MdOutlineMarkEmailRead } from "react-icons/md";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Users = () => {
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
          <h2 className="text-[18px] font-[600]">Users List </h2>
          <div className="col w-[35%] ml-auto">
            <SearchBox />
          </div>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" className="pl-6 py-3">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3 uppercase">
                  User Image
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3 uppercase">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  User Phone no.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
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
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
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
                <td className=" py-4">
                  <span className="font-[500]">Pramod Kumar</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-[500] flex items-center  gap-2">
                    <span className="pt-1">
                      <MdOutlineMarkEmailRead />
                    </span>
                    pramodkr02.info@gmail.com
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="font-[500] flex items-center  gap-2">
                    <span className="pt-1">
                      <MdLocalPhone />
                    </span>
                    +91-8794365800
                  </span>
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

export default Users;
