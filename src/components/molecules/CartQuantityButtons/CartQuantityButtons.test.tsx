import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CartQuantityButtons from "./CartQuantityButtons";
import { mockProps, mockUpdateCartQuantity } from "./fixtures";

describe("Component: CartQuantityButtons", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<CartQuantityButtons {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD display number in cart correctly WHEN rendered", () => {
    const { getByText } = render(<CartQuantityButtons {...mockProps} />);
    expect(getByText(mockProps.numberInCart));
  });

  it("SHOULD call updateCartQuantity with correct values WHEN minus button is clicked", () => {
    const { getByText } = render(<CartQuantityButtons {...mockProps} />);

    fireEvent.click(getByText("-"));
    expect(mockUpdateCartQuantity).toHaveBeenCalledWith(
      mockProps.numberInCart - 1
    );
  });

  it("SHOULD call updateCartQuantity with correct values WHEN plus button is clicked", () => {
    const { getByText } = render(<CartQuantityButtons {...mockProps} />);

    fireEvent.click(getByText("+"));
    expect(mockUpdateCartQuantity).toHaveBeenCalledWith(
      mockProps.numberInCart + 1
    );
  });
});
