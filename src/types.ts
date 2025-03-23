export type Product = {
  name: string;
  gtin: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  brandName: string;
  categoryName: string;
};

/**
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /api/products
 */
export type ProductsResponse = {
  count: number;
  page: number;
  results: Product[];
};

/**
 * The response type of /api/products/[gtin].
 */
export type ProductResponse = Product;

/**
 * Home Page props type
 */
export type HomePageProps = {
  initialProducts: Product[];
  totalPages: number;
};

/**
 * All Products Page props type
 */
export type AllProductsPageProps = {
  loading: boolean;
  error: boolean;
  products: Product[];
  currentPage: number;
  totalPages: number;
  fetchData: (page: number) => void;
};

/**
 * ProductsList component props type
 */
export type ProductsListProps = {
  products: Product[];
};

/**
 * Product Page Provider props type
 */
export type ProductPageProviderProps = {
  product: Product;
};

/**
 * Product Page props type
 */
export type ProductPageProps = {
  product: Product;
  numberInCart: number;
  updateCartQuantity: (product: Product, newQuantity: number) => void;
};

/**
 * Layout component props type
 */
export type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Cart Quantity Buttons component props type
 */
export type CartQuantityButtonsProps = {
  product: Product;
  numberInCart: number;
  updateCartQuantity: (product: Product, newQuantity: number) => void;
};
