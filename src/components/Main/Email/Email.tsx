import React from "react";

import Link from "next/link";
import style from "./email.module.scss";

function Email() {
  return (
    <div className={style.email}>
      <Link
        href={"mailto:nikita.malofeev.work@gmail.com"}
        className={style.email__link}
        >
            nikita.malofeev.work@gmail.com
      </Link>
    </div>
  );
}

export default Email;
