import React from "react";
import { render } from "@testing-library/react";
import ProductsList from "./ProductsList";
import { mockProps } from "./fixtures";
import { Product } from "@/types";
import { MockProductCard } from "./mock-components";

jest.mock("../ProductCard/ProductCard", () => ({
  __esModule: true,
  default: (props: Product) => <MockProductCard {...props} />,
}));

describe("Component: ProductsList", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductsList {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render a ProductCard component for each product WHEN props are provided", () => {
    const { getByText } = render(<ProductsList {...mockProps} />);
    mockProps.products.forEach((product) => expect(getByText(product.name)));
  });
});
