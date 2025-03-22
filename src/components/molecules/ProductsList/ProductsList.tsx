import { FC } from "react";
import { ProductsListProps } from "../../../types";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {products.map((product) => (
      <ProductCard {...product} />
    ))}
  </div>
);

export default ProductsList;
