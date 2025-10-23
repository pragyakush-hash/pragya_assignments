const baseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=73860d01";
export const useFetch = async ({
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
