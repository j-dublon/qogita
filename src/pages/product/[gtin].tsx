import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { fetchProductByGtin } from "../../services/products";
import { ProductPageProviderProps } from "@/types";
import ProductPageProvider from "@/components/organisms/ProductPage/ProductPageProvider";

const ProductPage: FC<ProductPageProviderProps> = ({ product }) => {
  return <ProductPageProvider product={product} />;
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
