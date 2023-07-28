import React, { FC } from 'react'

import Link from "next/link"
import style from "./link.module.scss"

type linkProps = {
    text: string;
    href: string;
    target: string;
}

const LinkUi: FC<linkProps> = ({ href, text, target }) => {
  return (
        <Link href={href} className={style.link}>{text}</Link>
  )
}

export default LinkUi