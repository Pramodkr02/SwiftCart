import React, { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button, MenuItem, Select } from "@mui/material";
import { postData, fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const AddSubCategory = () => {
  const [parentId, setParentId] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
     fetchDataFromApi("/api/category").then((res) => {
         if(res?.success) {
             setCategories(res.data);
         }
     })
  }, []);

  const handleChangeCategory = (event) => {
    setParentId(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !parentId) {
        context.openAlertBox("error", "Please fill all fields");
        return;
    }

    setIsLoading(true);
    // Subcategories are just categories with a parentId
    const formData = {
        name: name,
        parentId: parentId
    };

    const res = await postData("/api/category/create", formData);

    if (res?.success) {
      context.openAlertBox("success", "Subcategory created successfully");
      context.setIsOpenFullScreenPanel({ open: false });
    } else {
      context.openAlertBox("error", res?.message || "Error creating subcategory");
    }
    setIsLoading(false);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form onSubmit={handleSubmit} className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="flex gap-4 mb-6">
            <div className="col w-full">
              <h4 className="font-[600] text-[14px] mb-2">
                Select Parent Category
              </h4>
              <Select
                value={parentId}
                onChange={handleChangeCategory}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-full h-[40px] bg-white"
                size="small"
              >
                <MenuItem value="">
                  <em className="text-gray-400">Select Category</em>
                </MenuItem>
                {categories.map(cat => (
                     <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
          
           <div className="col mb-4">
            <h3 className="text-[14px] font-[500] mb-2">Subcategory Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>

        </div>

        <br />
        <Button 
            type="submit" 
            className="btn-blue btn-lg flex gap-2 !bg-blue-600 !text-white"
            disabled={isLoading}
        >
             {isLoading ? "Publishing..." : (
                <>
                <FaCloudUploadAlt className="text-[25px] text-white" />
                <span>Publish and View</span>
                </>
            )}
        </Button>
      </form>
    </section>
  );
};

export default AddSubCategory;
