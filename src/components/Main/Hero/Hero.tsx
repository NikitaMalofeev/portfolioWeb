import React, { FC, useState } from "react";

import style from "./hero.module.scss";
import Link from "next/link";
import Button from "@/shared/ui/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: FC = () => {
  const [recommended, setRecmended] = useState(false);
  const handleRecommended = () => {
    setRecmended((prev) => !prev);
  };
  const test = () => {
    console.log("Переход к актуальному опыту");
  };

  return (
    <div className={style.hero}>
      <motion.h1
        className={style.hero__title}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Привет, меня зовут
      </motion.h1>
      <motion.h2
        className={style.hero__name}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Никита Малофеев
      </motion.h2>
      <motion.h3
        className={style.hero__subtitle}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        Я разработал frontend этого сайта используя TypeScript, React, Next.js,
        scss.module.
        <br />
        Добро пожаловать!
      </motion.h3>
      <motion.p
        className={style.hero__text}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Ниже вы можете немного лучше узнать меня, посмотреть на портфолио и
        подробнее узнать о задачах которые я решал на коммерческих,
        благотворительных и учебных проектах
      </motion.p>
      <motion.div
        className={style.hero__button}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Сразу узнать об актульном опыте"
          link="#experience"
          onClick={test}
        />
      </motion.div>
      <motion.div
        className={style.hero__recomendation}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 1.85,
        }}
      >
        <img src="./skillfactory.png" alt="" />
        <img src="./chosyIcon.ico" alt="" />
        <p className={style.hero__recomendation__text}>
          Этот кандидат рекомендован компаниями Сhosy и SkillFactory🏆
        </p>
        <button
          onClick={() => handleRecommended()}
          className={style.hero__recommended_button}
        >
          Рекомендательное письмо (смотреть c десктопа)
        </button>
        {recommended && (
          <div className={style.hero__recommended}>
            <Image
              className={style.hero__recommended_button}
              width={400}
              height={1000}
              alt=""
              src="/Recomended.png"
            ></Image>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
