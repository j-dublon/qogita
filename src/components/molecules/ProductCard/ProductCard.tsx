import React, { FC } from "react";
import { Product } from "@/types";
import Image from "next/image";

const ProductCard: FC<Product> = ({
  name,
  imageUrl,
  recommendedRetailPrice,
  recommendedRetailPriceCurrency,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
    <div className="flex justify-center mb-4">
      <Image src={imageUrl} width={150} height={150} alt={name} />
    </div>

    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p>{`${recommendedRetailPriceCurrency} ${recommendedRetailPrice}`}</p>
  </div>
);

export default ProductCard;
