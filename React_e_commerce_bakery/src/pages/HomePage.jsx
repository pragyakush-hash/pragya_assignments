import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  console.log(productData, "productdata");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/product/");
      const data = await response.json();
      setProductData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-15">
      <h1>Featured Categories</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div>
            {productData &&
              productData.slice(0, 3).map((item) => (
                <>
                  <SwiperSlide>
                    <div className="">
                      <Link to="">
                        <img
                          className="rounded-t-base"
                          src={item.image}
                          alt=""
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </div>
        </Swiper>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="">
            {productData &&
              productData.slice(9, 12).map((item) => (
                <>
                  <SwiperSlide>
                    <div className="mt-10 w-100 object-contain p-4">
                      <Link to="">
                        <img
                          className="rounded-t-base"
                          src={item.image}
                          alt=""
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </div>
        </Swiper>
      </div>

      <div>
        <div className="text-4xl text-amber-700 text-center font-bold mt-10">
          <h1>Featured Categories</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="">
            {productData &&
              productData.slice(3, 12).map((item) => (
                <>
                  <SwiperSlide>
                    <div className="mt-10 w-65 object-contain p-4">
                      <Link to="">
                        <img
                          className="rounded-t-base"
                          src={item.image}
                          alt=""
                        />
                      </Link>
                      <div className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded text-center">
                        <button className="">{item.category}</button>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
