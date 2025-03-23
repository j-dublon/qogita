import React from "react";
import { render } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import { mockProps, mockPropsErrorState, mockPropsLoading } from "./fixtures";
import {
  MockError,
  MockLoading,
  MockPagination,
  MockProductsList,
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

describe("Component: ProductsPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductsPage {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render title and components as expected WHEN page is not loading or in error state", () => {
    const { getByText, getAllByText } = render(<ProductsPage {...mockProps} />);
    expect(getAllByText("Products")).toHaveLength(2);
    expect(getByText("Products List"));
    expect(getByText("Pagination"));
  });

  it("SHOULD render loading component WHEN loading is true", () => {
    const { getByText } = render(<ProductsPage {...mockPropsLoading} />);
    expect(getByText("Loading..."));
  });

  it("SHOULD render error component WHEN error is true", () => {
    const { getByText } = render(<ProductsPage {...mockPropsErrorState} />);
    expect(getByText("Error"));
  });
});
