import React, {FC} from "react";
import Link from "next/link";

import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/Lia";

import style from "./index.module.scss";
import { IconType } from "react-icons";

type IIcons = {
  name: string;
  icon: any;
  link: string;
};

const socialLinks: IIcons[] = [
  { 
    name: "Github", 
    icon: <FiGithub />, 
    link: "https://github.com/NikitaMalofeev" 
  },  
  { 
    name: "Inst", 
    icon: <FiInstagram />, 
    link: "https://instagram.com/rupinvest?igshid=NTc4MTIwNjQ2YQ==" 
  }, 
  { 
    name: "LinkedIn", 
    icon: <FiLinkedin />, 
    link: "http://localhost3000" 
  }, 
  { 
    name: "Telegram", 
    icon: <LiaTelegramPlane />, 
    link: "http://localhost3000" 
  }, 
];

const SocialIcons: FC = () => {
  return (
    <div className={style.social}>
        <ul className={style.social__list}>
        {socialLinks.map((item) => (
              <li key={item.name} title={item.name} className={style.social__item}>
                <Link href={item.link} className={style.social__link} target="_blank">
                  {item.icon}
                </Link>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialIcons;
