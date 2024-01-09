import React, { FC } from "react";

import Button from "@/shared/ui/button/Button";
import { motion } from "framer-motion";
import style from "./contact.module.scss";

const Contact: FC = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <motion.div
      className={style.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: -100 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className={style.contact__title}>Что дальше?</h2>
      <h2 className={style.contact__subtitle}>Match</h2>
      <p className={style.contact__text}>
        Как разработчик интерфейсов, я стремлюсь использовать самые современные
        методы и инструменты доступные для разработки, повышая
        производительность и скорость обучения. Когда вы наймете меня, я
        привнесу эти навыки в ваш проект, предлагая эффективные решения.
      </p>
      <div className={style.contact__cta}>
        <Button
          text="Написать в telegram"
          link="https://t.me/HG1nv"
          onClick={test}
        />
      </div>
    </motion.div>
  );
};

export default Contact;
