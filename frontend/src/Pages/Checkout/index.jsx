import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";

const CheckoutPage = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card w-full bg-white shadow-md p-5 rounded-md">
            <h1>Billing Details</h1>

            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>
              <div className="flex items-center  pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="House Number & Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center  pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Apartment, suite, unit, etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Town/City"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State/Country"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">Postcode / ZIP *</h6>
              <div className="flex items-center  pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="number"
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-3">Your Order</h2>

            <div className="flex items-center py-3  justify-between border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Sub Total</span>
            </div>
            <div className="scroll mt-3 max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvqpt5j07s/hustiger-women-rayon-printed-anarkali-kurti-printed-gown-yellow-xxl-product-images-rvqpt5j07s-0-202411041631.jpg?im=Resize=(330,410)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$2,222.00</span>
              </div>
            </div>

            <Button className="!w-full !mt-4 btn-org btn-lg !gap-2">
              <IoBagCheckSharp className="text-[20px]" />
              <span>Checkout</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
