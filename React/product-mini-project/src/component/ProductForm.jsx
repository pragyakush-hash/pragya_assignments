import React, { useContext, useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import "./productForm.css";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const ProductForm = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  console.log("productData", productData);
  const { state, dispatch } = useContext(AuthContext);
  console.log(state?.products_id_edit, "productedit");
  // console.log(state?.product_id_update,"updateste")

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:3000/products/${id}`);
  //     const jsonData = await response.json();
  //     setProductData(jsonData);
  //     console.log("data_id", jsonData);
  //   };
  //   fetchData();

  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetch({ endpoint: `/products/${id}` });
      //data set in productdata fro update logic
      setProductData(data);
      console.log(data, "editdataaaaa");
      //data set using dispatch
      dispatch({ type: "FETCH_PRODUCTS_ID_EDIT", payload: data });
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    console.log(e, "e");
    setProductData({ ...productData, [e.target.name]: e.target.value });
    // dispatch({
    //   type: "FETCH_PRODUCTS_ID_UPDATE",
    //   payload: { name: e.target.name, value: e.target.value },
    // });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(productData,"product form")
  //   try {
  //     const response = await fetch(`http://localhost:3000/products/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(productData),
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const updateData = await response.json();
  //     setProductData(updateData);
  //   } catch {
  //     console.error("Error updating card:", error);
  //   }
  // };
  // const result  = productData.find(item => item.id === id) || {};
  // console.log(result,"result ara hai?")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await useFetch({
      endpoint: `/products/${id}`,

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
      // body: JSON.stringify(state?.product_id_update),
    });
    setProductData(data);
    console.log("data,data.......");
    // dispatch({ type: "FETCH_PRODUCTS_ID_UPDATE", payload: data });
  };
  return (
    <div className="page--productconatiner">
      <form className="page--productform" onSubmit={handleSubmit}>
        <label className="input-group">
          Id:-
          <input value={productData.id} name="id" type="number" />
          {/* <input value={state?.product_id_edit?.id} name="id" type="number" /> */}
        </label>
        <label className="input-group">
          Edit Name:-{" "}
          <input
            name="name"
            value={productData.name}
            // value={state?.product_id_edit?.name}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label className="input-group">
          Edit Price
          <input
            value={productData.price}
            // value={state?.product_id_edit?.price}
            name="price"
            onChange={handleChange}
            type="number"
          />
        </label>

        <label className="input-group">
          Edit Description
          <input
            value={productData.description}
            // value={state?.product_id_edit?.description}
            name="description"
            onChange={handleChange}
            type="text"
          />
        </label>
        <button className="btn-save" type="submit" onClick={handleClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
