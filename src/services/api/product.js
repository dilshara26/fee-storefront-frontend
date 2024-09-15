export const createCategory = async () => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch("http://localhost:8000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: "Macbook" }),
  });

  return await res.json();
};
