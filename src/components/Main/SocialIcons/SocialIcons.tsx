import React, { FC } from "react";
import Link from "next/link";

import { FiGithub, FiInstagram, FiLinkedin, FiPhoneCall } from "react-icons/fi";

import style from "./index.module.scss";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type IIcons = {
  index: number;
  name: string;
  icon: any;
  link: string;
};

const socialLinks: IIcons[] = [
  {
    index: 0,
    name: "Github",
    icon: <FiGithub />,
    link: "https://github.com/NikitaMalofeev",
  },
  {
    index: 1,
    name: "Inst",
    icon: <FiInstagram />,
    link: "https://instagram.com/rupinvest?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    index: 2,
    name: "LinkedIn",
    icon: <FiLinkedin />,
    link: "http://localhost3000",
  },
  {
    index: 3,
    name: "Telegram",
    icon: <FiPhoneCall />,
    link: "tel:+77476141380",
  },
];

const SocialIcons: FC = () => {
  return (
    <motion.div
      className={style.social}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className={style.social__list}>
        {socialLinks.map((item, index) => (
          <motion.li
            key={item.name}
            title={item.name}
            className={style.social__item}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.95 + index * 0.1,
            }}
          >
            <Link
              href={item.link}
              className={style.social__link}
              target="_blank"
            >
              {item.icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
