import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QuantityBox from "../../components/QuantityBox/QuantityBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const ProductDetail = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="link transition"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomConatiner w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-11 pl-10">
            <h1 className="text-[22px] font-[600] mb-2">
              Chikanrai Woven Kurta Self Design Kurta Self Design Bollywood Net
              Saree (Blue)
            </h1>
            <div className="items-center flex gap-5">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-85">
                  House of Chikankari
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (15)</span>
            </div>

            <div className="flex items-center mt-4 gap-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $58.00
              </span>
              <span className="price text-primary  text-[18px] font-[600]">
                $58.00
              </span>

              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <br />
            <p className="mt-3 pr-10 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size: </span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-4 mb-3">
              Free shipping (Est. delivery Time 2-3 days)
            </p>

            <div className="flex items-center gap-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QuantityBox />
              </div>
              <Button className="btn-org flex gap-2 !min-h-[41px]">
                <AiOutlineShoppingCart className="text-[20px]" />
                Add To Cart
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span>
                <Link className="flex link items-center gap-2 text-[15px] font-[500] cursor-pointer capitalize">
                  <FaRegHeart className="text-[18px]" />
                  Add to wishlist
                </Link>
              </span>
              <span>
                <Link className="flex link items-center gap-2 text-[15px] font-[500] cursor-pointer capitalize">
                  <BiGitCompare className="text-[18px]" />
                  compare
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="container !mt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              onClick={() => setActiveTab(0)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
            >
              Discription
            </span>
            <span
              onClick={() => setActiveTab(1)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
            >
              Product Details
            </span>
            <span
              onClick={() => setActiveTab(2)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
            >
              Reviews (52)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 p-5 rounded-md">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>

              <h4>Light weight design</h4>

              <p>
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
              </p>
              <h4>Freee shipping & return</h4>

              <p>
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>

              <h4>MOney back guarantee</h4>

              <p>
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>

              <h4>Online support</h4>

              <p>
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 p-5 rounded-md">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Google Pixel Phone
                      </th>
                      <td class="px-6 py-4">Gray</td>
                      <td class="px-6 py-4">Phone</td>
                      <td class="px-6 py-4">$799</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple Watch 5
                      </th>
                      <td class="px-6 py-4">Red</td>
                      <td class="px-6 py-4">Wearables</td>
                      <td class="px-6 py-4">$999</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 p-5 rounded-md">
              <div className="w-full productReviewContainer">
                <h2 className="text-[18px]">Customer question & answers</h2>

                <div className="reviewScroll w-full  max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-4">
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvMZo1QSlAqX5ev0feXSZX-6zVLoPYffzQ&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Pramod Kumar</h4>
                        <h5 className="text-[16px]">2024-06-22</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvMZo1QSlAqX5ev0feXSZX-6zVLoPYffzQ&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Pramod Kumar</h4>
                        <h5 className="text-[16px]">2024-06-22</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvMZo1QSlAqX5ev0feXSZX-6zVLoPYffzQ&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Pramod Kumar</h4>
                        <h5 className="text-[16px]">2024-06-22</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvMZo1QSlAqX5ev0feXSZX-6zVLoPYffzQ&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Pramod Kumar</h4>
                        <h5 className="text-[16px]">2024-06-22</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvMZo1QSlAqX5ev0feXSZX-6zVLoPYffzQ&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Pramod Kumar</h4>
                        <h5 className="text-[16px]">2024-06-22</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <br />

                <div className="reviewFrom bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form action="" className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      multiline
                      rows={4}
                      className="w-full mb-5"
                    />
                    <br />
                    <br />
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />

                    <div className="flex items-center mt-5">
                      <Button type="submit" className="btn-org">
                        {" "}
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container !pt-7">
          <h2 className="text-[20px]">Related Product</h2>
          <ProductSlider items={6} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ProductDetail;
