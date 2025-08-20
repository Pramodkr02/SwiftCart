import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "@mui/material";

const HomeSliderV2 = () => {
  return (
    <>
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="homeSliderV2"
        >
          <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
                className="w-full"
              />

              <div className="info absolute top-0 right-[-100%] w-[50%] z-50 p-[25px] h-[100%] flex items-center justify-center flex-col transition-all duration-700 opacity-0">
                <h4 className="text-[20px] font-[500] text-left w-full mb-5 relative opacity-0 right-[-100%]">
                  Big Savings Days Sale
                </h4>
                <h2 className="text-[36px] font-[700] relative opacity-0 right-[-100%]">
                  Women solid Round Green T-Shirt
                </h2>
                <h3 className="flex items-center text-[20px] font-[500] text-left w-full mb-3 mt-3 gap-3 relative opacity-0 right-[-100%]">
                  Starting At Only{" "}
                  <span className="text-primary text-[22px] font-[700] ">
                    $124.00
                  </span>
                </h3>
                <div className="w-full shopNow relative opacity-0 bottom-[-100%]">
                  <Button className="btn-org flex ">SHOP NOW</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg"
                className="w-full"
              />

              <div className="info absolute top-0 right-[-100%] w-[50%] z-50 p-[25px] h-[100%] flex items-center justify-center flex-col transition-all duration-700 opacity-0">
                <h4 className="text-[20px] font-[500] text-left w-full mb-5 relative opacity-0 right-[-100%]">
                  Big Savings Days Sale
                </h4>
                <h2 className="text-[36px] font-[700] relative opacity-0 right-[-100%]">
                  Women solid Round Green T-Shirt
                </h2>
                <h3 className="flex items-center text-[20px] font-[500] text-left w-full mb-3 mt-3 gap-3 relative opacity-0 right-[-100%]">
                  Starting At Only{" "}
                  <span className="text-primary text-[22px] font-[700] ">
                    $124.00
                  </span>
                </h3>
                <div className="w-full shopNow relative opacity-0 bottom-[-100%]">
                  <Button className="btn-org flex ">SHOP NOW</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSliderV2;
