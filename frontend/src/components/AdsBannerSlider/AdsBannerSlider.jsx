import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";
const AdsBannerSlider = (props) => {
  return (
    <>
      <div className="py-5 w-full">
        <Swiper
          navigation={true}
          slidesPerView={props.items}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="smlBtn"
        >
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
              }
              link={"/"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;
