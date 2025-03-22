import React, { FC } from "react";
import Layout from "../../Layout";
import { ProductsPageProps } from "@/types";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Loading, Error } from "../../atoms";
import { ProductsList } from "../../molecules";

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
      <h1 className="text-3xl font-semibold text-center my-6">Products</h1>
      {loading && <Loading />}
      {error ? (
        <Error />
      ) : (
        <div className="mb-8">
          <ProductsList products={products} />
          <ResponsivePaginationComponent
            current={currentPage}
            total={totalPages}
            onPageChange={(page) => fetchData(page)}
          />
        </div>
      )}
    </Layout>
  );
};

export default ProductsPage;
