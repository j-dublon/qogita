import React, { FC } from "react";
import { GetStaticProps } from "next";
import { fetchAllProducts } from "@/services/products";
import { AllProductsPageProvider } from "@/components";
import { HomePageProps } from "@/types";

const HomePage: FC<HomePageProps> = ({ initialProducts, totalPages }) => {
  return (
    <AllProductsPageProvider
      initialProducts={initialProducts}
      totalPages={totalPages}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = await fetchAllProducts(1, true);
  if (!allProducts) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  const totalPages = Math.ceil(allProducts.count / 20);

  return {
    props: {
      initialProducts: allProducts.results,
      totalPages,
    },
    revalidate: 60,
  };
};

export default HomePage;
