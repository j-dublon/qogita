import { CartPageItemProps } from "@/types";

export const mockHandleUpdateCart = jest.fn();

export const mockProps: CartPageItemProps = {
  item: {
    name: "Mock Product",
    imageUrl: "http://your-product.com",
    recommendedRetailPrice: 52,
    price: 52,
    recommendedRetailPriceCurrency: "GBP",
    gtin: "987",
    id: "987",
    brandName: "Chanel",
    categoryName: "Perfume",
    quantity: 3,
  },
  handleUpdateCart: mockHandleUpdateCart,
};
