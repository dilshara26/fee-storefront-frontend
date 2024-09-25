const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const getAllCategories = async () => {
  const res = await fetch("https://fee-storefront-backend.onrender.com/api/categories", {
    method: "GET",
  });
  const categories = await res.json();
  return categories;
};
