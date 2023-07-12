import React, { FC } from "react";

import style from "./hero.module.scss";
import Link from "next/link";
import Button from "@/shared/ui/button/Button";

const Hero: FC = () => {
  return (
    <div className={style.hero}>
      <h1 className={style.hero__title}>Привет, меня зовут Никита Малофеев</h1>
      <h2 className={style.hero__subtitle}>Frontend-developer</h2>
      <h3 className={style.hero__subtitl}>
        Я разработал frontend этого сайта для вас
        используя Ts, Next, scss.module
        добро пожаловать!
      </h3>
      <p className={style.hero__text}>
        Ниже вы можете немного лучше узнать меня, посмотреть на портфолио и подробнее узнать о задачах которые я решал на коммерческих, благотворительных и учебных проектах
      </p>
      <div className={style.hero__button}>
        <Button text="Опыт работы" link="#experience" />
      </div>
    </div>
  );
};

export default Hero;
