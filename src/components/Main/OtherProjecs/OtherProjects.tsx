import React, { useState, FC } from "react";

import Link from "next/link";
import { FiGithub, FiFolder } from "react-icons/fi";
import { motion } from "framer-motion";
import style from "./other.module.scss";
import next from "next";
import Button from "@/shared/ui/button/Button";

const OtherProjects: FC = () => {
  const otherProjectsData = [
    {
      projectName: "BurgerAngularApp",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/burgerAngularApp",
        github: "https://github.com/NikitaMalofeev/burgerAngularApp",
        externalLink: "https://github.com/NikitaMalofeev/burgerAngularApp",
      },
      projectDescription:
        "Это небольшое приложение по доставке бургеров где представлен функционал изменения валюты, изменения цены на товары в меню, простая валидация формы, переход по разделам с помощью ссылок",
      projectTech: ["Angular", "Node.js", "CSS", "Typescript"],
    },
    {
      projectName: "Advanced TODO",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/todo-advanced",
        github: "https://github.com/NikitaMalofeev/todo-advanced",
        externalLink: "https://github.com/NikitaMalofeev/todo-advanced",
      },
      projectDescription:
        "Продвинутое todo, заметки сохраняются в redux и local хранилища, имеют возможность сортировки, переноса состояния",
      projectTech: ["FSD", "React", "CSS", "Typescript"],
    },
    {
      projectName: "Rick and Morty Api",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/RicAndMortyApi",
        github: "https://github.com/NikitaMalofeev/RicAndMortyApi",
        externalLink: "https://github.com/NikitaMalofeev/RicAndMortyApi",
      },
      projectDescription:
        "Парсинг APi Rick and Morty, фильтрация по 3м разным типам, оптимизированная загрузка, FSD",
      projectTech: ["FSD", "React", "SCSS", "Typescript"],
    },
    {
      projectName: "Pokemons",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/pokemons",
        github: "https://github.com/NikitaMalofeev/pokemons",
        externalLink: "https://github.com/NikitaMalofeev/pokemons",
      },
      projectDescription:
        "Тестовое задание на стажировке где я с помощью axios и TypeScript получал данные из openapi и парсил нажатую картинку в блок аватара с помощью работы с массивами данных",
      projectTech: ["React", "TypeScript", "Axios", "Openapi", "SCSS"],
    },
    {
      projectName: "ExpressServer",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/express_server/",
        github: "https://github.com/NikitaMalofeev/express_server/",
        externalLink: "https://github.com/NikitaMalofeev/express_server/",
      },
      projectDescription:
        "Небольшая страница где я практиковал клиент-серверное взаимодействие и node.js",
      projectTech: ["TailWind", "HTML", "Node.js"],
    },
    {
      projectName: "Restaurants",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/restaurant_aggregator",
        github: "https://github.com/NikitaMalofeev/restaurant_aggregator",
        externalLink: "https://github.com/NikitaMalofeev/restaurant_aggregator",
      },
      projectDescription:
        "Многостраничный, адаптивный сайт агрегатор ресторанов",
      projectTech: ["HTML", "CSS", "JS"],
    },
    {
      projectName: "Design-studio",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/Design-Studio",
        github: "https://github.com/NikitaMalofeev/Design-Studio",
        externalLink: "https://github.com/NikitaMalofeev/Design-Studio",
      },
      projectDescription: "Большой лендинг студии дизайна",
      projectTech: ["HTML", "CSS", "JS"],
    },
    {
      projectName: "Minimal Blog",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/Minimal_Blog_SF",
        github: "https://github.com/NikitaMalofeev/Minimal_Blog_SF",
        externalLink: "https://github.com/NikitaMalofeev/Minimal_Blog_SF",
      },
      projectDescription: "Небольшой сайт, практика школы SF",
      projectTech: ["HTML", "CSS", "JS"],
    },
    {
      projectName: "Hardware-store",
      projectExternalLinks: {
        folder: "https://github.com/NikitaMalofeev/Design-Studio",
        github: "https://github.com/NikitaMalofeev/Design-Studio",
        externalLink: "https://github.com/NikitaMalofeev/Design-Studio",
      },
      projectDescription: "Одна из первых работ в 2022 с практикой HTML CSS ",
      projectTech: ["HTML", "CSS", "JS"],
    },
    {
      projectName: "YouTalk",
      projectExternalLinks: {
        folder: "",
        github: "",
        externalLink: "",
      },
      projectDescription: "Сайт службы психологической помощи ",
      projectTech: ["HTML", "CSS", "JS"],
    },
  ];

  const [noOfProject, setNoOfProject] = useState(3);

  const spliceMap = otherProjectsData.slice(0, noOfProject);

  const handleClick = () => {
    setNoOfProject(noOfProject + 3);
    if (noOfProject >= otherProjectsData.length) {
      setNoOfProject(3);
    }
  };

  return (
    <motion.div
      className={style.other}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: -100 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h1 className={style.other__title}>Другие учебные проекты</h1>
      <div className={style.other__grid}>
        {spliceMap.map(
          ({
            projectName,
            projectExternalLinks,
            projectDescription,
            projectTech,
          }) => {
            return (
              <div className={style.other__projects} key={projectName}>
                <ul className={style.other__projects__links}>
                  <li className={style.other__projects__links__item}>
                    <Link
                      target="_blank"
                      className={`${style.other__projects__links__item__link} ${style.link__folder}`}
                      href={projectExternalLinks.externalLink}
                    >
                      <FiFolder />
                    </Link>
                  </li>
                  <li className={style.other__projects__links__item}>
                    <Link
                      className={style.other__projects__links__item__link}
                      href={projectExternalLinks.externalLink}
                      target="_blank"
                    >
                      <FiGithub />
                    </Link>
                  </li>
                </ul>
                <div className={style.other__item__title}>
                  <h3>{projectName}</h3>
                </div>
                <div className={style.other__item__description}>
                  <p>{projectDescription}</p>
                </div>
                <ul className={style.other__item__techList}>
                  {projectTech.map((tech) => (
                    <li
                      className={style.other__item__techList__tech}
                      key={tech}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            );
          },
        )}
      </div>
      <div className={style.other__button}>
        <Button
          text={
            noOfProject >= otherProjectsData.length ? "Скрыть" : "Показать еще"
          }
          link="javascript:void(0);"
          onClick={handleClick}
        />
      </div>
    </motion.div>
  );
};

export default OtherProjects;
