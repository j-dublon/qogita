import { ProductPageProps } from "@/types";
import React, { FC } from "react";

export const MockUpdateCartQuantityButtons: FC = () => (
  <div>Update Cart Quantity Buttons</div>
);

export const MockProductPage: FC<ProductPageProps> = ({
  numberInCart,
  updateCartQuantity,
}) => (
  <div>
    <div>Product Page</div>
    <div>{`Number in cart: ${numberInCart}`}</div>
    <div onClick={() => updateCartQuantity(4)}>Update Cart</div>
  </div>
);
