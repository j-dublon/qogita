import { Item } from "react-use-cart";

// -----API RESPONSE TYPES-----

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

// -----PRODUCT TYPES-----

/**
 * Product type
 */
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
 * Product Item type created on updating items in Cart with Product Data
 */
export interface ProductItem extends Product {
  id: string;
  quantity: number;
}

// -----PAGE/COMPONENT PROPS TYPES-----

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
  updateCartQuantity: (newQuantity: number) => void;
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
  numberInCart: number;
  updateCartQuantity: (newQuantity: number) => void;
};

/**
 * Cart Page props type
 */
export type CartPageProps = {
  items: Item[] | ProductItem[];
  handleUpdateCart: (item: ProductItem, newQuantity: number) => void;
  cartTotal: number;
};

/**
 * Cart Page Item props type
 */
export type CartPageItemProps = {
  item: ProductItem;
  handleUpdateCart: (item: ProductItem, newQuantity: number) => void;
};
