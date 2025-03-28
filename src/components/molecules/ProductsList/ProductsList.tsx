import React, { FC } from "react";
import { ProductsListProps } from "@/types";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <div
    role="list"
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
  >
    {products.map((product) => (
      <ProductCard {...product} key={product.gtin} />
    ))}
  </div>
);

export default ProductsList;
