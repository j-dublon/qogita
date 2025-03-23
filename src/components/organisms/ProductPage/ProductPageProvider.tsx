import React, { FC, useEffect, useState } from "react";
import { ProductPageProviderProps } from "@/types";
import ProductPage from "./ProductPage";
import { Item, useCart } from "react-use-cart";

const ProductPageProvider: FC<ProductPageProviderProps> = ({ product }) => {
  const { items, updateItemQuantity, addItem } = useCart();
  const [currentItem, setCurrentItem] = useState<Item>();

  useEffect(() => {
    const currentItem = items.find((item) => item.id === product.gtin);
    setCurrentItem(currentItem);
  }, [items]);

  const updateCart = (newQuantity: number) => {
    if (currentItem?.quantity) {
      updateItemQuantity(product.gtin, newQuantity);
    } else {
      const item = {
        ...product,
        id: product.gtin,
        price: product.recommendedRetailPrice,
      };
      addItem(item, newQuantity);
    }
  };

  return (
    <ProductPage
      product={product}
      numberInCart={currentItem?.quantity ?? 0}
      updateCartQuantity={updateCart}
    />
  );
};

export default ProductPageProvider;
