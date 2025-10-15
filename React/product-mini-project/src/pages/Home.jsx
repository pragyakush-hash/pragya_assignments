import React, { useContext, useEffect, useState } from "react";
// import { products } from "../../db.json";
import ProductCard from "../component/ProductCard";
import "./home.css";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  // const [productData, setProductData] = useState([])
  const { state, dispatch } = useContext(AuthContext);
  console.log(state?.products, "state products");

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
  useEffect(() => {
    console.log("hello from useeffect");
    const fetchData = async () => {
      const data = await useFetch({ endpoint: "/products" });
      console.log(data, "data");
      // setProductData(data)
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
    };
    fetchData();
  }, []);
  return (
    <div className="product">
      {state?.products?.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
