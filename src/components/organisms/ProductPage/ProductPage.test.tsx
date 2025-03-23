import React from "react";
import { render } from "@testing-library/react";
import ProductPage from "./ProductPage";
import { mockProps } from "./fixtures";
import { MockUpdateCartQuantityButtons } from "./mock-components";

jest.mock("../../molecules/CartQuantityButtons/CartQuantityButtons", () => ({
  __esModule: true,
  default: () => <MockUpdateCartQuantityButtons />,
}));

describe("Component: ProductPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<ProductPage {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render title, price, and buttons as expected WHEN props are provided", () => {
    const { getByText } = render(<ProductPage {...mockProps} />);
    expect(getByText(mockProps.product.name));
    expect(
      getByText(
        `${mockProps.product.recommendedRetailPriceCurrency} ${mockProps.product.recommendedRetailPrice}`
      )
    );
    expect(getByText("Update Cart Quantity Buttons"));
  });

  it("SHOULD render the image with the correct alt text WHEN props are provided", () => {
    const { getByAltText } = render(<ProductPage {...mockProps} />);
    expect(getByAltText(`Image of ${mockProps.product.name}`));
  });
});
