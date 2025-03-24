import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import CartPageProvider from "./CartPageProvider";
import { CartProvider } from "react-use-cart";
import { CartPageProps } from "@/types";
import { MockCartPage } from "./mock-components";
import { mockProps, mockUpdateItemQuantity } from "./fixtures";

jest.mock("./CartPage", () => ({
  __esModule: true,
  default: (props: CartPageProps) => <MockCartPage {...props} />,
}));

jest.mock("react-use-cart", () => {
  const original = jest.requireActual("react-use-cart");
  return {
    ...original,
    useCart: () => ({
      items: mockProps.items,
      cartTotal: 152,
      updateItemQuantity: mockUpdateItemQuantity,
    }),
  };
});

describe("Component: CartPageProvider", () => {
  it("SHOULD match snapshot", () => {
    const component = render(
      <CartProvider>
        <CartPageProvider />
      </CartProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render cart page", async () => {
    const { getByText } = render(
      <CartProvider>
        <CartPageProvider />
      </CartProvider>
    );
    await waitFor(() => {
      expect(getByText("Cart Page"));
    });
  });

  it("SHOULD call updateItemQuantity function with correct props WHEN handleUpdateCart is invoked", async () => {
    const { getByText } = render(
      <CartProvider>
        <CartPageProvider />
      </CartProvider>
    );

    fireEvent.click(getByText("Cart Page"));

    await waitFor(() => {
      expect(mockUpdateItemQuantity).toHaveBeenCalledWith(
        mockProps.items[0].id,
        4
      );
    });
  });
});
