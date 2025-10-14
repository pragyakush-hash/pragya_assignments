import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productsDetail.css";
import { useFetch } from "../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("useparam", id);
  // const [productData, setProductData] = useState([]);
  // console.log(productData, "productdata set ho gya?");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}/edit`);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:3000/products/${id}`);
  //     // console.log("yaha tak aara hai......api me?")

  //     const jsonData = await response.json();
  //     setProductData(jsonData);
  //     console.log("data_id", jsonData);
  //   };
  //   fetchData();
  // }, [id]);
  // console.log(id,"id,,,,")
  const { productData } = useFetch({ endpoint: `/products/${id}` });

  return (
    <div className="product--productdetail">
      {Object.entries(productData).map(([key, value]) => (
        <div className="product-values">
          <p>{value}</p>
        </div>
      ))}
      <button onClick={handleClick} className="btn-edit">
        Edit
      </button>
    </div>
  );
};

export default ProductDetail;
