import Link from "next/link";
import { motion as m } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <h1 className="text-3xl font-bold">Contact Page</h1>
    </m.main>
  );
}
