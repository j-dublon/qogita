import React, { FC, useEffect, useState } from "react";
import CartPage from "./CartPage";
import { useCart } from "react-use-cart";
import { Loading } from "../../atoms";
import { ProductItem } from "@/types";

const CartPageProvider: FC = () => {
  const { items, updateItemQuantity, cartTotal } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items && cartTotal) {
      setLoading(false);
    }
  }, [items, cartTotal]);

  const handleUpdateCart = (item: ProductItem, newQuantity: number) => {
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CartPage
          items={items}
          handleUpdateCart={handleUpdateCart}
          cartTotal={cartTotal}
        />
      )}
    </>
  );
};

export default CartPageProvider;
