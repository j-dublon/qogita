import { CartPageItemProps } from "@/types";
import React, { FC } from "react";

export const MockCartPageItem: FC<CartPageItemProps> = ({ item }) => (
  <div>{item.name}</div>
);
