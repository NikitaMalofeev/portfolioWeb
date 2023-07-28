import React, {FC} from "react";
import Link from "next/link";

import style from "@/shared/ui/button/button.module.scss"

interface IButton {
  text: string;
  link: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({
  text,
  link,
  onClick,
}) => {
  return (
    <div className={style.button__container}>
      <Link href={link} className={style.button} onClick={onClick}>{text}</Link>
     
    </div>
  )
  
}

export default Button;
