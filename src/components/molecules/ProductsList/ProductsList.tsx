import { FC } from "react";
import { ProductsListProps } from "../../../types";

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <>
    {products.map((product) => (
      <div className="my-8" key={product.gtin}>
        {product.name}
      </div>
    ))}
  </>
);

export default ProductsList;
