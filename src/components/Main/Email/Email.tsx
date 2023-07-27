import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import style from "./email.module.scss";

function Email() {
  return (
    <motion.div
      className={style.email}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 2.9,
      }}
    >
      <Link
        href={"mailto:nikita.malofeev.work@gmail.com"}
        className={style.email__link}
      >
        nikita.malofeev.work@gmail.com
      </Link>
    </motion.div>
  );
}

export default Email;
