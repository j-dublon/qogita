import React, { FC } from "react";
import Image from "next/image";
import CartQuantityButtons from "../CartQuantityButtons/CartQuantityButtons";
import { CartPageItemProps, ProductItem } from "@/types";

const CartPageItem: FC<CartPageItemProps> = ({ item, handleUpdateCart }) => (
  <div className="flex flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg mb-4">
    <div className="flex flex-row gap-4 items-center">
      <Image
        src={item.imageUrl}
        height={150}
        width={150}
        alt={`Image of ${item.name}`}
      />
      <h1 className="text-xl font-semibold mt-6 mb-8">{item.name}</h1>
    </div>

    <CartQuantityButtons
      numberInCart={item.quantity as number}
      updateCartQuantity={(newQuantity: number) => {
        handleUpdateCart(item as ProductItem, newQuantity);
      }}
    />
  </div>
);

export default CartPageItem;
