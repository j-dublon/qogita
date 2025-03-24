import React, { FC } from "react";
import Layout from "../../Layout/index";
import { CartPageProps, ProductItem } from "@/types";
import { CartPageItem } from "../../molecules";

const CartPage: FC<CartPageProps> = ({
  items,
  handleUpdateCart,
  cartTotal,
}) => (
  <Layout>
    <h1 className="text-3xl font-semibold text-center my-6">Your Cart</h1>
    {items.map((item) => (
      <CartPageItem
        item={item as ProductItem}
        handleUpdateCart={handleUpdateCart}
        key={item.id}
      />
    ))}
    <h1 className="text-3xl font-semibold text-center my-6">{`CART TOTAL: EUR ${cartTotal?.toFixed(
      2
    )}`}</h1>
  </Layout>
);

export default CartPage;
