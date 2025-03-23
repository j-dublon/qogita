import { Product, ProductPageProps } from "@/types";
import { Item } from "react-use-cart";

export const mockAddItem = jest.fn();
export const mockUpdateItemQuantity = jest.fn();

export const mockProps: ProductPageProps = {
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
  updateCartQuantity: jest.fn(),
};

export const mockCartItem = {
  ...mockProps.product,
  id: mockProps.product.gtin,
  price: mockProps.product.recommendedRetailPrice,
  quantity: 3,
};

export const alternativeProduct: Product = {
  name: "Other Mock Product",
  imageUrl: "http://your-product-two.com",
  recommendedRetailPrice: 35,
  recommendedRetailPriceCurrency: "GBP",
  gtin: "073",
  brandName: "Chanel",
  categoryName: "Perfume",
};

export const alternativeCartItem: Item = {
  name: "Other Mock Product",
  imageUrl: "http://your-product-two.com",
  recommendedRetailPrice: 35,
  price: 35,
  recommendedRetailPriceCurrency: "GBP",
  gtin: "073",
  id: "073",
  brandName: "Chanel",
  categoryName: "Perfume",
};
