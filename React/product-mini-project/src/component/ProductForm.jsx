import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productForm.css";

const ProductForm = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  console.log(productData, "edit product data");
  const navigate = useNavigate()
    const handleClick = () => {
    navigate(`/products/${id}`);
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const jsonData = await response.json();
      setProductData(jsonData);
      console.log("data_id", jsonData);
    };
    fetchData();

  }, []);

  const handleChange = (e) => {
    console.log(e, "e");
    setProductData({ ...productData,[e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData,"product form")
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updateData = await response.json();
      setProductData(updateData);
    } catch {
      console.error("Error updating card:", error);
    }
  };
  // const result  = productData.find(item => item.id === id) || {};
  // console.log(result,"result ara hai?")
  return (
    <div className="">
      <form className="page--productform" onSubmit={handleSubmit}>
        <label>
          Id:-
          <input value={productData.id} name="id" />
        </label>
        <label>
          Edit Name:- <input name="name" value={productData.name} onChange={handleChange} />
        </label>
        <label>
          Edit Price
          <input value={productData.price} name="price" onChange={handleChange} />
        </label>

        <label>
          Edit Description
          <input value={productData.description} name="description" onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleClick} >Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
