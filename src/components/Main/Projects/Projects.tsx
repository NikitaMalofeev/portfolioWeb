import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import style from "./projects.module.scss";

const Projects: FC = () => {
  const projectsData = [
    {
      image: "/chosy.png",
      isCommercial: true,
      overline: "Коммерческий проект",
      projectName: "Chosy (react app)",
      projectLink: "https://web.chosy.ru/",
      projectDescription:
        "Мобильное web приложение с FSD микрофронтенд архитектурой и SWR библиотекой для работы с REST api. На данном проекте я писал кастомные хуки для работы с api, виджеты и фичи для реализации требуемой бизнес логики, модальные окна, формы, подробнее -> ReadMe Git",
      projectTech: [
        "React",
        "Love",
        "Rest api",
        "Typescript",
        "OpenSSH",
        "Ci/Cd",
      ],
      projectExternalLinks: {
        github: "https://github.com/chosyHr/webchosy",
        externalLink: "",
      },
      projectMore: "",
    },
    {
      image: "/calipso.jpg",
      isCommercial: true,
      overline: "Коммерческий проект",
      projectName: "Calipso market",
      projectLink: "https://calipso.shakeshev.com/",
      projectDescription:
        "Веб-приложение для заказа воды, работа велась 10 дней. За это время написал библиотеку кастомных компонентов, создал несколько динамичных, вложенных форм для регистраци, доставки и авторизации, все это прокинул через redux store. Создал несколько классных переиспользуемых компонентов(#модальное окно с 3-мя анимациями и 7 видами контента в 1 компоненте), сверстал 6 разных страниц и многое другое.",
      projectTech: ["React", "Redux", "Formik", "Typescript", "scss"],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/calipso",
        externalLink: "https://calipso.shakeshev.com/",
      },
      projectMore: "https://calipso.shakeshev.com/",
    },
    {
      image: "/fonds.png",
      isCommercial: true,
      overline: "Коммерческий проект",
      projectName: "Инкубатор фондов",
      projectLink: "https://gitlab.com/god15/funds-incubator/frontend/ficlient",
      projectDescription:
        "Большой проект сайт-система для управления благотворительными фондами, на нем я в основном занимался адаптивом готовых страниц на scss, написанием функциональных компонентов для форм и страниц, сделал классное, адаптивное, масштабируемое бургер меню из 4-х уровнего компонента.",
      projectTech: ["React", "TypeScript", "SCSS", "Git, copilot"],
      projectExternalLinks: {
        github: "https://gitlab.com/god15/funds-incubator/frontend/ficlient",
        externalLink: "",
      },
      projectMore: "",
    },
    {
      image: "/SeeSkills.jpg",
      isCommercial: false,
      overline: "Учебный проект",
      projectName: "See my Skill",
      projectLink: "https://github.com/NikitaMalofeev/React-See-my-Skill",
      projectDescription:
        "Квинтессенция моих знаний, в этом проекте представлена темизация, интернационализация, передовой подход к написанию модульной системы (FSD) и переиспользуемых компонентов, широкое использование возможностей redux, typescript, сделана легко расширяемая сборка webpack, настроено интеграционное, unit, e2e и регрессионное тестирование, различная работа с данными",
      projectTech: [
        "React",
        "TypeScript",
        "SCSS",
        "storybook",
        "jest",
        "Redux",
      ],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/React-See-my-Skill",
        externalLink: "https://github.com/NikitaMalofeev/React-See-my-Skill",
      },
      projectMore: "https://github.com/NikitaMalofeev/React-See-my-Skill",
    },
    {
      image: "/UserResearch.png",
      isCommercial: true,
      overline: "Коммерческий проект",
      projectName: "CustInsights",
      projectLink: "https://custinsights.tilda.ws/",
      projectDescription:
        "Веб-приложение для анкетирования ЦА для различных компаний. Я спроектировал архитектуру, написал библиотеку кастомных компонентов и интегрировал ее в конструктор форм работающий с REST api сервером",
      projectTech: [
        "React",
        "Redux",
        "Rest api",
        "Typescript",
        "MaterialUi",
        "Formik",
        "Ci/Cd",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://custinsights.tilda.ws/",
      },
      projectMore: "",
    },
    {
      image: "/projects3.png",
      isCommercial: false,
      overline: "Учебный проект",
      projectName: "Snake-game",
      projectLink: "https://github.com/NikitaMalofeev/SnakeMazzze",
      projectDescription:
        "Для практики JS core я сделал игру змейка c помощью управления state, canvas и reqAnimationFrame в которой реализованы разные уровни, коллизия, увеличение скорости анимации, прохождение через стены",
      projectTech: ["HTML", "JS", "CSS", "AnimationFrame"],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/SnakeMazzze",
        externalLink: "",
      },
    },
    {
      image: "/projects4.png",
      isCommercial: false,
      overline: "Учебный проект",
      projectName: "MongoDb_CRUD_Actions",
      projectLink: "https://nextjs-server-actions-nine.vercel.app",
      projectDescription:
        "В этом проекте я реализовал CRUD actions используя next, js, mongoDB",
      projectTech: ["Next.js, React, MongoDB, fetch"],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/MongoDB_CRUD_actions",
        externalLink: "https://nextjs-server-actions-nine.vercel.app",
      },
    },
    {
      image: "/projects5.png",
      isCommercial: false,
      overline: "Учебный проект",
      projectName: "Synclock",
      projectLink: "",
      projectDescription:
        "Полностью интерактивный event календарь, копия google календаря",
      projectTech: ["React, context, tailwind"],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/ClockSync",
        externalLink: "",
      },
    },
  ];

  return (
    <motion.div
      className={style.projects}
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: -100 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <motion.div
        className={style.projects__title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <div className={style.projects__fixscroll}></div>
        <h2>Несколько моих проектов</h2>
      </motion.div>
      <div className={style.projects__container}>
        {projectsData.map(
          ({
            image,
            isCommercial,
            overline,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
            projectMore,
          }) => {
            return (
              <motion.div
                className={`${style.projects__container__item} ${style.project}`}
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className={style.project__image}>
                  <div className={style.project__image__overlay}></div>
                  <div className={style.project__image__container}>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className={style.project__info}>
                  <p
                    className={`${style.project__info__overline} ${
                      isCommercial == true
                        ? style.project__info__overline_commercial
                        : ""
                    }`}
                  >
                    {overline}
                  </p>
                  <h3 className={style.project__info__title}>{projectName}</h3>
                  <div className={style.project__info__description}>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className={style.project__info__techList}>
                    {projectTech.map((tech) => (
                      <li
                        className={style.project__info__techList__item}
                        key={tech}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className={style.project__info__links}>
                    <li className={style.project__info__links__item}>
                      <Link
                        href={projectExternalLinks.github}
                        className={style.project__info__links__item__link}
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className={style.project__info__links__item}>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className={style.project__info__links__item__link}
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
