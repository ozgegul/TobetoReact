import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
