import Head from "next/head";
import React from "react";
import { Navbar } from "../navbar";

//TODO export default layout
export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Dia Verpleging</title>
      </Head>
      <Navbar />
      <div>{children}</div>
      <footer>All rights reserved. Dia Verpleging</footer>
    </div>
  );
};
