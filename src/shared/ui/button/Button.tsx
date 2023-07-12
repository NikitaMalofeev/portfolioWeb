import React from "react";
import Link from "next/link";

import style from "@/shared/ui/button/button.module.scss"

function Button({ text, link }: { text: string; link: string }) {
  return <Link href={link} className={style.button}>{text}</Link>;
}

export default Button;
