import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const result = productData.filter(
    (item) => item.brand === "Featured products"
  );
  console.log(result.length, "results");

  console.log(productData, "productdata");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/product/");
      const data = await response.json();
      setProductData(data);
    };
    fetchData();
  }, []);
  const handleAddToCart = ({ productId, quantity }) => {
    dispatch(addToCart({ productId, quantity }));
  };
  return (
    <div className="mt-15">
      <h1>Featured Categories</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {productData &&
          productData.slice(0, 3).map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <Link to="">
                  <img className="rounded-t-base" src={item.image} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
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
              <SwiperSlide key={item.id}>
                <div className="mt-10 w-100 object-contain p-4">
                  <Link to="">
                    <img className="rounded-t-base" src={item.image} alt="" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>

      <div className="text-4xl text-amber-700 text-center font-bold mt-10">
        <h1>Featured Categories</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="">
          {productData &&
            productData.slice(3, 12).map((item) => (
              <SwiperSlide key={item._id}>
                <div className="mt-10  object-contain">
                  <Link to="">
                    <img className="rounded-t-base" src={item.image} alt="" />
                  </Link>

                  <div className="flex gap-3 mt-3">
                    {/* <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium w-full">
                      {!item.category.length >= 10
                        ? item.category
                        : item.category.slice(0, 8) + "..."}
                    </button> */}
                    <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium truncate max-w-[120px]">
                      {item.category}
                    </button>

                    <button
                      onClick={() =>
                        handleAddToCart({
                          productId: item._id,
                          quantity: 1,
                        })
                      }
                      className="bg-amber-900 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium "
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div className="text-4xl text-amber-700 text-center font-bold mt-10">
        <h1>Featured products</h1>
        <p>Items:-{result.length}</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="">
          {result &&
            result.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mt-10 w-80 object-contain p-6">
                  <Link to="">
                    <img className="rounded-t-base" src={item.image} alt="" />
                  </Link>

                  <div className="flex gap-3 mt-3">
                    {/* <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium w-full">
                      {!item.category.length >= 10
                        ? item.category
                        : item.category.slice(0, 8) + "..."}
                    </button> */}
                    <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium truncate max-w-[120px]">
                      {item.category}
                    </button>

                    <button className="bg-amber-900 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium w-full">
                      Add to cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HomePage;
