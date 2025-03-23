import { AllProductsPageProps } from "@/types";
import React, { FC } from "react";

export const MockLoading: FC = () => <div>Loading...</div>;

export const MockError: FC = () => <div>Error</div>;

export const MockProductsList: FC = () => <div>Products List</div>;

export const MockPagination: FC = () => <div>Pagination</div>;

export const MockAllProductsPage: FC<AllProductsPageProps> = ({
  fetchData,
}) => (
  <div>
    Products Page
    <div onClick={() => fetchData(1)}>Products Page Pagination</div>
  </div>
);
