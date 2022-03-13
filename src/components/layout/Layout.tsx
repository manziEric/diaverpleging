import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "src/components/footer/Footer";
import Navbar from "src/components/navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
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

export default Layout;
