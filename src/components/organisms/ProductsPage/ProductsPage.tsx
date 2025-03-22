import { FC } from "react";
import Layout from "../../Layout";
import { ProductsPageProps } from "../../../types";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Loading from "../../atoms/Loading/Loading";
import Error from "../../atoms/Error/Error";
import ProductsList from "../../molecules/ProductsList/ProductsList";

const ProductsPage: FC<ProductsPageProps> = ({
  loading,
  error,
  products,
  currentPage,
  totalPages,
  fetchData,
}) => {
  return (
    <Layout>
      <h1>Products</h1>
      {loading && <Loading />}
      {error ? (
        <Error />
      ) : (
        <>
          <ProductsList products={products} />
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

export default ProductsPage;
