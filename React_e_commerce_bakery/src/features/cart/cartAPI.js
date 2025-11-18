import axios from "axios";
const API_URL = "http://localhost:8080";

export const addToCartFetch = async ({ productId, quantity }) => {
  try {
    const token = localStorage.getItem("userToken");
    console.log(token, "add to cart token");

    const response = await axios.post(
      `${API_URL}/api/cart/add`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.cart.items, "response addTo cartFETCH");
    return response.data.cart.items;
  } catch (error) {
    throw error.response;
  }
};
export const viewCartItemsFetch = async () => {
  try {
    const token = localStorage.getItem("userToken");

    const response = await axios.get(`${API_URL}/api/cart/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.cart.items; 
  } catch (error) {
    throw error.response;
  }
};

