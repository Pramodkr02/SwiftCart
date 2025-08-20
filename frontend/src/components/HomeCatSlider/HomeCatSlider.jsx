import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function HomeCatSlider() {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          navigation={true}
          slidesPerView={8}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  className="w-[62px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCatSlider;
