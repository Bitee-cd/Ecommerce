import { Menu } from "@headlessui/react";
import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import DropDownLink from "./DropDownLink";

const Layout = ({ title, children }) => {
  const { status, data: session } = useSession();
  const { dispatch, state } = useContext(Store);
  const { cart } = state;
  const [newCart, setNewCart] = useState(0);

  useEffect(() => {
    setNewCart(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const year = new Date().getFullYear();
  const logoutClickHandler = () => {
    dispatch({ type: "CART_RESET" });
    Cookies.remove("cart");
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title + "- Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex justify-between h-12 shadow-md items-center px-4">
            <Link href="/">
              <p className="font-bold text-lg">Amazona</p>
            </Link>
            <div className="flex gap-5">
              <Link href="/cart">
                <div className="flex">
                  <p className="px-1">Cart</p>
                  <div>
                    {newCart > 0 && (
                      <p className="text-sm bg-red-600 rounded-full px-2 py-1 font-bold text-white">
                        {newCart}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg bg-white">
                    <Menu.Item>
                      <DropDownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <p className="px-2">Login</p>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="m-auto px-4 mt-4 container">{children}</main>
        <footer className="flex justify-center items-center shadow-inner h-10">
          <p>Copyright © {year} BiteeCodes</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
