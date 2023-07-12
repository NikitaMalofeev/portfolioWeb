import React, { FC } from "react";
import Link from "next/link";

import style from "./navbar.module.scss";
import Logo from "@/components/Header/Logo/Logo";
import Button from "@/shared/ui/button/Button";

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

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__wrapper}>
        <div className={style.navigation__brand}>
          <Link href="url моего инстаграм или соц сети">
            <Logo />
          </Link>
        </div>
        <div className={style.navigation__menu}>
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
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
