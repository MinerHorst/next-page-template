import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import { AnimatePresence } from "framer-motion";
import React from "react";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
