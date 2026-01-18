import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { postDataImage } from "../../utils/api";
import { MyContext } from "../../App";

const AddHomeSlide = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const context = useContext(MyContext);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImgPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setImgPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      context.openAlertBox("error", "Please select an image");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    const res = await postDataImage("/api/homeSlider/create", formData);

    if (res?.success) {
      context.openAlertBox("success", "Slide added successfully");
      context.setIsOpenFullScreenPanel({ open: false }); // Close panel
    } else {
      context.openAlertBox("error", res?.message || "Error adding slide");
    }
    setIsLoading(false);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form onSubmit={handleSubmit} className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-1 gap-2 mb-2">
            <h4 className="text-[16px] font-[600] mb-2">Upload Image</h4>
            
            {!imgPreview ? (
                 <div className="relative border-dashed border-2 border-gray-300 rounded-md p-10 flex flex-col items-center justify-center bg-white hover:bg-gray-50 cursor-pointer">
                    <FaCloudUploadAlt className="text-[50px] text-gray-400 mb-3" />
                    <span className="text-gray-500">Click to Upload Image</span>
                    <input 
                        type="file" 
                        accept="image/*"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageChange}
                    />
                 </div>
            ) : (
                <div className="uploadBoxWrapper relative w-full h-[300px]">
                    <span 
                        className="absolute w-[30px] h-[30px] rounded-full overflow-hidden bg-red-700 -top-[10px] -right-[10px] flex items-center justify-center z-50 cursor-pointer shadow-md"
                        onClick={handleRemoveImage}
                    >
                        <IoMdClose className="text-white text-[20px]" />
                    </span>
                    <div className="uploadBox rounded-md overflow-hidden border border-[rgba(0,0,0,0.2)] w-full h-full bg-gray-100 flex justify-center items-center">
                         <LazyLoadImage
                            className="w-full h-full object-contain"
                            effect="blur"
                            alt={"preview"}
                            src={imgPreview}
                            />
                    </div>
                </div>
            )}
            
            <br />
          </div>
        </div>

        <hr />
        <br />
        <Button 
            type="submit" 
            className="btn-blue btn-lg flex gap-2 !bg-blue-600 !text-white"
            disabled={isLoading}
        >
          {isLoading ? (
              <span>Uploading...</span>
          ) : (
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

export default AddHomeSlide;
