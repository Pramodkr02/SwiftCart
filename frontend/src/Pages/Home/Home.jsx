import React, { useRef, useState, useEffect } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { MdLocalShipping } from "react-icons/md";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";
import HomeSliderV2 from "../../components/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [homeSlides, setHomeSlides] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/homeSlider/public").then((res) => {
      if (res?.success) {
        setHomeSlides(res.data);
      }
    });

    fetchDataFromApi("/api/product").then((res) => {
      if (res && res.products) {
        setProducts(res.products);
      }
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider data={homeSlides} />
      {/* <HomeCatSlider /> */}

      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[55%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="wellness" />
                <Tab label="Jwellery" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} data={products} />
        </div>
      </section>

      <section className="container py-6">
        <div className="w-full flex items-center justify-center">
          <div className="part1 w-[70%]">
            <HomeSliderV2 />
          </div>

          <div className="part2 w-[30%] flex items-center justify-between">
            <BannerBoxV2 />
          </div>
        </div>
      </section>

      <section className="py-12 pt-2 bg-white ">
        <div className="container">
          <div className="freeShipping py-4 w-[80%] m-auto p-4 mb-8 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <MdLocalShipping className="text-[50px]" />
              <span className="text-[20px] uppercase font-[600]">
                Free Shipping{" "}
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[600]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <p className="font-bold text-[30px]">- Only $200</p>
          </div>

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-[600]">Letest Products</h3>
          <ProductSlider items={6} data={products} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-[600]">Feature Products</h3>
          <ProductSlider
            items={6}
            data={products.filter((p) => p.isFeatured)}
          />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection ">
        <div className="container">
          <h3 className="text-[20px] font-[600] mb-4">From The Blog</h3>
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
