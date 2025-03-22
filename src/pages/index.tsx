import { FC } from "react";
import { GetStaticProps } from "next";
import { fetchAllProducts } from "@/services/products";
import { ProductsPageProvider } from "@/components";
import { HomePageProps } from "@/types";

const HomePage: FC<HomePageProps> = ({ initialProducts, totalPages }) => {
  return (
    <ProductsPageProvider
      initialProducts={initialProducts}
      totalPages={totalPages}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { count, results } = await fetchAllProducts(1, true);
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
