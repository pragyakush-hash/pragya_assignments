import axios from "axios";
const API_URL = "http://localhost:8080";

export const placedOrderFetch = async (orderData) => {
  try {
    const token = localStorage.getItem("userToken");
    console.log(token, "add to cart token");

    const response = await axios.post(`${API_URL}/api/order/`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.orders, "response placed order");
    return response.data.orders;
  } catch (error) {
    throw error.response;
  }
};

export const cancleOrderFetch = async () => {
  try {
  } catch (error) {}
};

export const getallOrderByUserFetch = async ()=>{
 try {
    const token = localStorage.getItem("userToken");
    console.log(token, "add to cart token");

    const response = await axios.get(`${API_URL}/api/order/getAllByUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.orders, "response addTo getAkkOrderByUserFetch");
    return response.data.orders;
  } catch (error) {
    throw error.response;
  }
}
