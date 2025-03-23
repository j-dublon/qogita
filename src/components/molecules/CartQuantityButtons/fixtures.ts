import { CartQuantityButtonsProps } from "@/types";

export const mockUpdateCartQuantity = jest.fn();

export const mockProps: CartQuantityButtonsProps = {
  product: {
    name: "Mock Product",
    imageUrl: "http://your-product.com",
    recommendedRetailPrice: 52,
    recommendedRetailPriceCurrency: "GBP",
    gtin: "987",
    brandName: "Chanel",
    categoryName: "Perfume",
  },
  numberInCart: 3,
  updateCartQuantity: mockUpdateCartQuantity,
};
