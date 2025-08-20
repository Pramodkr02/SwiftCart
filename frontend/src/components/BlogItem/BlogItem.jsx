import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <>
      <div className="blogItem group">
        <div className="imgWrapper w-full overflow-hidden rounded-md relative">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/8/1105_813/b-blog-6.jpg"
            alt="blog image"
            className="w-full transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
          />

          <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
            <IoTimeOutline className="text-[16px]" /> 5 APRIL, 2023
          </span>
        </div>

        <div className="info py-4 ">
          <h2 className="text-[15px] font-[600] text-black ">
            Nullam ullacorper ornare molesite
          </h2>
          <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor...
          </p>

          <Link className="link font-[500] text-[14px] flex items-center gap-1 text-black hover:!underline">
            Read More
            <IoIosArrowForward className="text-[16px] " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
