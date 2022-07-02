import React from "react";
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>
          {title ? title + ' - Selvister' : 'Selvister'}
        </title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md bg-purple-900 items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold text-purple-200">Silvester</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-4">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-4">Login</a>
              </Link>
              <Link href="/cart">
                <a className="p-4">Products</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center">footer</footer>
      </div>
    </div>
  );
}
