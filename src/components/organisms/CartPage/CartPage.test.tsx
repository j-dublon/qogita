import React from "react";
import { render } from "@testing-library/react";
import CartPage from "./CartPage";
import { mockProps } from "./fixtures";
import { MockCartPageItem } from "./mock-components";
import { CartPageItemProps } from "@/types";

jest.mock("../../molecules/CartPageItem/CartPageItem", () => ({
  __esModule: true,
  default: (props: CartPageItemProps) => <MockCartPageItem {...props} />,
}));

describe("Component: CartPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<CartPage {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render page title and cart total as expected WHEN props are provided", () => {
    const { getByText, getAllByText } = render(<CartPage {...mockProps} />);
    expect(getAllByText("Your Cart")).toHaveLength(2);
    expect(getByText(`CART TOTAL: EUR ${mockProps.cartTotal}`));
  });

  it("SHOULD render a CartPageItem component for each item WHEN props are provided", () => {
    const { getByText } = render(<CartPage {...mockProps} />);
    mockProps.items.forEach((item) => expect(getByText(item.name)));
  });
});
