import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { mockProps } from "./fixtures";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: mockRouterPush,
    };
  },
}));

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

  it("SHOULD redirect the user to the correct page WHEN the user clicks on the card", () => {
    const { getByRole } = render(<ProductCard {...mockProps} />);

    fireEvent.click(getByRole("button"));
    expect(mockRouterPush).toHaveBeenCalledWith(`/product/${mockProps.gtin}`);
  });
});
