import { motion as m } from "framer-motion";
import Link from "next/link";

export default function Error() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-white absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-16"
    >
      <div className="my-96 p-1 overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Whoops something went wrong.
        </m.h1>
        <Link href={"/"} className="hover:cursor-pointer">
          Go back to Home
        </Link>
      </div>
    </m.main>
  );
}
