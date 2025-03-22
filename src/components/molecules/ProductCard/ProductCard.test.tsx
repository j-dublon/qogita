import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { mockProps } from "./fixtures";

describe("Component: ProductCard", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductCard {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render the image with the correct url and alt text WHEN props are provided", () => {
    const { getByAltText } = render(<ProductCard {...mockProps} />);
    expect(getByAltText(mockProps.name)).toHaveProperty(
      "src",
      expect.stringMatching(mockProps.imageUrl)
    );
  });
});
