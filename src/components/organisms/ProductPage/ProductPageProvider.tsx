import React, { FC, useState } from "react";
import { ProductPageProps } from "@/types";
import ProductPage from "./ProductPage";
import { useCart } from "react-use-cart";

const ProductPageProvider: FC<ProductPageProps> = ({ product }) => {
  const { items, updateItemQuantity, addItem } = useCart();
  const currentItem = items.find((item) => item.id === product.gtin);
  const [numberOfCurrentItem, setNumberOfCurrentItem] = useState(
    currentItem?.quantity ?? 0
  );

  const updateCart = () => {
    const item = {
      ...product,
      id: product.gtin,
      price: product.recommendedRetailPrice,
    };
    if (currentItem?.quantity && currentItem.quantity > 0) {
      updateItemQuantity(item.id, numberOfCurrentItem);
    } else {
      addItem(item, numberOfCurrentItem);
    }
  };

  return (
    <ProductPage
      product={product}
      numberInCart={numberOfCurrentItem}
      setNumberInCart={setNumberOfCurrentItem}
      updateCart={updateCart}
    />
  );
};

export default ProductPageProvider;
