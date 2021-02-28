import { Navbar } from './Navbar';
import Head from 'next/head';

export const Layout = ({children}) => {
    return (
      <>
        <Navbar />

        <main className="container py-4">{children}</main>
      </>
    );
}
