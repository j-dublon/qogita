import React, { FC } from "react";
import Layout from "../../Layout";
import { ProductPageProps } from "@/types";
import Image from "next/image";
import CartQuantityButtons from "@/components/molecules/CartQuantityButtons/CartQuantityButtons";

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
      <CartQuantityButtons
        product={product}
        numberInCart={numberInCart}
        updateCartQuantity={updateCartQuantity}
      />
    </Layout>
  );
};

export default ProductPage;
