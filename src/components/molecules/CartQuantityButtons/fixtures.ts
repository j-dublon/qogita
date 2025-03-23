import { CartQuantityButtonsProps } from "@/types";

export const mockUpdateCartQuantity = jest.fn();

export const mockProps: CartQuantityButtonsProps = {
  numberInCart: 3,
  updateCartQuantity: mockUpdateCartQuantity,
};
