import React, { FC } from "react";

import style from "./about.module.scss";
import Link from "@/shared/ui/link/LinkUi";
import { motion } from "framer-motion";
import Image from "next/image";

const lastTechnology = [
  { name: "React" },
  { name: "SASS" },
  { name: "FMAnimation" },
  { name: "Node.js" },
  { name: "Redux" },
  { name: "TypeScript" },
  { name: "Git flow" },
  { name: "Js ES6" },
  { name: "BEM" },
  { name: "Figma" },
  { name: "CI/CD, OpenSSH" },
  { name: "REST API, openapi" },
];

const About: FC = () => {
  return (
    <motion.div
      className={style.about}
      id={"about"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: -100 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className={style.about__title}>
        <h2>Обо мне</h2>
      </div>
      <div className={style.about__grid}>
        <div className={style.about__grid__info}>
          <p className={style.about__grid__text}>
            Я активно обучаюсь frontend разработке больше года. За это время я
            сделал более 10 проектов на HTML CSS, 1 игру на js, 2 небольших
            проекта по взаимодействию с сервером и 5 современных веб-приложений
            на React, TS, NEXT
          </p>
          <p className={style.about__grid__text}>
            Сейчас получаю коммерческий опыт в &nbsp;
            <Link
              text={"благотворительном проекте"}
              href="https://guild-of-developers.ru/"
              target="_blank"
            ></Link>{" "}
            &nbsp; и HR tech &nbsp;
            <Link
              text={"cтартапе"}
              href="https://chosy.ru/"
              target="_blank"
            ></Link>
            . Оттачиваю свои навыки разработки интерфейсов, с готовностью берясь
            за новые интересные задачи, всегда стремясь быстро учиться и
            адаптироваться.
          </p>
          <p className={style.about__grid__text}>
            В своей будущей работе я стремлюсь быть частью динамичной и
            вдохновляющей команды, Сотрудничество и синергия - это важные
            элементы, которые я ценю в рабочей среде. Мной движет возможность
            работать бок о бок с талантливыми людьми, которые могут бросать мне
            вызов и наставлять меня, способствуя моему профессиональному
            развитию.
          </p>

          <p className={style.about__grid__text}>
            Технологии которые я использовал в последних проектах
          </p>
          <ul className={style.about__grid__list}>
            {lastTechnology.map((name, index) => {
              return (
                <li key={index} className={style.about__grid__skill}>
                  {name.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.about__grid__photo}>
          <div className={style.about__grid__photo__overlay}></div>
          <div className={style.about__grid__photo__border}></div>
          <div className={style.about__grid__photo__container}>
            <Image src="/malofeev.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
