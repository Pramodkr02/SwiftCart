import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../components/Badge";
import SearchBox from "../../components/SearchBox";

const Orders = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  return (
    <div className="card my-4 shadow-md bg-white sm:rounded-lg">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        <div className="col w-[25%] ml-auto">
          <SearchBox />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
              <th scope="col" className="px-6 py-3">
                order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Id
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Name
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Address
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Pin Code
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Email
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                User Id
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
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
              <td className="px-6 py-4 ">
                <span className="!text-[#ff5252]">
                  htklhkjsdhjkdbjkgbcjkbxgbjbejb
                </span>
              </td>
              <td className="px-6 py-4">
                {" "}
                <span>htklhkjsdhjkdbjkgbcj</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span>Pramod kumar</span>
              </td>
              <td className="px-6 py-4">
                <span>+91 875541982</span>
              </td>
              <td className="px-6 py-4">
                <span className="block w-[400px]">
                  H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                  medical ph. +91-55558454
                </span>
              </td>
              <td className="px-6 py-4">110053</td>
              <td className="px-6 py-4">3800</td>
              <td className="px-6 py-4">pramodjnv985@gmail.com</td>
              <td className="px-6 py-4">
                <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
              </td>
              <td className="px-6 py-4">
                <Badge status="confirm" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">20-05-2005</td>
            </tr>
            {isOpenOrderProduct === 0 && (
              <tr>
                <td className="pl-20" colSpan="6">
                  <div className="relative max-w-[1050px] overflow-hidden">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Product Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Imgae
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#ff5252]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="">1300</span>
                          </td>
                        </tr>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#ff5252]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
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

            <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
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
              <td className="px-6 py-4 ">
                <span className="!text-[#ff5252]">
                  htklhkjsdhjkdbjkgbcjkbxgbjbejb
                </span>
              </td>
              <td className="px-6 py-4">
                {" "}
                <span>htklhkjsdhjkdbjkgbcj</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span>Pramod kumar</span>
              </td>
              <td className="px-6 py-4">
                <span>+91 875541982</span>
              </td>
              <td className="px-6 py-4">
                <span className="block w-[400px]">
                  H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                  medical ph. +91-55558454
                </span>
              </td>
              <td className="px-6 py-4">110053</td>
              <td className="px-6 py-4">3800</td>
              <td className="px-6 py-4">pramodjnv985@gmail.com</td>
              <td className="px-6 py-4">
                <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
              </td>
              <td className="px-6 py-4">
                <Badge status="confirm" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">20-05-2005</td>
            </tr>
            {isOpenOrderProduct === 3 && (
              <tr>
                <td className="pl-20" colSpan="6">
                  <div className="relative max-w-[1050px] overflow-hidden">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Product Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Imgae
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#ff5252]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="">1300</span>
                          </td>
                        </tr>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#ff5252]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
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

            <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
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
              <td className="px-6 py-4 ">
                <span className="!text-[#ff5252]">
                  htklhkjsdhjkdbjkgbcjkbxgbjbejb
                </span>
              </td>
              <td className="px-6 py-4">
                {" "}
                <span>htklhkjsdhjkdbjkgbcj</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span>Pramod kumar</span>
              </td>
              <td className="px-6 py-4">
                <span>+91 875541982</span>
              </td>
              <td className="px-6 py-4">
                <span className="block w-[400px]">
                  H No 22 street No 6 Adarsh Mohalla Naujpur Delhi near Shivam
                  medical ph. +91-55558454
                </span>
              </td>
              <td className="px-6 py-4">110053</td>
              <td className="px-6 py-4">3800</td>
              <td className="px-6 py-4">pramodjnv985@gmail.com</td>
              <td className="px-6 py-4">
                <span className="text-[#ff5252]">hgisdh7khsdjcy78000</span>
              </td>
              <td className="px-6 py-4">
                <Badge status="confirm" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">20-05-2005</td>
            </tr>
            {isOpenOrderProduct === 2 && (
              <tr>
                <td className="pl-20" colSpan="6">
                  <div className="relative max-w-[1050px] overflow-hidden">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Product Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Imgae
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#3872fa]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="">1300</span>
                          </td>
                        </tr>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4 ">
                            <span className="!text-[#ff5252]">
                              htklhkjsdhjkdbjkgbc
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="whitespace-nowrap">
                              Banarsi Sree in Cultral India
                            </span>
                          </td>
                          <td className="px-6 py-4 ">
                            <img
                              src="https://www.jiomart.com/images/product/original/rvkicpn701/ocean-saree-latest-desighn-banarsi-silk-satin-full-work-embroidery-with-blouse-piece-saree-product-images-rvkicpn701-0-202407261431.jpg?im=Resize=(600,750)"
                              alt=""
                              className="w-[40px] h-[40px] rounded-md object-cover"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span>3</span>
                          </td>
                          <td className="px-6 py-4">
                            <span>1300</span>
                          </td>
                          <td className="px-6 py-4">
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
  );
};

export default Orders;
