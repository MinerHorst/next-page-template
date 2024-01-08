import Head from "next/head";
import { motion as m } from "framer-motion";
import HeroItem from "../Components/Hero";

export default function Home() {
  const d = new Date();

  return (
    <>
      <Head>
        <title>Next Template</title>
      </Head>
      <main>
        <HeroItem />
      </main>
    </>
  );
}
