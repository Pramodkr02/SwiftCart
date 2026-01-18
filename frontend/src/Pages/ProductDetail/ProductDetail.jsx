import React, { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QuantityBox from "../../components/QuantityBox/QuantityBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";
import { BsBasket3 } from "react-icons/bs";
import TextField from "@mui/material/TextField";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { fetchDataFromApi } from "../../utils/api";

const ProductDetail = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if(id) {
        fetchDataFromApi(`/api/product/${id}`).then((res) => {
            if(res) {
                 setProductDetails(res);
                 // Fetch related products if catId exists (backend might differ, assuming accessing via product model structure)
                 // Note: 'res' is the product object directly or inside data? 
                 // Backend: getProductById returns the product document directly or {success, data}?
                 // Checking backend: res.status(200).send(product); -> It sends the product object directly.
                 
                 if(res.category || res.catId) {
                     // Assuming we can filter by catId
                     fetchDataFromApi(`/api/product?catId=${res.category?._id || res.category}`).then(res2 => {
                         if(res2 && res2.products) {
                             // Filter out current product
                            const related = res2.products.filter(item => item._id !== id);
                            setRelatedProducts(related);
                         }
                     })
                 }
            }
        })
    }
  }, [id]);


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
              href="/product-listing"
              className="link transition"
            >
              Request
            </Link>
            <span className="text-gray-500">{productDetails?.name}</span>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomConatiner w-[40%]">
             {productDetails?.images && <ProductZoom images={productDetails.images} />}
          </div>

          <div className="productContent w-[60%] pr-11 pl-10">
            <h1 className="text-[22px] font-[600] mb-2">
              {productDetails?.name}
            </h1>
            <div className="items-center flex gap-5">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-85">
                  {productDetails?.brand}
                </span>
              </span>
              <Rating
                name="size-small"
                value={productDetails?.rating || 4.5}
                precision={0.5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (15)</span>
            </div>

            <div className="flex items-center mt-4 gap-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                ${productDetails?.oldPrice}
              </span>
              <span className="price text-primary  text-[18px] font-[600]">
                ${productDetails?.price}
              </span>

              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className={`text-[14px] font-bold ${productDetails?.countInStock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {productDetails?.countInStock > 0 ? `${productDetails?.countInStock} Items` : 'Out of Stock'}
                </span>
              </span>
            </div>
            <br />
            <p className="mt-3 pr-10 mb-5">
              {productDetails?.description?.substr(0, 300)}
            </p>

            {/* Size Selector - Dummy for now as DB doesn't have sizes yet strictly defined */}
            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size: </span>
              <div className="flex items-center gap-1 actions">
                {["S", "M", "L", "XL"].map((size, index) => (
                    <Button
                    key={index}
                    className={`${
                        productActionIndex === index ? "!bg-primary !text-white" : ""
                    } `}
                    onClick={() => setProductActionIndex(index)}
                    >
                    {size}
                    </Button>
                ))}
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
              <Button className="btn-org flex gap-2 !min-h-[41px]">
                <BsBasket3 className="text-[18px] mb-1" />
                Buy Now
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
              Description
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
                {productDetails?.description}
              </p>
            </div>
          )}

          {activeTab === 1 && (
             <div className="shadow-md w-full py-5 px-8 p-5 rounded-md">
                 <p>Brand: {productDetails?.brand}</p>
                 <p>Category: {productDetails?.catName}</p>
                 <p>Sub Category: {productDetails?.subCatName}</p>
             </div>
          )}

          {/* ... Reviews Tab intentionally left static for now ... */}
          {activeTab === 2 && (
             <div className="shadow-md w-[80%] py-5 px-8 p-5 rounded-md">
                 <h2 className="text-[18px]">Customer Reviews</h2>
                 <p className="mt-5">No reviews yet.</p>
             </div>
          )}
        </div>

        <div className="container !pt-7">
          <h2 className="text-[20px]">Related Product</h2>
          <ProductSlider items={6} data={relatedProducts} />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
