import React, { FC } from 'react'
import style from "./link.module.scss"

type linkProps = {
    children: any;
    text: string;
    href: string;
    target: string;
}

const LinkUi: FC<linkProps> = ({ children, href, text, target }) => {
  return (
        <a href={href} className={style.link}>{text}</a>
  )
}

export default LinkUi