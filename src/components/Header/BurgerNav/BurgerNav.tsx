import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "../burgerNav/burgerNav.module.scss";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import Logo from "../Logotype/Logo";
import motion from "framer-motion";

type PropTypes = {
  hideBurger: () => void;
};

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

const BurgerNav: FC<PropTypes> = ({ hideBurger }) => {
  const test = () => {
    hideBurger();
  };

  const [navbarVisible, setNavbarVisible] = useState(false);
  const [burgerNavVisible, setBurgerNavVisible] = useState(false);

  return (
    <nav
      className={`${style.navigation} ${
        burgerNavVisible ? style.navigation__is_open : ""
      }`}
    >
      <div
        className={`${style.navigation__wrapper} ${
          navbarVisible ? style.navigation__afterScroll : ""
        }`}
      >
        <div className={style.navigation__burger}></div>
        <div className={style.navigation__menu}>
          <div
            className={`${style.navigation__brand} ${
              burgerNavVisible ? style.navigation__brand_close : ""
            }`}
            
          >
            <Link href="url моего инстаграм или соц сети">
              <Logo />
            </Link>
          </div>
          <ul className={style.navigation__list} onClick={test}>
            {menu.map((item) => (
              <li key={item.name} className={style.navigation__item}>
                <Link href={item.link} className={style.navigation__link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={style.navigation__button}>
            <Button
              text="Resume"
              link="http://localhost:3000/resume.pdf"
              onClick={test}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerNav;
