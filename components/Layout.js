import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({children}) => {
    return (
      <>
        <Navbar />

        <main className="container py-4">{children}</main>

        <Footer />
      </>
    );
}
