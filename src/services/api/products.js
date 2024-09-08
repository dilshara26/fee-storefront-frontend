const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const getAllProducts = async (sessio) => {
  const res = await fetch("http://localhost:8000/api/products", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.getToken()}`,
    },n
  });
  const products = await res.json();
  return products;
};
