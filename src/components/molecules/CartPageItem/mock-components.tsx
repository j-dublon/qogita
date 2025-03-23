import { CartQuantityButtonsProps } from "@/types";
import React, { FC } from "react";

export const MockUpdateCartQuantityButtons: FC<CartQuantityButtonsProps> = ({
  updateCartQuantity,
}) => (
  <div onClick={() => updateCartQuantity(5)}>Update Cart Quantity Buttons</div>
);
