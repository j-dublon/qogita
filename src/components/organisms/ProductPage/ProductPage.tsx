import React, { FC } from "react";
import Layout from "../../Layout";
import { ProductPageProps } from "@/types";
import Image from "next/image";

const ProductPage: FC<ProductPageProps> = ({
  product,
  numberInCart,
  updateCartQuantity,
}) => {
  const {
    name,
    imageUrl,
    recommendedRetailPrice,
    recommendedRetailPriceCurrency,
  } = product;

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-center mt-6 mb-8">{name}</h1>
      <div className="flex justify-center mb-8">
        <Image src={imageUrl} height={300} width={300} />
      </div>
      <p className="text-lg font-semibold text-center mb-8">{`${recommendedRetailPriceCurrency} ${recommendedRetailPrice}`}</p>
      <div className="flex flex-row gap-6 text-xl mb-6 justify-self-center">
        <button
          disabled={numberInCart === 0}
          onClick={() => updateCartQuantity(product, numberInCart - 1)}
          className="text-2xl hover:text-blue-500"
        >
          -
        </button>
        <p>{numberInCart}</p>
        <button
          onClick={() => updateCartQuantity(product, numberInCart + 1)}
          className="text-2xl hover:text-blue-500"
        >
          +
        </button>
      </div>
    </Layout>
  );
};

export default ProductPage;
