import React, { FC } from "react";
import Layout from "../../Layout/index";
import { CartPageProps, ProductItem } from "@/types";
import Image from "next/image";
import CartQuantityButtons from "../../molecules/CartQuantityButtons/CartQuantityButtons";

const CartPage: FC<CartPageProps> = ({
  items,
  handleUpdateCart,
  cartTotal,
}) => (
  <Layout>
    <h1 className="text-3xl font-semibold text-center my-6">Your Cart</h1>
    {items.map((item) => (
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
    ))}
    <h1 className="text-3xl font-semibold text-center my-6">{`CART TOTAL: EUR ${cartTotal}`}</h1>
  </Layout>
);

export default CartPage;
