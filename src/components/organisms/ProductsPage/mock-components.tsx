import { ProductsPageProps } from "@/types";
import React, { FC } from "react";

export const MockLoading: FC = () => <div>Loading...</div>;

export const MockError: FC = () => <div>Error</div>;

export const MockProductsList: FC = () => <div>Products List</div>;

export const MockPagination: FC = () => <div>Pagination</div>;

export const MockProductsPage: FC<ProductsPageProps> = ({ fetchData }) => (
  <div>
    Products Page
    <div onClick={() => fetchData(1)}>Products Page Pagination</div>
  </div>
);
