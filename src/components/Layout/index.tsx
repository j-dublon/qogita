import React, { FC } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { LayoutProps } from "@/types";

const Layout: FC<LayoutProps> = ({ children }) => {
  const { totalItems } = useCart();

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <strong>Qogita</strong>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a className="underline">Products</a>
              </Link>
            </li>
            <li className="flex flex-row">
              <Link href="/cart">
                <a className="underline mr-1">Your Cart</a>
              </Link>
              <p>{totalItems > 0 ? `(${totalItems})` : ""}</p>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
