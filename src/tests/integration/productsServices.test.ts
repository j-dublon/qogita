import { fetchAllProducts, fetchProductByGtin } from "../../services/products";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
import { mockProductResponse, mockProductsResponse } from "./fixtures";
enableFetchMocks();

const originalEnv = process.env;

describe("Helper: fetchAllProducts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      BASE_URL: "http://localhost:3000",
    };
  });

  afterAll(() => (process.env = originalEnv));

  it("SHOULD call the API route with correct params WHEN serverToFetch is true", async () => {
    fetch.once(JSON.stringify(mockProductsResponse), { status: 200 });

    const res = await fetchAllProducts(1, true);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.BASE_URL}/api/products?page=1`
    );
    expect(res).toEqual({
      count: mockProductsResponse.count,
      page: mockProductsResponse.page,
      results: mockProductsResponse.results,
    });
  });

  it("SHOULD call the API route with correct params WHEN serverToFetch is false", async () => {
    fetch.once(JSON.stringify(mockProductsResponse), { status: 200 });

    await fetchAllProducts(3, false);
    expect(fetch).toHaveBeenCalledWith("/api/products?page=3");
  });

  it("SHOULD return null WHEN an error occurs", async () => {
    fetch.mockRejectOnce();

    const res = await fetchAllProducts(1);
    expect(res).toBeNull();
  });
});

describe("Helper: fetchProductByGtin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      BASE_URL: "http://localhost:3000",
    };
  });

  afterAll(() => (process.env = originalEnv));

  it("SHOULD call the API route with correct params WHEN invoked", async () => {
    fetch.once(JSON.stringify(mockProductResponse), { status: 200 });

    const res = await fetchProductByGtin(mockProductResponse.gtin);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.BASE_URL}/api/products/${mockProductResponse.gtin}`
    );
    expect(res).toEqual(mockProductResponse);
  });

  it("SHOULD return null WHEN an error occurs", async () => {
    fetch.mockRejectOnce();

    const res = await fetchProductByGtin(mockProductResponse.gtin);
    expect(res).toBeNull();
  });
});
