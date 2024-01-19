import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/productService";
import { ProductModel } from "../../models/responses/ProductModel";
import AuthService from "../../services/AuthService";
import toastr from "toastr";

type Props = {};

const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    toastr.success("deneme");
    fetchProducts();
    AuthService.login({ username: "kminchelle", password: "123" })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log("hata ulaştı");
      });
  }, []);

  const onProductDelete = (id: number) => {
    setProducts(products.filter((i) => i.id !== id));
  };

  const fetchProducts = () => {
    ProductService.getAll().then((response: any) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard onDelete={onProductDelete} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
