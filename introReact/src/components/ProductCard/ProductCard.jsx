import React from "react";
import { Link } from "react-router-dom";
import DeleteProduct from "../../pages/Product/DeleteProduct";

function ProductCard({ product }) {
  const { deleteProduct, handleDeleteClick } = DeleteProduct({
    id: product.id,
  });
  return (
    <div className="card" style={{ height: "100%", marginTop: "12px" }}>
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt="..."
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <Link
          to={`/product-detail/${product.id}`}
          className="btn btn-outline-secondary "
        >
          Details
        </Link>
        <button className="btn btn-outline-danger" onClick={handleDeleteClick}>
          {deleteProduct ? "Deleting.." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
