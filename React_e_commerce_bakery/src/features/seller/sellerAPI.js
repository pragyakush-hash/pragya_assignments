import axios from "axios";
const API_URL = "http://localhost:8080";

export const FetchProductsBySellerId = async () => {
  try {
    const token = localStorage.getItem("userToken");
    console.log(token, "add to cart token");
    const response = await axios.get(
      `${API_URL}/api/analytics/seller/all/total-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response, "response of FetchProductsBySellerId");
    return response.data.products;
  } catch (error) {
    throw error.response;
  }
};
export const FetchAllOrdersOfSeller = async () => {
  try {
    const token = localStorage.getItem("userToken");
    console.log(token, "add to cart token");
    const response = await axios.get(
      `${API_URL}/api/analytics/seller/total-orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response, "response of FetchAllOrdersOfSeller");
    return response.data.orders;
  } catch (error) {
    throw error.response;
  }
};
