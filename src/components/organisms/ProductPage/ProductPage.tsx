import React, { FC } from "react";
import Layout from "../../Layout";
import { ProductPageProps } from "@/types";

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-center my-6">
        {product.name}
      </h1>
    </Layout>
  );
};

export default ProductPage;
