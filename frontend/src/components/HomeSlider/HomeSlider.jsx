import React from "react";
import "./HomeSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSlider = (props) => {
  return (
    <div className="homeSlider w-[96%] m-auto">
      <div className="conatiner">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={props.data?.length > 1}
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
          {props.data?.length !== 0 ? (
            props.data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item rounded-[20px] overflow-hidden w-full">
                    <img
                      src={item.image}
                      alt="Slider"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            // Fallback skeleton or default logic if needed, but requirements said ONLY from server.
            // However, usually we might want to show nothing or a loading state. 
            // Current code had hardcoded slides. I will keep it empty if no data.
            <></>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
