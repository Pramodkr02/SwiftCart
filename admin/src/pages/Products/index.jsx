import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

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
import { deleteData, fetchDataFromApi } from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Products = () => {
    const [categoryFilterVal, setCategoryFilterVal] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const context = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProducts();
    }, [page]);

    const fetchProducts = () => {
        setLoading(true);
        // Assuming default pagination/filtering for now. Add query params strictly if needed.
        fetchDataFromApi(`/api/product?page=${page}`).then((res) => {
            if(res && res.products) {
                 setProducts(res.products);
                 setTotalPages(res.totalPages);
            }
            setLoading(false);
        });
    }

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
        // TODO: Implement backend filtering by category if desired
    };
    
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const deleteProduct = async (id) => {
        setLoading(true);
        const res = await deleteData(`/api/product/${id}`);
        if(res.success) {
            context.openAlertBox("success", "Product Deleted Successfully!");
            fetchProducts();
        } else {
             context.openAlertBox("error", res.message || "Something went wrong!");
             setLoading(false);
        }
    }

  return (
    <>
      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Products </h2>
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
                  model: "Add Product",
                })
              }
            >
              <IoMdAdd className="text-[20px] font-[500]" />
              Add Product
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
              {/* Needs Categories List here if we want to filter */}
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
                <th scope="col" className="pl-6 py-3">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="px-0 mr-0 mx-0 pr-0 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  category
                </th>
                <th scope="col" className="px-6 py-3">
                  sub category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && products.map((item, index) => (
                  <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700">
                    <th scope="row" className="pl-6 py-4 font-medium text-gray-700 whitespace-nowrap">
                      <div className="w-[60px]">
                        <Checkbox {...label} size="small" />
                      </div>
                    </th>
                    <td className="px-0 mr-0 py-4 pr-0 w-[300px]">
                      <div className="flex items-center gap-4 w-[300px]">
                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                          <Link to={`/product/${item._id}`}>
                            <LazyLoadImage
                                effect="blur"
                                src={item.images[0]} // Show first image
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all"
                            />
                          </Link>
                        </div>
                        <div className="info w-[75%]">
                          <h3 className="font-[600] text-[12px] leading-4  flex hover:text-primary ">
                            <Link to={`/product/${item._id}`}>
                              {item.name?.substr(0, 40) + '...'}
                            </Link>
                          </h3>
                          <span className="text-[12px]">{item.brand}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-[500]">{item.catName}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-[500]">{item.subCatName}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <span className="oldPrice  leading-3 line-through text-gray-500 text-[14px] font-[500]">
                          ${item.oldPrice}
                        </span>
                        <span className="price text-primary text-[14px] font-[600]">
                          ${item.price}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 ">
                      <p className="text-[14px] w-[100px]">
                        <span className="font-[600]">{item.countInStock}</span>
                      </p>
                    </td>

                    <td className="px-6 py-4">
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
                          <Button 
                            className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)]"
                            onClick={() => deleteProduct(item._id)}
                          >
                            <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && <div className="p-5 text-center">No Products Found</div>}
        </div>

        <div className="flex items-center justify-end pb-4 bt-4 px-4">
          <Pagination count={totalPages} color="primary" page={page} onChange={handleChangePage} />
        </div>
      </div>
    </>
  );
};

export default Products;
