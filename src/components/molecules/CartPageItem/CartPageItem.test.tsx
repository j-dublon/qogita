import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CartPageItem from "./CartPageItem";
import { mockHandleUpdateCart, mockProps } from "./fixtures";
import { MockUpdateCartQuantityButtons } from "./mock-components";
import { CartQuantityButtonsProps } from "@/types";

jest.mock("../CartQuantityButtons/CartQuantityButtons", () => ({
  __esModule: true,
  default: (props: CartQuantityButtonsProps) => (
    <MockUpdateCartQuantityButtons {...props} />
  ),
}));

describe("Component: CartPageItem", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<CartPageItem {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render image with correct alt text WHEN props are provided", () => {
    const { getByAltText } = render(<CartPageItem {...mockProps} />);
    expect(getByAltText(`Image of ${mockProps.item.name}`));
  });

  it("SHOULD render title and buttons as expected WHEN props are provided", () => {
    const { getByText } = render(<CartPageItem {...mockProps} />);
    expect(getByText(mockProps.item.name));
    expect(getByText("Update Cart Quantity Buttons"));
  });

  it("SHOULD call handleUpdateCart with correct data WHEN update cart quantity buttons are clicked", () => {
    const { getByText } = render(<CartPageItem {...mockProps} />);

    fireEvent.click(getByText("Update Cart Quantity Buttons"));
    expect(mockHandleUpdateCart).toHaveBeenCalledWith(mockProps.item, 5);
  });
});
