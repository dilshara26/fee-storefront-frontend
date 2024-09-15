export const createOrder = async (data) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch("http://localhost:8000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }

  return await res.json();
};
