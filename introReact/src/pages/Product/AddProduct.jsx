import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dummyjson.com/products",
        productInfo
      );
    } catch (err) {
      console.error("Error adding product: ", err);
    }
  };
  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={productInfo.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={productInfo.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={productInfo.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="text"
            className="form-control"
            name="stock"
            value={productInfo.stock}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            value={productInfo.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={productInfo.category}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
