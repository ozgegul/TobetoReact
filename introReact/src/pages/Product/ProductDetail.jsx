import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductDetails();
  }, [id]);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      console.log("data", response.data);
    } catch (err) {
      console.error("Error fetching details: ", err);
    }
  };

  return (
    <div className="container mt-5">
      {product && (
        <div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <img
                src={product.thumbnail || "https://picsum.photos/200/300"}
                alt={product.title}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 mt-5">
              <h2>{product.title}</h2>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h3>Details</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Title:</strong> {product.title}
                </li>
                <li className="list-group-item">
                  <strong>Description:</strong> {product.description}
                </li>
                <li className="list-group-item">
                  <strong>Price:</strong> ${product.price}
                </li>
                <li className="list-group-item">
                  <strong>Rating:</strong> {product.rating}
                </li>
                <li className="list-group-item">
                  <strong>Stock:</strong> {product.stock}
                </li>
                <li className="list-group-item">
                  <strong>Brand:</strong> {product.brand}
                </li>
                <li className="list-group-item">
                  <strong>Category:</strong> {product.category}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
