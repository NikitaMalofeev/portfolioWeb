import React, { FC, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import style from "./loader.module.scss";

type ILoader = {
  isLoading: boolean;
  setIsLoading: () => void;
};

const Loader: FC<ILoader> = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  

  return (
    <AnimatePresence>
          <motion.div
            className={style.loader}
            exit={{ scale: 1 }}
            key="motiondivleave"
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g>
                <g id="N" transform="translate(32.000000, 28.000000)">
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    exit={{
                      scale: 2,
                    }}
                    fill="currentColor"
                    d="M 0 45 M 11 0 L 9 0 L 4 0 L 4 0 V 45 L 9 45 H 11 M 11 45 L 11 0 M 11 18 L 17 21 L 23 18 L 23 26 L 12 26 L 11 26 M 23 19 L 23 0 L 30 0 L 30 45 L 23 45"
                  />
                </g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  exit={{
                      scale: 2,
                    }}
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
                />
              </g>
            </svg>
          </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
