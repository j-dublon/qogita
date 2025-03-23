import React from "react";
import { fireEvent, render } from "@testing-library/react";
import AllProductsPageProvider from "./AllProductsPageProvider";
import { mockFetchAllProducts, mockProps, mockProviderProps } from "./fixtures";
import {
  MockError,
  MockLoading,
  MockPagination,
  MockProductsList,
  MockAllProductsPage,
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
jest.mock("./AllProductsPage", () => ({
  __esModule: true,
  default: () => <MockAllProductsPage {...mockProps} />,
}));

describe("Component: AllProductsPageProvider", () => {
  it("SHOULD match snapshot", () => {
    const component = render(
      <AllProductsPageProvider {...mockProviderProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render the AllProductsPageProvider component WHEN props are provided", () => {
    const { getByText } = render(
      <AllProductsPageProvider {...mockProviderProps} />
    );
    expect(getByText("Products Page"));
  });

  it("SHOULD call fetchAllProducts WHEN fetchData is called by AllProductsPageProvider component", () => {
    const { getByText } = render(
      <AllProductsPageProvider {...mockProviderProps} />
    );
    expect(getByText("Products Page"));

    fireEvent.click(getByText("Products Page Pagination"));
    expect(mockFetchAllProducts).toHaveBeenCalledWith(1);
  });
});
