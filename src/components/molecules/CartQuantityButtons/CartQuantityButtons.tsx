import React, { FC } from "react";
import { CartQuantityButtonsProps } from "@/types";

const CartQuantityButtons: FC<CartQuantityButtonsProps> = ({
  numberInCart,
  updateCartQuantity,
}) => (
  <div className="flex flex-row gap-6 text-xl justify-self-center">
    <button
      disabled={numberInCart === 0}
      onClick={() => updateCartQuantity(numberInCart - 1)}
      className="text-2xl hover:text-blue-500"
    >
      -
    </button>
    <p>{numberInCart}</p>
    <button
      onClick={() => updateCartQuantity(numberInCart + 1)}
      className="text-2xl hover:text-blue-500"
    >
      +
    </button>
  </div>
);

export default CartQuantityButtons;
