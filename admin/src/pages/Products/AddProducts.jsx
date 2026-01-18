import React, { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Rating } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { fetchDataFromApi, postData, postDataImage } from "../../utils/api";
import { MyContext } from "../../App";

const AddProducts = () => {
    const [productCat, setProductCat] = useState("");
    const [productSubCat, setProductSubCat] = useState("");
    const [productFeatured, setProductFeatured] = useState(false);
    const [productRams, setProductRams] = useState([]);
    const [productWeight, setProductWeight] = useState([]);
    const [productSize, setProductSize] = useState([]);
    const [productRating, setProductRating] = useState(2);
    
    // Data States
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    
    // Form States
    const [name, setName] = useState("");
    const [discription, setDiscription] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [discount, setDiscount] = useState("");

    // Image States
    const [previews, setPreviews] = useState([]);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const context = useContext(MyContext);

    useEffect(() => {
        fetchDataFromApi("/api/category").then((res) => {
            if (res.data) {
                setCategories(res.data);
            }
        });
    }, []);

    const handleChangeProductCat = (event) => {
        const selectedId = event.target.value;
        setProductCat(selectedId);
        setProductSubCat(""); // Reset subcat
        
        // Filter subcategories
        const selectedCategory = categories.find(cat => cat._id === selectedId);
        if(selectedCategory && selectedCategory.children) {
            setSubCategories(selectedCategory.children);
        } else {
            setSubCategories([]);
        }
    };

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };
    
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
        
        const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
        setPreviews(prev => [...prev, ...newPreviews]);
    };

    const removeImage = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
        setPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation
        if(!name || !productCat || !productSubCat || !price) {
             context.openAlertBox("error", "Please fill all required fields");
             setLoading(false);
             return;
        }

        // 1. Upload Images
        let imageUrls = [];
        if(files.length > 0) {
             const formData = new FormData();
             files.forEach(file => formData.append("images", file));
             
             try {
                const imgRes = await postDataImage("/api/product/uploadImages", formData);
                if(imgRes && imgRes.images) {
                    imageUrls = imgRes.images;
                }
             } catch(err) {
                 console.error("Image upload failed", err);
                 context.openAlertBox("error", "Image upload failed");
                 setLoading(false);
                 return;
             }
        }

        // 2. Prepare Product Data
        const selectedCat = categories.find(c => c._id === productCat);
        const selectedSubCat = subCategories.find(s => s._id === productSubCat);

        const productData = {
            name,
            discription,
            images: imageUrls,
            brand,
            price,
            oldPrice,
            catId: productCat,
            catName: selectedCat?.name,
            subCatId: productSubCat,
            subCatName: selectedSubCat?.name,
            countInStock,
            rating: productRating,
            isFeatured: productFeatured,
            discount,
            productRam: productRams, // TODO: Add logic for multiple values if needed
            size: productSize,       // TODO: Add logic for multiple values
            productWeight: productWeight
        };

        // 3. Create Product
        const res = await postData("/api/product/create", productData);
        if(res?.success) {
            context.openAlertBox("success", "Product Created Successfully!");
            context.setIsOpenFullScreenPanel({ open: false, model: "" });
            // Ideally trigger refresh or update list
        } else {
            context.openAlertBox("error", res?.message || "Failed to create product");
        }
        setLoading(false);
    };

  return (
    <section className="p-5 bg-gray-50">
      <form onSubmit={handleSubmit} className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-3">Product Name</h3>
              <input
                type="text"
                className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Description
                </h3>
                <textarea 
                    className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm" 
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                />
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
                  <MenuItem value="">None</MenuItem>
                  {categories.map(cat => (
                      <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                  ))}
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
                  disabled={!productCat}
                  onChange={handleChangeProductSubCat}
                >
                  <MenuItem value="">None</MenuItem>
                   {subCategories.map(sub => (
                      <MenuItem key={sub._id} value={sub._id}>{sub.name}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Price</h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Old Price
                </h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value)}
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
                  onChange={(e) => setProductFeatured(e.target.value)}
                >
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Stock</h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Brand</h3>
                <input
                  type="text"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">
                  Product Discount
                </h3>
                <input
                  type="number"
                  className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
               {/* 
                  TODO: Implement Multi-Select for RAM, Weight, Size if needed 
                  For now kept simple or placeholders 
               */}
               <div className="col">
                <h3 className="text-[14px] font-[500] mb-3">Product Rating</h3>
                <Rating
                  name="product-rating"
                  value={Number(productRating)}
                  onChange={(e, newValue) => setProductRating(newValue)}
                  defaultValue={2}
                  precision={0.5}
                />
              </div>
            </div>
          </div>

          <div className="col w-full p-5 px-0">
            <h3 className="text-[18px] font-[700] mb-3">Media & Images</h3>

            <div className="grid grid-cols-7 gap-2">
              {previews.map((src, index) => (
                  <div key={index} className="uploadBoxWrraper relative">
                    <span 
                        className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"
                        onClick={() => removeImage(index)}
                    >
                      <IoMdClose className="text-white text-[17px]" />
                    </span>
                    <div className="uploadBox rounded-md  overflow-hidden border border-[rgba(0,0,0,0.2)] h-[170px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex  justify-center items-center relative">
                      <LazyLoadImage
                        className="w-full h-full object-cover"
                        effect="blur"
                        alt={"image"}
                        src={src}
                      />
                    </div>
                  </div>
              ))}
              
              <UploadBox multiple={true} onChange={handleFileChange} />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <Button type="submit" disabled={loading} className="btn-blue btn-lg flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          <span>{loading ? "Publishing..." : "Publish and View"}</span>
        </Button>
      </form>
    </section>
  );
};

export default AddProducts;
