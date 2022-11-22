import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title, children }) => {
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
                <p className="px-2">Cart</p>
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