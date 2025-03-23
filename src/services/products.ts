import { ProductResponse, ProductsResponse } from "../types";

export const fetchAllProducts = async (
  pageToFetch: number,
  serverFetch?: boolean
): Promise<ProductsResponse> => {
  const fetchUrl = `${
    serverFetch ? process.env.BASE_URL : ""
  }/api/products?page=${pageToFetch}`;

  const productsResponse = await fetch(fetchUrl);

  const { count, page, results } = await productsResponse.json();
  return { count, page, results };
};

export const fetchProductByGtin = async (
  gtin?: string
): Promise<ProductResponse | null> => {
  if (!gtin) return null;

  const productResponse = await fetch(
    `${process.env.BASE_URL}/api/products/${gtin}`
  );
  const product = await productResponse.json();
  return product;
};
