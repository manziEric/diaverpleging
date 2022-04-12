import { ReactNode } from 'react';
import Head from 'next/head';

import Footer from 'src/components/footer/Footer';
import Navbar from 'src/components/navbar/Navbar';

interface ComponentsProps {
  children: ReactNode;
}

function Layout({ children }: ComponentsProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Dia Verpleging</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
