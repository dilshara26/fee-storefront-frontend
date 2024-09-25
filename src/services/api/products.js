const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const getAllProducts = async () => {
  const res = await fetch("https://fee-storefront-backend.onrender.com/api/products", {
    method: "GET",
  });
  const products = await res.json();
  return products;
};
