import React from "react";
import ThemeDarkIcon from "../../../../public/icons/theme-light-icon.svg";
import ThemeLightIcon from "../../../../public/icons/theme-dark-icon.svg";
import { useTheme } from "@/providers/ThemeProvider";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.theme__button} onClick={toggleTheme}>
      {theme === "app_light_theme" ? (
        <Image
          src={ThemeDarkIcon}
          alt=""
          className={styles.theme__icon}
          layout="fixed"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={ThemeLightIcon}
          alt=""
          className={styles.theme__icon}
          layout="fixed"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};
