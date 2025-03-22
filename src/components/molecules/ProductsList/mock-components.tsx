import React, { FC } from "react";
import { Product } from "@/types";

export const MockProductCard: FC<Product> = ({ name }) => <div>{name}</div>;
