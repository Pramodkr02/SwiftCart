import React from "react";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";

const AddHomeSlide = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form action="" className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-7 gap-2 mb-2">
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                <IoMdClose className="text-white text-[17px]" />
              </span>
              <div className="uploadBox rounded-md  overflow-hidden border border-[rgba(0,0,0,0.2)] h-[170px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex  justify-center items-center relative">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  alt={"image"}
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/w/z/7/28-esr2-rishi-traders-original-imahex6rke5rrvxc.jpeg?q=70&crop=false"
                />
              </div>
            </div>

            <UploadBox multiple={true} />
            <br />
          </div>
        </div>

        <hr />
        <br />
        <Button type="submit" className="btn-blue btn-lg flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          <span>Publish and View</span>
        </Button>
      </form>
    </section>
  );
};

export default AddHomeSlide;
