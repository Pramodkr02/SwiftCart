import React from "react";
import { FaRegImages } from "react-icons/fa6";

const UploadBox = (props) => {
  return (
    <div className="flex-col uploadBox p-3 rounded-md  overflow-hidden border-dashed border border-[rgba(0,0,0,0.2)] h-[170px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex  justify-center items-center relative">
      <FaRegImages className="text-[40px] opacity-35 pointer-events-none mr-1" />
      <h4 className="text-[14px] pointer-events-none font-bold opacity-35">
        Image Upload
      </h4>

      <input
        type="file"
        className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
        multiple={props?.multiple !== undefined ? props.multiple : false}
        onChange={props.onChange}
      />
    </div>
  );
};

export default UploadBox;
