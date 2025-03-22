import { ProductsResponse } from "../types";

export const fetchAllProducts = async (
  pageToFetch: number
): Promise<ProductsResponse> => {
  const productsResponse = await fetch(`/api/products?page=${pageToFetch}`);
  const { count, page, results } = await productsResponse.json();
  return { count, page, results };
};
