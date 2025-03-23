import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import { mockFetchAllProducts, mockProps } from "./fixtures";
import {
  MockError,
  MockLoading,
  MockPagination,
  MockProductsList,
  MockProductsPage,
} from "./mock-components";

jest.mock("../../atoms/Error/Error", () => ({
  __esModule: true,
  default: () => <MockError />,
}));
jest.mock("../../atoms/Loading/Loading", () => ({
  __esModule: true,
  default: () => <MockLoading />,
}));
jest.mock("../../molecules/ProductsList/ProductsList", () => ({
  __esModule: true,
  default: () => <MockProductsList />,
}));
jest.mock("react-responsive-pagination", () => ({
  __esModule: true,
  default: jest.fn(() => <MockPagination />),
}));
jest.mock("react-responsive-pagination/themes/classic.css", () => {});
jest.mock("./ProductsPage", () => ({
  __esModule: true,
  default: () => <MockProductsPage {...mockProps} />,
}));

describe("Component: ProductsPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductsPage {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render the ProductsPage component WHEN props are provided", () => {
    const { getByText } = render(<ProductsPage {...mockProps} />);
    expect(getByText("Products Page"));
  });

  it("SHOULD call fetchAllProducts WHEN fetchData is called by ProductsPage component", () => {
    const { getByText } = render(<ProductsPage {...mockProps} />);
    expect(getByText("Products Page"));

    fireEvent.click(getByText("Products Page Pagination"));
    expect(mockFetchAllProducts).toHaveBeenCalledWith(1);
  });
});
