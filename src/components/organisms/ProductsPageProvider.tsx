import { FC, useState } from "react";
import Layout from "../Layout";
import { fetchAllProducts } from "../../services/products";
import { HomePageProps, Product } from "../../types";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const ProductsPageProvider: FC<HomePageProps> = ({
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

export default ProductsPageProvider;
