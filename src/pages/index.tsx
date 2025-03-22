import { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { fetchAllProducts } from "../services/products";
import { Product } from "../types";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const HomePage = ({ initialProducts, totalPages }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const { results } = await fetchAllProducts(page);
      setProducts(results);
      setCurrentPage(page);
    } catch (error) {
      console.log("Error fetching products: ", error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error ? (
        <p>
          Sorry! An error has occurred. Please refresh the page to try again.
        </p>
      ) : (
        <>
          {products.map((product: Product) => (
            <div className="my-8" key={product.gtin}>
              {product.name}
            </div>
          ))}
          <ResponsivePaginationComponent
            current={currentPage}
            total={totalPages}
            onPageChange={(page) => fetchData(page)}
          />
        </>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { count, results } = await fetchAllProducts(1);
  const totalPages = Math.ceil(count / 20);

  return {
    props: {
      initialProducts: results,
      totalPages,
    },
    revalidate: 60,
  };
};

export default HomePage;
