import { useEffect, useState } from "react";
const baseURL = "http://localhost:3000";
export const useFetch = ({
  endpoint,
  method = "GET",
  body = null,
  headers = {},
}) => {
  console.log(endpoint, "endpoints");
  const [productData, setProductData] = useState([]);
  console.log(productData, "productdatahome");
  console.log("product", productData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body,
      });
      const data = await response.json();
      console.log("response data....", data);
      setProductData(data);
    };
    fetchData();
  }, []);
  return { productData ,setProductData};
};
