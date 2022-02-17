import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import { Navbar } from "../navbar";

//TODO export default layout
export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Dia Verpleging</title>
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
