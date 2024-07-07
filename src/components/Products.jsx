import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Tab from "./Tab";
import { getAllProducts } from "./../services/api/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    { id: "ALL", name: "All" },
    { id: "1", name: "Headphones" },
    { id: "2", name: "Earbuds" },
    { id: "3", name: "Speakers" },
    { id: "4", name: "Mobile Phones" },
    { id: "5", name: "Smart Watches" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((el) => el.categoryId === selectedCategory);

  const handleTabClick = (id) => {
    setSelectedCategory(id);
  };

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        setIsError(true);
        setError(e.message);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Our Top Products</h1>
        <div className="border mt-4"></div>

        <div className="py-8">
          <div className="flex items-center gap-x-4">
            {categories.map((el) => {
              return (
                <Tab
                  selectedCategory={selectedCategory}
                  key={el.id}
                  category={el}
                  onClick={handleTabClick}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-6 mt-4">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Our Top Products</h1>
        <div className="border mt-4"></div>

        <div className="py-8">
          <div className="flex items-center gap-x-4">
            {categories.map((el) => {
              return (
                <Tab
                  selectedCategory={selectedCategory}
                  key={el.id}
                  category={el}
                  onClick={handleTabClick}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-6 mt-4">
            <p>Some error happend: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>

      <div className="py-8">
        <div className="flex items-center gap-x-4">
          {categories.map((el) => {
            return (
              <Tab
                selectedCategory={selectedCategory}
                key={el.id}
                category={el}
                onClick={handleTabClick}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-6 mt-4">
          {filteredProducts.map((el) => {
            return (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                description={el.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
