import React, { useEffect, useState } from "react";
// import { products } from "../../db.json";
import ProductCard from "../component/ProductCard";
import "./home.css";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  // const [productData, setProductData] = useState([])
  // console.log(productData,"productdatahome")
  // console.log("product",productData)
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     const res = await fetch("http://localhost:3000/products")
  //     const data = await res.json()
  //     setProductData(data)
  //     // console.log("data",data)
  //   }
  //   fetchData()
  // },[])

  const { productData } = useFetch({endpoint:"/products"});
  return (
    <div className="product">
      {productData.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
