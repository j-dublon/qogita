import React, { FC, useEffect, useState } from "react";
import { Product, ProductPageProps } from "@/types";
import ProductPage from "./ProductPage";
import { Item, useCart } from "react-use-cart";

const ProductPageProvider: FC<ProductPageProps> = ({ product }) => {
  const { items, updateItemQuantity, addItem, emptyCart } = useCart();
  const [currentItem, setCurrentItem] = useState<Item>();
  console.log(items, "<---ITEMS");

  useEffect(() => {
    const currentItem = items.find((item) => item.id === product.gtin);
    setCurrentItem(currentItem);
  }, [items]);

  const updateCart = (product: Product, newQuantity: number) => {
    const item = {
      ...product,
      id: product.gtin,
      price: product.recommendedRetailPrice,
    };
    if (currentItem?.quantity) {
      updateItemQuantity(item.id, newQuantity);
    } else {
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
