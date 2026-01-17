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

  // Data Structure for Navigation with Subcategories
  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Fashion",
      path: "/product-listing/fashion",
      subcategories: ["Men", "Women", "Kids", "Accessories"],
    },
    {
      label: "Electronics",
      path: "/product-listing/electronics",
      subcategories: [
        "Mobiles",
        "Laptops",
        "Audio & Headphones",
        "Smart Watches",
      ],
    },
    {
      label: "Bags",
      path: "/product-listing/bags",
      subcategories: ["Backpacks", "Handbags", "Travel Bags", "Wallets"],
    },
    {
      label: "Footwear",
      path: "/product-listing/footwear",
      subcategories: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sandals & Slippers",
      ],
    },
    {
      label: "Groceries",
      path: "/product-listing/groceries",
      subcategories: ["Fruits & Vegetables", "Staples", "Snacks", "Beverages"],
    },
    {
      label: "Beauty",
      path: "/product-listing/beauty",
      subcategories: ["Skincare", "Hair Care", "Grooming", "Fragrances"],
    },
    {
      label: "Jewellery",
      path: "/product-listing/jewellery",
      subcategories: ["Necklaces", "Rings", "Earrings", "Bracelets"],
    },
  ];

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
              {navItems.map((item, index) => (
                <li key={index} className="list-none nav-item">
                  <Link
                    to={item.path}
                    className="link transition text-[16px] font-[500]"
                  >
                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                      {item.label}
                      {item.label !== "Home" && item.subcategories && (
                         // Optional: Add a small arrow to indicate dropdown if desired, 
                         // but standard requirement didn't strictly ask for icon, just behavior.
                         // Keeping it clean as requested.
                         <span className="ml-1 opacity-50 text-[10px]"><FaAngleDown/></span>
                      )}
                    </Button>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subcategories && item.subcategories.length > 0 && (
                    <div className="dropdown-menu">
                      <ul className="p-0 m-0">
                        {item.subcategories.map((sub, idx) => (
                          <li key={idx} className="list-none">
                            <Link
                              to={`${item.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                              className="dropdown-item"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
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
