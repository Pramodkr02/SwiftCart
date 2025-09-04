import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="w-full h-auto bg-[#f1f1f1] relative rounded-md overflow-hidden">
      <IoSearch className="absolute top-3 left-2 text-[18px] text-[#2c2c2ca9] z-50 pointer-events-none" />
      <input
        type="text"
        className="w-full h-[40px] bg-[#f1f1f1] p-2 pl-8 focus:outline-none border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
        placeholder="Search here..."
      />
    </div>
  );
};

export default SearchBox;
