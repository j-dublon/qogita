import { ProductResponse, ProductsResponse } from "../types";

export const fetchAllProducts = async (
  pageToFetch: number,
  serverFetch?: boolean
): Promise<ProductsResponse | null> => {
  try {
    const fetchUrl = `${
      serverFetch ? process.env.BASE_URL : ""
    }/api/products?page=${pageToFetch}`;

    const productsResponse = await fetch(fetchUrl);

    const { count, page, results } = await productsResponse.json();
    return { count, page, results };
  } catch (error) {
    console.log("Error fetching all products: ", error);
    return null;
  }
};

export const fetchProductByGtin = async (
  gtin?: string
): Promise<ProductResponse | null> => {
  if (!gtin) return null;

  try {
    const productResponse = await fetch(
      `${process.env.BASE_URL}/api/products/${gtin}`
    );
    const product = await productResponse.json();
    return product;
  } catch (error) {
    console.log("Error fetching product by gtin: ", error);
    return null;
  }
};
