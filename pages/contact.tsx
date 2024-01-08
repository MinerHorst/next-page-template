import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-16"
    >
      <div className="my-96 p-1 overflow-hidden ">
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Contact
        </motion.h1>
      </div>
    </motion.main>
  );
}
