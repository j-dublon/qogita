import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { fetchProductByGtin } from "../../services/products";

import { ProductPageProps } from "@/types";

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return <div>{product.name}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product = await fetchProductByGtin(params?.gtin as string | undefined);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
