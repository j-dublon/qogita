import React, { FC, useState } from "react";
import { fetchAllProducts } from "../../../services/products";
import { HomePageProps, Product } from "@/types";
import AllProductsPage from "./AllProductsPage";

const AllProductsPageProvider: FC<HomePageProps> = ({
  initialProducts,
  totalPages,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const allProducts = await fetchAllProducts(page);
      if (allProducts) {
        setProducts(allProducts.results);
        setCurrentPage(page);
      }
    } catch (error) {
      console.log("Error fetching products: ", error);
      setError(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  };

  return (
    <AllProductsPage
      loading={loading}
      error={error}
      products={products}
      currentPage={currentPage}
      totalPages={totalPages}
      fetchData={fetchData}
    />
  );
};

export default AllProductsPageProvider;
