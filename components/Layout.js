import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';
import {useRouter} from 'next/router';  
import nProgress from 'nprogress';  /*carga un loader*/

export const Layout = ({children}) => {

  const router = useRouter();

   useEffect(() => {
     // Permite ver la url actual gracias a hook useRouter - escucha los cambios - apaga

     const handleRouteChange = (url) => {
       console.log(url);
       nProgress.start();
     };

     router.events.on("routeChangeStart", handleRouteChange);

     router.events.on("routeChangeComplete", () => nProgress.done());

     return () => {
       router.events.off("routeChangeStart", handleRouteChange);
     };
   }, []); /* Spinner y efecto de carga gracias a nProgress*/ 

    return (
      <>
        <Navbar />

        <main className="container py-4">{children}</main>

        <Footer />
      </>
    );
}
