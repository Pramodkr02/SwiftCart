import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-[#bcdeefaf] ">
      <span
        className={`flex items-center w-[${
          props.value
        }%]  h-[8px] bg-blue-500 ${
          props.type === "success" && "bg-green-600"
        } ${props.type === "error" && "bg-green-600"} ${
          props.type === "warning" && "bg-orange-400"
        }`}
      ></span>
    </div>
  );
};

export default ProgressBar;
