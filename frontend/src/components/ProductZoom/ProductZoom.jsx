import React, { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const ProductZoom = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSliderIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSml.current.swiper.slideTo(index);
  };

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
          <SwiperSlide>
            <div className="item cursor-pointer group" onClick={() => goto(0)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goto(1)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-1-202410041348.jpg?im=Resize=(75,94)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goto(2)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-2-202410041348.jpg?im=Resize=(75,94)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goto(3)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-3-202410041348.jpg?im=Resize=(75,94)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goto(4)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goto(5)}>
              <img
                src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-1-202410041348.jpg?im=Resize=(75,94)"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-2-202410041348.jpg?im=Resize=(75,94)"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-3-202410041348.jpg?im=Resize=(75,94)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://www.jiomart.com/images/product/original/441809778004/gosriki-women-s-red-rayon-blend-anarkali-kurta-set-with-dupatta-product-images-441809778004-0-202410041348.jpg?im=Resize=(600,750)"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
