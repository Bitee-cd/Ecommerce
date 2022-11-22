import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  {cart.cartItems.length > 0 && (
                    <span className="text-sm bg-red-600 rounded-full px-2 py-1 font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </div>
              </Link>

              <Link href="/login">
                <p className="px-2">Login</p>
              </Link>
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
