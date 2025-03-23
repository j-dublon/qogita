import { ProductPageProps } from "@/types";

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
