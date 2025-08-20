import React from "react";
import "./HomeSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <div className="homeSlider w-[96%] m-auto">
      <div className="conatiner">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1735537779_632x160__copy.jpg?im=Resize=(768,200)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
