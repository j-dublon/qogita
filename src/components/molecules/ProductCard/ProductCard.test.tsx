import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { mockProps } from "./fixtures";

describe("Component: ProductCard", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductCard {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render the image with the correct alt text WHEN props are provided", () => {
    const { getByAltText } = render(<ProductCard {...mockProps} />);
    expect(getByAltText(`Image of ${mockProps.name}`));
  });

  it("SHOULD render the product title and price WHEN props are provided", () => {
    const { getByText } = render(<ProductCard {...mockProps} />);
    expect(getByText(mockProps.name));
    expect(
      getByText(
        `${mockProps.recommendedRetailPriceCurrency} ${mockProps.recommendedRetailPrice}`
      )
    );
  });
});
