
const baseURL = "http://localhost:3000";
export const useFetch = async({
  endpoint,
  method = "GET",
  body = null,
  headers = {},
}) => {
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

  return data;
};
