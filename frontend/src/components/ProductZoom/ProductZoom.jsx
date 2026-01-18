import React, { useState, useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ProductZoom = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSliderIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSml.current.swiper.slideTo(index);
  };
  
  const images = props.images || [];

  return (
    <div className="flex gap-3">
      <div className="slider w-[15%] mt-[0px] rounded-md">
        <Swiper
          ref={zoomSliderSml}
          direction={"vertical"}
          navigation={true}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="zoomProductSliderThumbs !h-[500px] overflow-hidden rounded-md"
        >
          {images.map((img, index) => (
             <SwiperSlide key={index}>
                <div className={`item cursor-pointer group ${sliderIndex === index ? 'opacity-100' : 'opacity-70'}`} onClick={() => goto(index)}>
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden bg-white">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
        >
          {images.map((img, index) => (
              <SwiperSlide key={index}>
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={img}
                  className="w-full h-full object-contain" // Ensure image fits logic
                />
              </SwiperSlide>
          ))}
          
          {images.length === 0 && (
              <SwiperSlide>
                  <div className="flex items-center justify-center h-full w-full">
                      No Images Available
                  </div>
              </SwiperSlide>
          )} 
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
