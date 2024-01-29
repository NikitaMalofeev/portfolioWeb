import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import style from "./navbar.module.scss";
import Logo from "@/components/Header/Logotype/Logo";
import Button from "@/shared/ui/button/Button";
import Burger from "../Burger/Burger";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";

type IMenu = {
  name: string;
  link: string;
};

const menu: IMenu[] = [
  { name: "Обо мне", link: "/#about" },
  { name: "Опыт работы", link: "/#experience" },
  { name: "Портфолио", link: "/#work" },
  { name: "Контакты", link: "/#contact" },
];

const NavBar: FC = () => {
  const test = () => {
    console.log(menu);
  };
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [burgerNavVisible, setBurgerNavVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setNavbarVisible(true) : setNavbarVisible(false);
    });
  }, []);

  return (
    <nav className={style.navigation}>
      <div
        className={`${style.navigation__wrapper} ${
          navbarVisible ? style.navigation__afterScroll : ""
        }`}
      >
        <motion.div
          className={`${style.navigation__brand} ${
            burgerNavVisible ? style.navigation__brand_close : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Link href="url моего инстаграм или соц сети">
            <Logo />
          </Link>
        </motion.div>
        <ThemeSwitcher className={style.navigation__switcher} />
        <div className={style.navigation__burger}></div>
        <div className={style.navigation__menu}>
          <ul
            className={`${
              burgerNavVisible === false ? style.navigation__list : ""
            } ${navbarVisible ? style.navigation__list_open : ""}`}
            onClick={test}
          >
            {menu.map((item, index) => (
              <motion.li
                key={item.name}
                className={style.navigation__item}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={item.link} className={style.navigation__link}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className={style.navigation__button}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button
              text="Resume"
              link="http://localhost:3000/resume.pdf"
              onClick={test}
            />
          </motion.div>
        </div>
      </div>
      <Burger isChange={setBurgerNavVisible} />
    </nav>
  );
};

export default NavBar;
