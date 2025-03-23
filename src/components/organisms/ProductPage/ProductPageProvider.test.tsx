import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import ProductPageProvider from "./ProductPageProvider";
import {
  alternativeCartItem,
  alternativeProduct,
  mockAddItem,
  mockCartItem,
  mockProps,
  mockUpdateItemQuantity,
} from "./fixtures";
import { MockProductPage } from "./mock-components";
import { CartProvider } from "react-use-cart";
import { ProductPageProps } from "@/types";

jest.mock("./ProductPage", () => ({
  __esModule: true,
  default: (props: ProductPageProps) => <MockProductPage {...props} />,
}));

jest.mock("react-use-cart", () => {
  const original = jest.requireActual("react-use-cart");
  return {
    ...original,
    useCart: () => ({
      items: [mockCartItem],
      addItem: mockAddItem,
      updateItemQuantity: mockUpdateItemQuantity,
    }),
  };
});

describe("Component: ProductPageProvider", () => {
  it("SHOULD match snapshot", () => {
    const component = render(
      <CartProvider>
        <ProductPageProvider product={mockProps.product} />
      </CartProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render product page with correct current number of items in cart WHEN product is provided", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductPageProvider product={mockProps.product} />
      </CartProvider>
    );
    expect(getByText(`Number in cart: ${mockProps.numberInCart}`));
  });

  it("SHOULD call updateItemQuantity function with correct props WHEN product is already in cart", async () => {
    const { getByText } = render(
      <CartProvider>
        <ProductPageProvider product={mockProps.product} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(getByText("Number in cart: 3"));
    });

    fireEvent.click(getByText("Update Cart"));

    await waitFor(() => {
      expect(mockUpdateItemQuantity).toHaveBeenCalledWith("987", 4);
    });
  });

  it("SHOULD call addItem function with correct props WHEN product is not already in cart", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductPageProvider product={alternativeProduct} />
      </CartProvider>
    );

    fireEvent.click(getByText("Update Cart"));
    expect(mockAddItem).toHaveBeenCalledWith({ ...alternativeCartItem }, 4);
  });
});
