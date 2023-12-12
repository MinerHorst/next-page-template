import Head from "next/head";
import { motion as m } from "framer-motion";
import { container, item } from "../animation";

export default function Home() {
  const d = new Date();

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" text-white absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-16 "
    >
      <Head>
        <title>Next Template</title>
      </Head>
      <main>
        <div className="my-96 p-1 overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl "
          >
            Index
          </m.h1>
        </div>
      </main>
    </m.div>
  );
}
