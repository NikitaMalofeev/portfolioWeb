import React, { FC, useEffect, useRef, useState, RefObject } from "react";

import style from "./experience.module.scss";
import Link from "@/shared/ui/link/Link";

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
    start: "18 мая",
    end: "Продолжаю работать",
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
    start: "19 июня",
    end: "Продолжаю работать",
    shortDescription: [
      "Написание новых фич, виджетов и модальных окон в FSD микрофронтенд архитектуре",
      "Взаимодействие с REST API, swagger, запросами на сервер, positive update, OpenSSH",
      "Написание кастомных хуков для разделения data приходящей с сервера",
    ],
  },
  {
    name: "Ваша компания",
    role: "Frontend developer (React)",
    url: "Твоя ссылка",
    start: "Сейчас",
    end: "∞",
    shortDescription: [
      "Задачи связанные с разработкой компонентов, взаимодействия с сервером, доработкой существующих фич и другим вещям которым я могу быстро обучиться",
    ],
  },
];

const Experience: FC = () => {
  const [selected, setSelected] = useState(0);

  let underline = useRef() as RefObject<
    HTMLDivElement
  > | null;

  useEffect(() => {
    const transformSelected = () => {
        if (underline !== null && underline.current !== null) {
          underline!.current.style.top = `${selected * 2.5}rem`
        }
    }
    transformSelected();
  },[selected])

  return (
    <div className={style.experience} id="experience">
      <div className={style.experience__title}>
        <h2>Опыт работы 6 мес.</h2>
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
                  href={experienceList[selected].url}
                  target={"_blank"}
                  text={experienceList[selected].name}
                >
                  {experienceList[selected].name}
                </Link>
              </span>
            </h3>
            <p className={style.experience__details__range}>
            {experienceList[selected].start} - {experienceList[selected].end}
            </p>
            <ul className={style.experience__details__list}>
            {
                experienceList[selected].shortDescription.map((description, index) => (
                    <li key={index} className={style.experience__details__item}>
                        {description}
                    </li>
                ))
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
