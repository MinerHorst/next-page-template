import Head from "next/head";
import { motion as m } from "framer-motion";
import React from "react";

export default function Home() {
  const d = new Date();

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16 "
    >
      <Head>
        <title>Create Next App Template</title>
      </Head>
      <h1 className="text-3xl font-bold">Index</h1>
    </m.div>
  );
}
