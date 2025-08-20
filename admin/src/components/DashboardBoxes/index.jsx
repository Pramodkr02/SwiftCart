import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrPieChart } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { TbBrandProducthunt } from "react-icons/tb";

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box cursor-pointer hover:bg-[#f1f1f1] p-5 rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 bg-white">
            <AiTwotoneGift className="text-[40px] text-[#3872fa]" />
            <div className="info w-[70%]">
              <h4>New Orders</h4>
              <b>1,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box cursor-pointer hover:bg-[#f1f1f1] p-5 rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 bg-white">
            <GrPieChart className="text-[40px] text-[#10b981]" />
            <div className="info w-[70%]">
              <h4>Sales</h4>
              <b>$21,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box cursor-pointer hover:bg-[#f1f1f1] p-5 rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 bg-white">
            <BsBank className="text-[40px]  text-[#7928ca]" />
            <div className="info w-[70%]">
              <h4>Revenue</h4>
              <b>1,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box cursor-pointer hover:bg-[#f1f1f1] p-5 rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 bg-white">
            <TbBrandProducthunt className="text-[40px]  text-[#7928ca]" />
            <div className="info w-[70%]">
              <h4>Total Products</h4>
              <b>1,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
