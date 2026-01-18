import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { fetchDataFromApi } from "../../utils/api";

function HomeCatSlider() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
        if(res?.success) {
            setCategories(res.data);
        }
    });
  }, []);

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
          breakpoints={{
             320: {
                 slidesPerView: 2,
                 spaceBetween: 10,
             },
             640: {
                 slidesPerView: 4,
                 spaceBetween: 10,
             },
             768: {
                 slidesPerView: 6,
                 spaceBetween: 15,
             },
             1024: {
                 slidesPerView: 8,
                 spaceBetween: 15,
             },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories?.length > 0 && categories.map((cat, index) => (
             <SwiperSlide key={index}>
                <Link to={`/product-listing/${cat._id}`}>
                <div className="item py-7 px-3 my-5 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <img
                    src={cat.images?.[0] || "https://Via.placeholder.com/62"} // Fallback image
                    className="w-[62px] h-[62px] object-contain transition-all"
                    alt={cat.name}
                    />
                    <h3 className="text-[13px] font-[500] mt-3 whitespace-nowrap overflow-hidden text-ellipsis w-full" title={cat.name}>{cat.name}</h3>
                </div>
                </Link>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
}


export default HomeCatSlider;
