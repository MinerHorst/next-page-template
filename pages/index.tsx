import Head from "next/head";
import HeroItem from "../Components/Hero";

export default function Home() {
  const d = new Date();

  return (
    <>
      <Head>
        <title>Next Template</title>
      </Head>
      <main className="bg-white w-screen h-screen overflow-hidden">
        <HeroItem />
      </main>
    </>
  );
}
