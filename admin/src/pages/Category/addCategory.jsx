import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { postData } from "../../utils/api"; // Changed from postDataImage to postData since no image
import { MyContext } from "../../App";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
        context.openAlertBox("error", "Please add category name");
        return;
    }
  
    setIsLoading(true);
    
    // Changing from FormData to JSON since no image
    const data = {
        name: name
    };

    const res = await postData("/api/category/create", data);

    if (res?.success) {
      context.openAlertBox("success", "Category created successfully");
      context.setIsOpenFullScreenPanel({ open: false });
    } else {
      context.openAlertBox("error", res?.message || "Error creating category");
    }
    setIsLoading(false);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form onSubmit={handleSubmit} className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="col mb-4">
            <h3 className="text-[14px] font-[500] mb-2">Category Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <hr />
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

export default AddCategory;
