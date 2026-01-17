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
                src="https://cmsimages.shoppersstop.com/EOSS_preview_sale_web_5860fecc3d/EOSS_preview_sale_web_5860fecc3d.png"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/PB_Homepage_web_9c44e9b6c2/PB_Homepage_web_9c44e9b6c2.png"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/2_EOSS_SS_KV_Dec_2025_Web_5b39d9f8d2/2_EOSS_SS_KV_Dec_2025_Web_5b39d9f8d2.jpg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Mens_wear001_web_3134bfca3b/Mens_wear001_web_3134bfca3b.png"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Footwear_web_70d917c2f4/Footwear_web_70d917c2f4.png"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Homestop_web_215ce8f42f/Homestop_web_215ce8f42f.png"
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
