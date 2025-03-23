import React, { FC } from "react";
import { ProductPageProps } from "@/types";
import ProductPage from "./ProductPage";

const ProductPageProvider: FC<ProductPageProps> = ({ product }) => {
  return <ProductPage product={product} />;
};

export default ProductPageProvider;
