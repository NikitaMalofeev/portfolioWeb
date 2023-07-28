import { useState } from "react";

import BurgerNav from "../BurgerNav/BurgerNav";

import style from "./burger.module.scss";
import { motion } from "framer-motion";

interface IProps {
  isChange: (...args: any[]) => any;
}

const Burger = ({ isChange }: IProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const hideSubMenu = () => {
    setIsOpened(false);
  };

  const burgerOpenClass = isOpened && style.burger__button_open;

  return (
    <div className={style.burger__container}>
      <motion.div
        className={style.burger__button + " " + burgerOpenClass}
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <span className={style.burger__string}></span>
      </motion.div>
      {isOpened && <BurgerNav hideBurger={hideSubMenu} />}
    </div>
  );
};

export default Burger;
