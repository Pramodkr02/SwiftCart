import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = (props) => {
  return (
    <div className="productSlider py-3">
      <Swiper
        navigation={true}
        slidesPerView={props.items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: props.items || 5,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {props.data?.length > 0 && props.data.map((item) => (
             <SwiperSlide key={item._id}>
                <ProductItem item={item} />
             </SwiperSlide>
        ))}
        
        {(!props.data || props.data.length === 0) && (
            <p className="text-center w-full">Loading Products...</p>
        )}

      </Swiper>
    </div>
  );
};

export default ProductSlider;
