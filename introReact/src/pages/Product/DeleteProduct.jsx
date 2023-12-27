import axios from "axios";
import { useState } from "react";

function DeleteProduct({ id }) {
  const [deleteProduct, setDeleteProduct] = useState(false);

  const handleDeleteClick = async () => {
    try {
      setDeleteProduct(true);
      await axios.delete(`https://dummyjson.com/products/${id}`);
      console.log("Product deleted!");
    } catch (err) {
      console.error("Error deleting product: ", err);
    } finally {
      setDeleteProduct(false);
    }
  };

  return { deleteProduct, handleDeleteClick };
}

export default DeleteProduct;
