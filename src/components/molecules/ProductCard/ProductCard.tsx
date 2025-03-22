import { FC } from "react";
import { Product } from "../../../types";

const ProductCard: FC<Product> = ({ name }) => <p>{name}</p>;

export default ProductCard;
