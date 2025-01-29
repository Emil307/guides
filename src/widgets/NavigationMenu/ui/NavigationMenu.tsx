import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface NavigationMenuProps {
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.navigationMenu, className)}>
      <Link to="/">Главная</Link>
      <Link to="/create">Создать</Link>
      <Link to="/profile">Профиль</Link>
    </div>
  );
};
