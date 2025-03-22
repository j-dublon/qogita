import { Product, ProductsPageProps } from "@/types";

const mockProducts: Product[] = [
  {
    name: "Parodontax Duplo Herbal Fresh 75ml",
    gtin: "5054563079435",
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
    brandName: "Parodontax",
    categoryName: "Toothpaste",
  },
  {
    name: "Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health",
    gtin: "8411047151242",
    recommendedRetailPrice: 22.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/co8e7Y9gf272e2W2LgA6fj.jpg",
    brandName: "Instituto Espanol",
    categoryName: "Men's Perfume",
  },
  {
    name: "Snowracer Classic - Sled - Black",
    gtin: "7313327300382",
    recommendedRetailPrice: 90.49,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/jLSEtd5DRU72VXf7ScZ2m9.jpg",
    brandName: "Stiga",
    categoryName: "Sledding",
  },
];

export const mockProps: ProductsPageProps = {
  loading: false,
  error: false,
  products: mockProducts,
  currentPage: 1,
  totalPages: 5,
  fetchData: jest.fn(),
};

export const mockPropsLoading: ProductsPageProps = {
  ...mockProps,
  loading: true,
};

export const mockPropsErrorState: ProductsPageProps = {
  ...mockProps,
  error: true,
};
