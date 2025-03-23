import { CartPageProps } from "@/types";

export const mockProps: CartPageProps = {
  items: [
    {
      name: "Mock Product",
      imageUrl: "http://your-product.com",
      recommendedRetailPrice: 52,
      price: 52,
      recommendedRetailPriceCurrency: "EUR",
      gtin: "987",
      id: "987",
      brandName: "Chanel",
      categoryName: "Perfume",
      quantity: 3,
    },
    {
      name: "Mock Product Three",
      imageUrl: "http://your-product-three.com",
      recommendedRetailPrice: 12,
      price: 12,
      recommendedRetailPriceCurrency: "EUR",
      gtin: "123",
      id: "123",
      brandName: "Lynx",
      categoryName: "Deodorant",
      quantity: 2,
    },
  ],
  handleUpdateCart: jest.fn(),
  cartTotal: 356,
};
