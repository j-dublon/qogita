import React, { FC } from "react";
import CartPage from "./CartPage";
import { useCart } from "react-use-cart";
import { Loading } from "../../atoms";
import { ProductItem } from "@/types";

const AllProductsPageProvider: FC = () => {
  const { items, updateItemQuantity, cartTotal } = useCart();

  const handleUpdateCart = (item: ProductItem, newQuantity: number) => {
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <CartPage
      items={items}
      handleUpdateCart={handleUpdateCart}
      cartTotal={cartTotal}
    />
  );
};

export default AllProductsPageProvider;
