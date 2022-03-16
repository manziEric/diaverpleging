import { ReactNode } from 'react';
import Footer from 'src/components/footer/Footer';
import Navbar from 'src/components/navbar/Navbar';
import Head from 'next/head';

interface ComponentsProps {
  children: ReactNode;
}

function Layout({ children }: ComponentsProps): JSX.Element {
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
}

export default Layout;
