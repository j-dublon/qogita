import React from "react";
import { render } from "@testing-library/react";
import AllProductsPage from "./AllProductsPage";
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

describe("Component: AllProductsPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<AllProductsPage {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render title and components as expected WHEN page is not loading or in error state", () => {
    const { getByText, getAllByText } = render(
      <AllProductsPage {...mockProps} />
    );
    expect(getAllByText("Products")).toHaveLength(2);
    expect(getByText("Products List"));
    expect(getByText("Pagination"));
  });

  it("SHOULD render loading component WHEN loading is true", () => {
    const { getByText } = render(<AllProductsPage {...mockPropsLoading} />);
    expect(getByText("Loading..."));
  });

  it("SHOULD render error component WHEN error is true", () => {
    const { getByText } = render(<AllProductsPage {...mockPropsErrorState} />);
    expect(getByText("Error"));
  });
});
