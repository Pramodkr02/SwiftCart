import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";

const SideCart = ({ openCartPanel, toggleCartPanel }) => {
  return (
    <div className="realtive">
      <Drawer
        open={openCartPanel}
        onClose={toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] ">
          <h4>Shpping Cart (02)</h4>
          <IoCloseSharp
            className="text-[22px] cursor-pointer link transition-all"
            onClick={toggleCartPanel(false)}
          />
        </div>

        <div className="scroll w-full max-h-[350px] overflow-y-scroll py-3 px-4 overflow-x-hidden mb-3">
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h4 className="text-[16px] font-[500]">
                <a href="/product/454964">
                  A-Line Kurti with Sharare & Dupatta
                </a>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h4 className="text-[16px] font-[500]">
                <a href="/product/454964">
                  A-Line Kurti with Sharare & Dupatta
                </a>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h4 className="text-[16px] font-[500]">
                <a href="/product/454964">
                  A-Line Kurti with Sharare & Dupatta
                </a>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h4 className="text-[16px] font-[500]">
                <a href="/product/454964">
                  A-Line Kurti with Sharare & Dupatta
                </a>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h4 className="text-[16px] font-[500]">
                <a href="/product/454964">
                  A-Line Kurti with Sharare & Dupatta
                </a>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
        </div>
        <div className="info absolute bottom-0 w-full flex flex-col items-center justify-between">
          <div className="bottomInfo w-full border-t border-[rgba(0,0,0,0.1)] flex flex-col items-center justify-between py-3 px-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">1 item</span>
              <span className="text-primary font-bold">$86.24</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">Shipping</span>
              <span className="text-primary font-bold">$8</span>
            </div>
          </div>

          <div className="bottomInfo w-full border-t border-[rgba(0,0,0,0.1)] flex flex-col items-center justify-between py-3 px-4 ">
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]"> Total(tax excl.)</span>
              <span className="text-primary font-bold">$86.24</span>
            </div>

            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">Total(tax incl.)</span>
              <span className="text-primary font-bold">$8</span>
            </div>

            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">Taxes:</span>
              <span className="text-primary font-bold">$86.2</span>
            </div>

            <div className="flex items-center justify-between w-full gap-5 mt-4">
              <Button className="btn-org btn-lg w-[50%]">View cart</Button>
              <Button className="btn-org btn-border btn-lg w-[50%]">
                checkOut
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideCart;
