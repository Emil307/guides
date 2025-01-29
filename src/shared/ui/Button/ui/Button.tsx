import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clas?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clas,
  theme,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, { [styles[theme]]: true })}
      {...props}
    >
      {children}
    </button>
  );
};
