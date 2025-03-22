import { ProductsResponse } from "../types";

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
