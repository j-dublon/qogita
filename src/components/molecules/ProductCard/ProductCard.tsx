import React, { FC } from "react";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard: FC<Product> = ({
  name,
  imageUrl,
  recommendedRetailPrice,
  recommendedRetailPriceCurrency,
  gtin,
}) => {
  const router = useRouter();

  return (
    <button
      className="bg-white p-4 rounded-lg shadow-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => router.push(`/product/${gtin}`)}
      style={{ cursor: "pointer" }}
      aria-label={`Go to product ${name}`}
    >
      <div className="flex justify-center mb-4">
        <Image
          src={imageUrl}
          width={150}
          height={150}
          alt={`Image of ${name}`}
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{`${recommendedRetailPriceCurrency} ${recommendedRetailPrice}`}</p>
    </button>
  );
};

export default ProductCard;
