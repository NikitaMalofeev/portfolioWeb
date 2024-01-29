import React, { FC, useEffect, useRef, useState, RefObject } from "react";

import style from "./experience.module.scss";
import Link from "@/shared/ui/link/LinkUi";
import { motion } from "framer-motion";

type IExp = {
  name: string;
  role: string;
  url: string;
  start: string;
  end: string;
  shortDescription: string[];
};

const experienceList: IExp[] = [
  {
    name: "Guild of Developer",
    role: "Frontend developer (React)",
    url: "https://guild-of-developers.ru/",
    start: "18 ноября 2022",
    end: "30 мая 2023",
    shortDescription: [
      "Адаптивная верстка готовых страниц",
      "Создание новых динамичных страниц с помощью jsx, react hooks и scss mixins ",
      "Создание интерактивных элементов страницы (бургер-меню) с помощью функциональных компонентов, prop drill, hooks",
    ],
  },
  {
    name: "Chosy",
    role: "Frontend developer (React)",
    url: "https://chosy.ru/",
    start: "19 июня 2023",
    end: "30 сентября 2023",
    shortDescription: [
      "Написание новых фич, виджетов и модальных окон в FSD микрофронтенд архитектуре",
      "Взаимодействие с REST API, swagger, запросами на сервер, positive update, OpenSSH",
      "Написание кастомных хуков для обработки данных приходящих с сервера",
    ],
  },
  {
    name: "User Reserch",
    role: "Frontend developer (React)",
    url: "",
    start: "27 августа 2023",
    end: "10 ноября 2023",
    shortDescription: [
      "Спроектировал фронтенд архитектуру, выбрал технологии которые нужны для реализации бизнес логики",
      "Написал библиотеку кастомных компонентов + использовал Material UI для работы с Formik",
      "Собрал 2 страницы с конструкторами форм и активно взаимодействовал с бекендерами в вопросах о том как лучше принимать и отдавать данные",
      "Создал интерфейс для динамичной отправки, получения и обновления данных",
      "Был ответственен за сборку и работу с git (решал конфликты и принимал мерж реквесты)",
    ],
  },
  {
    name: "ArkTeach",
    role: "Frontend developer junior+ (React)",
    url: "https://calipso.shakeshev.com/",
    start: "18 ноября 2023",
    end: "1 января 2024",
    shortDescription: [
      "Проектирование сборки и архитектуры проекта(webpack, fsd)",
      "Создание динамичных страниц, c применением асинхронных чанков, с помощью jsx, react hooks и scss mixins",
      "Создание ui библиотеки компонентов",
      "Регистрация и авторизация на JWT",
      "Создание форм с динамичными данными",
      "Клиент-серверное взаимодействие",
    ],
  },
  {
    name: "Ваша компания",
    role: "Frontend developer (React)",
    url: "Твоя ссылка",
    start: "Сейчас",
    end: "∞",
    shortDescription: [
      "Под руководством старшего разработчика решу любую насущную задачу, при его отсутствии буду делать все что в моих силах чтобы ее решить)",
    ],
  },
];

const Experience: FC = () => {
  const [selected, setSelected] = useState(0);

  let underline = useRef() as RefObject<HTMLDivElement> | null;

  useEffect(() => {
    const transformSelected = () => {
      if (underline !== null && underline.current !== null) {
        underline!.current.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  return (
    <motion.div
      className={style.experience}
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: -100 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {/* <div className={style.experience__fixscroll}></div> */}
      <div className={style.experience__title}>
        <h2>Опыт работы 1 год 5 месяцев</h2>
      </div>
      <div className={style.experience__container}>
        <ul className={style.experience__slider}>
          <div className={style.experience__underline} ref={underline}></div>
          {experienceList.map((experience, index) => {
            return (
              <li
                key={index}
                className={`${style.experience__slider__item} ${
                  index === selected && style.experience__slider__item__selected
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className={style.experience__details}>
          <div className={style.experience__details__position}>
            <h3>
              <span>{experienceList[selected].role}</span>
              <span className={style.experience__details__position__company}>
                &nbsp;@&nbsp;
                <Link
                  text={experienceList[selected].name}
                  href={experienceList[selected].url}
                  target={"_blank"}
                >
                  {experienceList[selected].name}
                </Link>
              </span>
            </h3>
            <p className={style.experience__details__range}>
              {experienceList[selected].start} - {experienceList[selected].end}
            </p>
            <ul className={style.experience__details__list}>
              {experienceList[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className={style.experience__details__item}>
                    {description}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
