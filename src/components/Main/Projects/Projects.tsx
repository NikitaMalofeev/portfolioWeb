import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import LinkUi from "@/shared/ui/link/LinkUi";
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
      projectName: "Hardware-store",
      projectLink: "https://github.com/NikitaMalofeev/Design-Studio",
      projectDescription: "Одна из первых работ в 2022 с практикой HTML CSS",
      projectTech: ["HTML", "JS", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/NikitaMalofeev/Hardware_store",
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
