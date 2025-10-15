import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productsDetail.css";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("useparam", id);
  // const [productData, setProductData] = useState([]);
  const { state, dispatch } = useContext(AuthContext);
  console.log(state?.product_id,"productid")
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
  // const { productData } = useFetch({ endpoint: `/products/${id}` });

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetch({ endpoint: `/products/${id}` });
      // setProductData(data);
      dispatch({ type: "FETCH_PRODUCTS_ID", payload: data });
    };
    fetchData();
  }, []);

  return (
    <div className="product--productdetail">
      {Object.entries(state?.product_id ||{})?.map(([key, value]) => (
        <div className="product-values" key={value}>
          <p>{key}:-{value}</p>
        </div>
      ))}
      <button onClick={handleClick} className="btn-edit">
        Edit
      </button>
    </div>
  );
};

export default ProductDetail;
