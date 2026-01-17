import React, { useContext, useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "../CategoryPanel/CategoryPanel";
import { MyContext } from "../../MyContext";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const context = useContext(MyContext);

  const [isOpneCatPanel, setIsOpencatPanel] = useState(false);

  const opneCategoryPanel = () => {
    setIsOpencatPanel(true);
  };

  useEffect(() => {
    const handleResize = () => {
      context.setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-start gap-8">
          <div className="col_1 w-[17%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={opneCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px] font-bold" />
              shop by categories
              <FaAngleDown className="text-[16px] ml-auto" />
            </Button>
          </div>

          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/fashion"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/product-listing/electronics" className="link transition text-[16px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/bags"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/footwear"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footware
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/groceries"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/beauty"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing/jewellery"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jwellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[18%] text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
            <MdOutlineRocketLaunch className="text-[18px]" />
            Free International Delivery
          </div>
        </div>
      </nav>

      {/* categories Panel */}
      <CategoryPanel
        isOpneCatPanel={isOpneCatPanel}
        setIsOpencatPanel={setIsOpencatPanel}
      />

      {/* ✅ Fixed Bottom Nav (only on mobile) */}
      {context.windowWidth < 992 && <MobileNav />}
    </>
  );
};

export default Navigation;
