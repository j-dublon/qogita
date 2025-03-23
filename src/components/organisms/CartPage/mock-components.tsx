import { CartPageItemProps, CartPageProps, ProductItem } from "@/types";
import React, { FC } from "react";
import { mockProps } from "./fixtures";

export const MockCartPageItem: FC<CartPageItemProps> = ({ item }) => (
  <div>{item.name}</div>
);

export const MockCartPage: FC<CartPageProps> = ({ handleUpdateCart }) => (
  <div onClick={() => handleUpdateCart(mockProps.items[0] as ProductItem, 4)}>
    Cart Page
  </div>
);
